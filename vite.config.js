import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/web-portfolio/",
  build: {
    assetsInlineLimit: 0, // Desactiva el inlining de assets
    assetsDir: "assets",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name.split(".").pop();
          if (["png", "jpg", "jpeg", "webp", "svg"].includes(ext)) {
            return `assets/icons/[name][extname]`; // Mantiene los nombres originales
          }
          return `assets/[name][extname]`;
        },
      },
    },
  },
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.webp", "**/*.svg"],
});
