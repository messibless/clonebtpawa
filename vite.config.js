import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }, // Funga resolve hapa
  server: { // Server iwe hapa nje
    allowedHosts: ['.ngrok-free.app'],
    host: '0.0.0.0',   // muhimu sana
    port: 5174,
    strictPort: true,
  }
})






