import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/project2/',  // 👈 Weka moja kwa moja! Hii ndiyo unayoitaka
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }
})