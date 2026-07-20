import chokidar from 'chokidar'
import { exec } from 'child_process'

export default function watchProjectsPlugin({ projectsSrcPath, transformScript }) {
  return {
    name: 'watch-projects',
    apply: 'serve',
    configureServer(server) {
      const watcher = chokidar.watch(projectsSrcPath)
      watcher.on('change', () => {
        exec(transformScript, (error, stdout, stderr) => {
          if (error) {
            console.error(`Error executing transform script: ${error.message}`)
            return
          }
          if (stderr) {
            console.error(`transform script stderr: ${stderr}`)
            return
          }
          console.log(`Projects transformed successfully:\n${stdout}`)
          server.ws.send({ type: 'full-reload' })
        })
      })
    },
  }
}
