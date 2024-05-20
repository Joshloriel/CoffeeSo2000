import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['react', 'react-dom', 'bootstrap/dist/js/bootstrap.bundle.min.js'],
    },
  },
});
