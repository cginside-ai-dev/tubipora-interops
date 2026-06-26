import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // The diagram-viewer package gates its standalone single-file behaviour on
  // this build-time constant; in the web app it's always the embedded path.
  define: { __STANDALONE__: "false" },
  resolve: {
    alias: {
      "@interops/diagram-viewer": fileURLToPath(
        new URL("./packages/diagram-viewer/src/index.ts", import.meta.url),
      ),
    },
  },
  server: {
    port: 5176,
    strictPort: true,
  },
  preview: {
    port: 5176,
    strictPort: true,
  },
});
