import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/learn_vue",
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
});
