import { defineConfig } from "vite";
import tailwindcss from '@tailwindcss/vite'
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(),tailwindcss(),],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"], // Automatically resolve these extensions
  },
});
