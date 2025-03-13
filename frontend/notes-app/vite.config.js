import { defineConfig } from "vite";

export default defineConfig({
  base: "./",  // Ensure correct relative paths
  build: {
    outDir: "dist",
  },
  server: {
    strictPort: true,
  }
});
