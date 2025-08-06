import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/web-portfolio/",
  build: {
    assetsInlineLimit: 1024, // Reduce a 1KB (solo para SVG muy pequeños)
    assetsDir: "assets",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Organiza mejor los assets en producción
          if (assetInfo.name?.endsWith(".png")) {
            return "assets/images/[name]-[hash][extname]";
          }
          if (assetInfo.name?.endsWith(".webp")) {
            return "assets/images/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.webp", "**/*.svg"],
});
