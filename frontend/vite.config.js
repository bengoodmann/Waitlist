import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000,
    host: true, 
    proxy: {
      '/api': {
        target: 'https://waitlist-lbuq.onrender.com',
        changeOrigin: true,
      },
    },
  },
});
