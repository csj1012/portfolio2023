import { buildItem } from './util.js'
import src from './src.js'
import fs from 'fs'

// Transform the projects to add slugs, build image objects, etc.
const errors = []
const processed = src
  .map((project, index) => {
    try {
      return buildItem(project)
    } catch (e) {
      const str = project.title ? project.title.toUpperCase() : `PROJECT ${index}`
      errors.push(`TRANSFORM ERROR: Could not process ${str}: ${e}`)
      return null
    }
  })
  .filter(Boolean)

errors.forEach((error) => console.error(error))

// Write the processed projects to projects.json (to be consumed by the app)
fs.writeFileSync('projects.json', JSON.stringify(processed))
