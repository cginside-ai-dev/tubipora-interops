import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  define: { __STANDALONE__: "false" },
  // strictPort: 다른 포트로 조용히 넘어가지 않고 5175가 점유돼 있으면 실패하게 —
  // dev URL을 예측 가능하게 고정.
  server: { port: 5175, strictPort: true },
});
