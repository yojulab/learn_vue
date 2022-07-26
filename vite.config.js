import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [vue()],
    base: process.env.VITE_BASE_PATH, // for build
    build: {
      outDir: "docs",
      emptyOutDir: true,
    },
  });
};
