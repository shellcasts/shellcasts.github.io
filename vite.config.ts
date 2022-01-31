import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import mdPlugin, { Mode } from "vite-plugin-markdown"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [vue(), mdPlugin({ mode: [Mode.HTML, Mode.TOC, Mode.VUE] })],
})
