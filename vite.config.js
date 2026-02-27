import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio-react/", // Add base URL for GitHub Pages
  build: {
    assetsInclude: ['**/*.pdf', '**/*.png', '**/*.svg'], // Include all static assets
  },
});
