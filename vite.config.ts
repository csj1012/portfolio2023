import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { resolve, dirname } from 'path'
import watchPostsPlugin from './tools/plugins/watchPostsPlugin'
import watchProjectsPlugin from './tools/plugins/watchProjectsPlugin'

const __dirname = typeof __dirname !== 'undefined'
  ? __dirname
  : dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({  
  plugins: [
    react(),
    watchPostsPlugin({
      postsDirectory: resolve(__dirname, 'src/models/blog/posts/md'),
      transformPostsScript: 'npm run transformPosts'
    }),
    watchProjectsPlugin({
      projectsSrcPath: resolve(__dirname, 'src/models/projects/src.js'),
      transformScript: 'npm run transform'
    })
  ],
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
