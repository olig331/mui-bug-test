import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  base: "/mui/",
  server: {
    port: 5173,
    open: false,
    hmr: {
      host: "local.vq.lab",
      port: 5174,
      clientPort: 4443,
      protocol: "wss",
      path: "/ws",
    },
    watch: {
      ignored: ["**/node_modules/**", "**/build/**", "**/dist/**"],
    },
  },
});
