import chokidar from 'chokidar'
import { exec } from 'child_process'

export default function watchPostsPlugin({ postsDirectory, transformPostsScript }) {
  return {
    name: 'watch-posts',
    apply: 'serve',
    configureServer(server) {
      const watcher = chokidar.watch([postsDirectory, 'public/files/blog'])
      watcher.on('change', (path) => {
        if (path.includes(postsDirectory)) {
          exec(transformPostsScript, (error, stdout, stderr) => {
            if (error) {
              console.error(`Error executing transformPosts script: ${error.message}`)
              return
            }
            if (stderr) {
              console.error(`transformPosts script stderr: ${stderr}`)
              return
            }
            console.log(`Posts transformed successfully:\n${stdout}`)
            server.ws.send({ type: 'full-reload' })
          })
        } else {
          server.ws.send({ type: 'full-reload' })
        }
      })
    },
  }
}
