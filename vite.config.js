import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio2023/',
  plugins: [react()],
  resolve: {
    alias: {
      '@models': path.resolve('/src/models'),
      '@controllers': path.resolve('/src/controllers'),
      '@routes': path.resolve('/src/controllers/routes'),
      '@views': path.resolve('/src/views'),
      '@components': path.resolve('/src/views/components'),
      '@assets': path.resolve('/src/assets')
    }
  }
})
