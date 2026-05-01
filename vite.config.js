import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    {
      /* Vite's sirv serves public/ with extensions:[] — no directory-index fallback.
         Requests to /demos/docs/ and /demos/chat/ hit the SPA fallback and render
         the portfolio app instead of the static builds.
         This plugin rewrites those directory paths to explicit index.html files
         before sirv runs, so the correct static build is served. */
      name: 'serve-demo-dirs',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (/^\/demos\/docs\/?(\?.*)?$/.test(req.url)) {
            req.url = '/demos/docs/index.html'
          } else if (/^\/demos\/chat\/?(\?.*)?$/.test(req.url)) {
            req.url = '/demos/chat/index.html'
          }
          next()
        })
      },
    },
  ],
})
