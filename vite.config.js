import react from "@vitejs/plugin-react";
import { defineConfig } from "vite"; // https://vitejs.dev/config/
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "localhost",
  },
  plugins: [
    svgr(),
    react({
      babel: {
        plugins: [
          //   https://mui.com/system/styled/#how-to-use-components-selector-api
          [
            "@emotion",
            {
              importMap: {
                // I use @mui/material instead of @mui/system to make it work
                "@mui/material": {
                  styled: {
                    canonicalImport: ["@emotion/styled", "default"],
                    styledBaseImport: ["@mui/material", "styled"],
                  },
                },
                "@mui/material/styles": {
                  styled: {
                    canonicalImport: ["@emotion/styled", "default"],
                    styledBaseImport: ["@mui/material/styles", "styled"],
                  },
                },
              },
            },
          ],
        ],
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: function (id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
});
