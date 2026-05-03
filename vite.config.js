import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    {
      /* Vite's sirv serves public/ with extensions:[] — no directory-index fallback.
         Requests to /framework/* hit the SPA fallback and render the portfolio app
         instead of the static builds. This plugin rewrites those paths to explicit
         index.html files before sirv runs. */
      name: 'serve-demo-dirs',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (/^\/framework\/convengine\/?(\?.*)?$/.test(req.url)) {
            req.url = '/framework/convengine/index.html'
          } else if (/^\/framework\/convengine-chat\/?(\?.*)?$/.test(req.url)) {
            req.url = '/framework/convengine-chat/index.html'
          } else if (/^\/framework\/ck8t\/?(\?.*)?$/.test(req.url)) {
            req.url = '/framework/ck8t/index.html'
          } else if (/^\/fullscreen(\?.*)?$/.test(req.url)) {
            req.url = '/fullscreen.html'
          }
          next()
        })
      },
    },
  ],
})
