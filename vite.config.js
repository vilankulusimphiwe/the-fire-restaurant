import { copyFileSync } from "node:fs"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

const repositoryName = "the-fire-restaurant"

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // GitHub Pages serves this project site from /the-fire-restaurant/, not the domain root.
  // Local development stays at the normal address.
  base: command === "build" ? `/${repositoryName}/` : "/",
  plugins: [
    react(),
    {
      name: "github-pages-spa-fallback",
      apply: "build",
      closeBundle() {
        // GitHub Pages cannot rewrite unknown addresses to the app.
        // Serving the same app as 404.html lets /gallery still open in the browser.
        copyFileSync("dist/index.html", "dist/404.html")
      },
    },
  ],
}))
