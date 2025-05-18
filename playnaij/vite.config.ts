import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 5173,
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 5173,
    },
    proxy: {
      '/auth': {
        target: 'https://casual-web-game-platform.onrender.com',
        changeOrigin: true,
        secure: false,
      }
    }
  },
});
