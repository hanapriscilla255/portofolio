import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/portofolio/', // Match with your repository name exactly
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
