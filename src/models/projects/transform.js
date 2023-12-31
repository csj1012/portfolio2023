import { buildItem } from './util.js'
import src from './src.js'
import fs from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

// Transform the projects to add slugs, build image objects, etc.
const transformProjects = async () => {
  const errors = []
  const proms = src.map((project, index) => {
    return buildItem(project).catch(e => {
      const str = project.title ? project.title.toUpperCase() : `PROJECT ${index}`
      errors.push(`TRANSFORM ERROR: Could not process ${str}: ${e}`)
      return null
    })
  })

  const processed = (await Promise.all(proms)).filter(Boolean)
  errors.forEach((error) => console.error(error))

  // Write the processed projects to projects.json (to be consumed by the app)
  const directory = dirname(fileURLToPath(import.meta.url))
  const localPath = path.join(directory, 'projects.json')
  fs.writeFileSync(localPath, JSON.stringify(processed))
}

transformProjects()