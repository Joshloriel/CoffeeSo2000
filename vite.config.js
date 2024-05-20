import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path"


export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['bootstrap/dist/js/bootstrap.bundle.min.js', 'bootstrap/dist/css/bootstrap.min.css'],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
