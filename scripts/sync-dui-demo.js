#!/usr/bin/env node
/**
 * Builds the DUI showcase and syncs it into public/framework/dui/.
 *
 * Run from the salilvnair.github.io root:
 *   npm run sync-dui-demo
 *   npm run sync-dui-demo -- --skip-build     # copy what is already built
 *   DUI_REPO=/path/to/dui npm run sync-dui-demo
 *
 * The showcase is an ordinary Vite app, so unlike the chat demo there is no
 * config to swap and no API to mock — it is a build and a copy. Two details
 * are load-bearing:
 *
 *   • It is built with `build:demo`, into `demo-dist/`, not `build`. The dui
 *     repo's `build` and `build:lib` both write to `dist/` with
 *     `emptyOutDir`, so building the demo there would delete the publishable
 *     library sitting in it.
 *
 *   • It is built with `--base=/framework/dui/`, so the asset paths in the
 *     built index.html are absolute. The app's own config uses a relative
 *     base, which is right for previewing it at `/` — and wrong here: the
 *     demo modal loads `/framework/dui` without a trailing slash, relative
 *     paths then resolve against `/framework/`, and every asset 404s into a
 *     blank iframe. This is also how the ck8t demo beside it is built.
 *
 * The destination is wiped before copying. A Vite build hashes its filenames,
 * so copying over the top of a previous sync leaves every asset from every
 * earlier build behind — the folder grows by twenty-five megabytes a release
 * and nothing ever references the old files again.
 */

import { execSync } from 'child_process';
import { existsSync, rmSync, cpSync, readdirSync, statSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

/* A sibling checkout by default, which is where it is on every machine this
   has been run on; DUI_REPO for the one where it is not. */
const DUI_REPO = process.env.DUI_REPO
  ? resolve(process.env.DUI_REPO)
  : resolve(ROOT, '..', 'dui');

const BUILD_DIR = resolve(DUI_REPO, 'demo-dist');
const DEST = resolve(ROOT, 'public/framework/dui');
/* Where the demo is served from, and therefore what its asset paths say. */
const BASE = '/framework/dui/';

const skipBuild = process.argv.includes('--skip-build');

function du(dir) {
  let bytes = 0;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    bytes += entry.isDirectory() ? du(full) : statSync(full).size;
  }
  return bytes;
}

if (!existsSync(DUI_REPO)) {
  console.error(`No dui checkout at ${DUI_REPO}.`);
  console.error('Clone it beside this repo, or set DUI_REPO to where it is:');
  console.error('  DUI_REPO=/path/to/dui npm run sync-dui-demo');
  process.exit(1);
}

if (!skipBuild) {
  console.log(`🔨  Building the DUI showcase in ${DUI_REPO}...`);
  execSync(`npm run build:demo -- --base=${BASE}`, { cwd: DUI_REPO, stdio: 'inherit' });
}

if (!existsSync(BUILD_DIR)) {
  console.error(`No build output at ${BUILD_DIR}.`);
  console.error(skipBuild
    ? 'Drop --skip-build, or run `npm run build:demo` in the dui repo first.'
    : 'The build reported success but wrote nothing — check the output above.');
  process.exit(1);
}

console.log('🧹  Clearing public/framework/dui/...');
rmSync(DEST, { recursive: true, force: true });

console.log('📂  Copying demo-dist/ → public/framework/dui/...');
cpSync(BUILD_DIR, DEST, { recursive: true });

/* The entry point is the one file the rest of the site links to; if it is
   missing, every other check passed and the demo is still a 404. */
if (!existsSync(resolve(DEST, 'index.html'))) {
  console.error('Copied, but there is no index.html in the result. Nothing will load.');
  process.exit(1);
}

const mb = (du(DEST) / 1024 / 1024).toFixed(1);
console.log(`\n✨  DUI demo synced — ${mb} MB at /framework/dui/`);
console.log('    Local check:  npm run dev  →  http://localhost:5173/framework/dui/');
