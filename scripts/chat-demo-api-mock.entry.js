/**
 * Browser entry for public/framework/convengine-chat/api-mock.js, bundled by
 * scripts/sync-chat-demo.js with esbuild.
 *
 * The static export has no app/api routes, so this fetch interceptor stands in
 * for them. It bundles the demo's OWN mock modules (through the @chat-demo
 * alias) instead of re-implementing them, so the published demo answers — and
 * audits — the same way `npm run dev` does:
 *
 *   POST /api/v1/conversation/message            fake-chat.js matchResponse
 *   GET  /api/v1/conversation/audit/search       audit-store.js searchAuditTrails
 *   GET  /api/v1/conversation/audit/{id}         audit-store.js getAuditTrail
 *   POST /api/v1/conversation/feedback           { ok: true }
 *
 * The trail is persisted to localStorage because the Audit Explorer opens in a
 * NEW TAB, which would otherwise see an empty engine.
 */

// First on purpose: seeds the audit store's globals before audit-store.js loads.
import { STORAGE_KEY, loadAudit, saveAudit } from './chat-demo-api-mock.storage.js';
import { matchResponse } from '@chat-demo/app/data/fake-chat.js';
import { buildTurnAudit } from '@chat-demo/app/data/fake-audit.js';
import { recordAuditEntry, getAuditTrail, searchAuditTrails } from '@chat-demo/app/api/v1/conversation/audit-store.js';

// The chat tab wrote new rows — pick them up so this tab's explorer sees them.
window.addEventListener('storage', (e) => {
  if (e.key === STORAGE_KEY) loadAudit();
});

const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { 'Content-Type': 'application/json' },
});

const think = () => new Promise((r) => setTimeout(r, 250 + Math.random() * 500));

function decodedSize(b64) {
  try { return atob(String(b64 ?? '')).length; } catch { return 0; }
}

function recordTurn({ conversationId, userText, trace, agent, files = [], inputParams = {} }) {
  if (!conversationId) return;
  loadAudit(); // another tab may have written since this one last looked
  for (const { stage, payload } of buildTurnAudit({ conversationId, userText, trace, agent, files, inputParams })) {
    recordAuditEntry(conversationId, stage, payload);
  }
  saveAudit();
}

async function handleMessage(body) {
  const { message, inputParams = {}, conversationId } = body;
  const userText = message ?? '';
  await think();

  // Same reply as the dev route's attachment branch, sized in the browser.
  const files = Array.isArray(inputParams?.files) ? inputParams.files : [];
  if (files.length) {
    const lines = files.map((f) => `- **${f?.name}** — ${f?.mimeType || 'unknown type'}, ${decodedSize(f?.content)} bytes decoded`);
    const parts = [`Got ${files.length} file(s):`, '', lines.join('\n')];
    if (userText.trim()) parts.push('', `You also said: "${userText.trim()}"`);
    parts.push('', '_(demo handler — a real backend would parse these)_');
    const agent = parts.join('\n');
    recordTurn({
      conversationId, userText, agent, inputParams,
      trace: { stage: 'attachment-handler' },
      files: files.map((f) => ({ name: f?.name, mimeType: f?.mimeType, bytesDecoded: decodedSize(f?.content) })),
    });
    return json({ payload: agent });
  }

  const trace = {};
  const agent = matchResponse(userText, { inputParams, trace });
  recordTurn({ conversationId, userText, trace, agent, inputParams });
  return json({ payload: agent });
}

const originalFetch = window.fetch.bind(window);

window.fetch = async function (input, init) {
  const url = typeof input === 'string' ? input : input?.url || '';
  let u;
  try { u = new URL(url, window.location.origin); } catch { return originalFetch(input, init); }

  // Matches with or without an apiHost / base path in front.
  const at = u.pathname.indexOf('/api/v1/conversation/');
  if (at === -1) return originalFetch(input, init);
  const path = u.pathname.slice(at);
  const method = String(init?.method || (typeof input !== 'string' && input?.method) || 'GET').toUpperCase();

  let body = {};
  try { body = init?.body ? JSON.parse(init.body) : {}; } catch { body = {}; }

  if (path === '/api/v1/conversation/message' && method === 'POST') return handleMessage(body);

  if (path === '/api/v1/conversation/feedback' && method === 'POST') {
    return json({ ok: true, received: body.feedbackType ?? null });
  }

  if (path === '/api/v1/conversation/audit/search' && method === 'GET') {
    loadAudit();
    const p = u.searchParams;
    const limit = Math.min(Number(p.get('limit')) || 50, 500);
    return json(searchAuditTrails(p.get('q') ?? '', limit, {
      stage:          p.get('stage'),
      conversationId: p.get('conversationId'),
      intent:         p.get('intent'),
      state:          p.get('state'),
      errorsOnly:     p.get('errorsOnly') === 'true',
      offset:         p.get('offset'),
    }));
  }

  const trail = path.match(/^\/api\/v1\/conversation\/audit\/([^/]+)$/);
  if (trail && method === 'GET') {
    loadAudit();
    return json(getAuditTrail(decodeURIComponent(trail[1])));
  }

  return originalFetch(input, init);
};
