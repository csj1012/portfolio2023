import { transformProjects } from '../src/models/projects/transform.js'
import projectsSrc from '../src/models/projects/src.js'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const directory = dirname(fileURLToPath(import.meta.url))
const outputPath = path.join(directory, '..', 'src', 'models', 'projects', 'projects.json')

transformProjects(projectsSrc, outputPath).then(() => {
  console.log('Transformation completed successfully.')
}).catch(err => {
  console.error('Error during transformation:', err)
})
