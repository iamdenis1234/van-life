import react from "@vitejs/plugin-react";
import {defineConfig} from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    esbuild: {
      drop: mode === "production" ? ["console", "debugger"] : [],
    },
  };
});
