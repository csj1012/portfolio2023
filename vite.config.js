import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@models': path.resolve(__dirname, '/src/models'),
      '@controllers': path.resolve(__dirname, '/src/controllers'),
      '@routes': path.resolve(__dirname, '/src/controllers/routes'),
      '@components': path.resolve(__dirname, '/src/views/components')
    }
  }
})
