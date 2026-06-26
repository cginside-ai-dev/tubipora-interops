import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ command }) => ({
  // GitHub Pages 프로젝트 사이트(https://<org>.github.io/tubipora-interops/) 서브패스용.
  // 빌드에서만 적용 — dev 서버는 루트(/)로 둬 로컬 경로를 깔끔하게 유지.
  base: command === "build" ? "/tubipora-interops/" : "/",
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
}));
