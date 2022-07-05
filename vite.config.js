import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
});

// legacy build command
// module.exports = {
//   publicPath: process.env.NODE_ENV === "production" ? "/learn_vue" : "/",
//   outputDir: "docs",
// };
