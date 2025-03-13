import { defineConfig } from "vite";

export default defineConfig({
  base: "/",  // Ensure Vercel correctly serves files
  build: {
    outDir: "dist",
  }
});
