import tailwindcss from "@tailwindcss/vite"
import vue from "@vitejs/plugin-vue"
import path from "path"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      "@00_app": path.resolve(__dirname, "src/00_app"),
      "@01_pages": path.resolve(__dirname, "src/01_pages"),
      "@02_widgets": path.resolve(__dirname, "src/02_widgets"),
      "@03_features": path.resolve(__dirname, "src/03_features"),
      "@04_entities": path.resolve(__dirname, "src/04_entities"),
      "@05_shared": path.resolve(__dirname, "src/05_shared"),
    },
  },
})
