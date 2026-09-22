/**
 * localStorage persistence for the demo's in-memory audit store.
 *
 * audit-store.js keeps its rows on globalThis.__ceAuditTrails (a Map) and its
 * id sequence on globalThis.__ceAuditIds, grabbing both once at module load.
 * This module is imported FIRST by the api-mock entry, so the saved trail is in
 * place before audit-store evaluates; afterwards it only ever mutates those two
 * objects in place, because audit-store holds references to them.
 */

export const STORAGE_KEY = 'convengine-chat-demo:audit';

function read() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    return saved && Array.isArray(saved.trails) ? saved : null;
  } catch {
    return null; // private window / blocked storage — the trail lives for this tab only
  }
}

export function loadAudit() {
  const trails = (globalThis.__ceAuditTrails ??= new Map());
  const ids    = (globalThis.__ceAuditIds ??= { next: 1 });
  const saved  = read();
  if (!saved) return;
  trails.clear();
  for (const [id, rows] of saved.trails) trails.set(id, rows);
  ids.next = Math.max(ids.next, Number(saved.nextId) || 1);
}

// One turn is ~85 rows, each with a full _meta envelope: ~650 KB of JSON.
// audit-store caps a conversation at 200 rows (~1.5 MB), so against the ~5 MB
// quota only a few fit — saveAudit() also drops the oldest on QuotaExceeded.
const MAX_CONVERSATIONS = 6;

const lastId = (rows) => rows[rows.length - 1]?.auditId ?? 0;

export function saveAudit() {
  const trails = globalThis.__ceAuditTrails;
  // Newest conversations first; the oldest are the ones dropped.
  let entries = [...trails.entries()].sort((a, b) => lastId(b[1]) - lastId(a[1])).slice(0, MAX_CONVERSATIONS);
  for (const [id] of [...trails.entries()]) if (!entries.some(([k]) => k === id)) trails.delete(id);

  while (entries.length) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ trails: entries, nextId: globalThis.__ceAuditIds.next }));
      return;
    } catch (e) {
      if (e?.name !== 'QuotaExceededError') return; // storage blocked — keep the in-memory copy
      entries = entries.slice(0, -1);
    }
  }
}

loadAudit();
