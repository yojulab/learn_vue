import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  if (command === "dev") {
    return defineConfig({
      plugins: [vue()],
      base: "/", // for build
      // base: process.env.VITE_BASE_PATH, // for build
    });
  } else {
    return defineConfig({
      plugins: [vue()],
      base: "/learn_vue/", // for build
      build: {
        outDir: "docs",
        emptyOutDir: true,
      },
    });
  }
});
