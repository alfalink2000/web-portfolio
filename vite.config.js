import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/web-portfolio/",
  build: {
    assetsInlineLimit: 4096, // Límite en bytes para inline assets (imágenes pequeñas se convierten en base64)
  },
});
