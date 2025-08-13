import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/Hana-Portofolio/', // Replace with your repository name
  build: {
    outDir: 'dist'
  }
})
