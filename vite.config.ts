import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { resolve, dirname } from 'path'

const __dirname = typeof __dirname !== 'undefined'
  ? __dirname
  : dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({  
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@models',
        replacement: resolve(__dirname, 'src/models'),
      },
      {
        find: '@controllers',
        replacement: resolve(__dirname, 'src/controllers'),
      },
      {
        find: '@routes',
        replacement: resolve(__dirname, 'src/controllers/routes'),
      },
      {
        find: '@views',
        replacement: resolve(__dirname, 'src/views'),
      },
      {
        find: '@components',
        replacement: resolve(__dirname, 'src/views/components'),
      }]
  }
})
