import { defineConfig } from "vite";
import path from "node:path";
import react from "@vitejs/plugin-react";
import babel from "vite-plugin-babel";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    babel({
      babelConfig: {
        plugin: ["styled-jsx/babel"],
      },
    }),
    react(),
    dts({ insertTypesEntry: true }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "@yarn-workspaces/styled-components",
      formats: ["es", "umd", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "styled-components"],
      output: {
        globals: {
          react: "react",
          "react-dom": "react-dom",
          "styled-components": "styled",
        },
      },
    },
  },
});
