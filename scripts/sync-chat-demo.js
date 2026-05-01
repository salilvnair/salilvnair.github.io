#!/usr/bin/env node
/**
 * Builds convengine-chat-demo as a static export and syncs it into
 * public/framework/convengine-chat/, then injects the client-side API mock script tag.
 *
 * Run from the salilvnair.github.io root:
 *   npm run sync-chat-demo
 */

import { execSync } from 'child_process';
import { readFileSync, writeFileSync, cpSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname   = dirname(fileURLToPath(import.meta.url));
const ROOT        = resolve(__dirname, '..');
const CHAT_DEMO   = resolve(__dirname, '../../convengine-ui-builder/convengine-chat-demo');
const DEST        = resolve(ROOT, 'public/framework/convengine-chat');
const NEXT_CONFIG = resolve(CHAT_DEMO, 'next.config.mjs');

// ── 1. Patch next.config.mjs (add output + basePath) ────────────────────────
console.log('📝  Patching next.config.mjs for static export...');
const originalConfig = readFileSync(NEXT_CONFIG, 'utf8');
const patchedConfig = `/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/framework/convengine-chat',
  trailingSlash: false,
  transpilePackages: ['@salilvnair/convengine-chat'],
};

export default nextConfig;
`;
writeFileSync(NEXT_CONFIG, patchedConfig, 'utf8');

try {
  // ── 2. Build ───────────────────────────────────────────────────────────────
  console.log('🔨  Building convengine-chat-demo (npm run build)...');
  execSync('npm run build', { cwd: CHAT_DEMO, stdio: 'inherit' });

  const OUT = resolve(CHAT_DEMO, 'out');
  if (!existsSync(OUT)) {
    throw new Error('Build output directory "out/" not found in ' + CHAT_DEMO);
  }

  // ── 3. Copy output → public/framework/convengine-chat ────────────────────
  console.log('📂  Copying out/ → public/framework/convengine-chat/...');
  cpSync(OUT, DEST, { recursive: true });

  // ── 4. Inject api-mock.js script tag ──────────────────────────────────────
  console.log('💉  Injecting api-mock.js script tag into HTML files...');
  const MOCK_TAG   = '<script src="/framework/convengine-chat/api-mock.js"></script>';
  const FIRST_CHUNK = '<script src="/framework/convengine-chat/_next/static/chunks/fd9d1056-';

  for (const file of ['index.html', 'fullscreen.html']) {
    const filePath = resolve(DEST, file);
    if (!existsSync(filePath)) {
      console.warn(`  ⚠️  ${file} not found, skipping`);
      continue;
    }
    let html = readFileSync(filePath, 'utf8');
    if (html.includes(MOCK_TAG)) {
      console.log(`  ✅  ${file} already has the mock tag`);
    } else {
      // Inject synchronously before the first async Next.js chunk
      const idx = html.indexOf(FIRST_CHUNK);
      if (idx === -1) {
        // Fallback: inject right after <head>
        html = html.replace('<head>', '<head>' + MOCK_TAG);
      } else {
        html = html.slice(0, idx) + MOCK_TAG + html.slice(idx);
      }
      writeFileSync(filePath, html, 'utf8');
      console.log(`  ✅  Injected into ${file}`);
    }
  }

  console.log('\n✨  Done! Chat demo synced to public/framework/convengine-chat/');

} finally {
  // ── 5. Restore next.config.mjs ────────────────────────────────────────────
  console.log('♻️   Restoring next.config.mjs...');
  writeFileSync(NEXT_CONFIG, originalConfig, 'utf8');
}
