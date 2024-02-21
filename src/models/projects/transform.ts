import { buildItem } from '../util.js'
import projectsSrc from './src.js'
import fs from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import { IProjectsSrcList } from './ProjectTypes'

// Transform the projects to add slugs, build image objects, etc.
export const transformProjects = async (data: IProjectsSrcList = projectsSrc): Promise<void> => {
  const errors: string[] = []
  const proms: Promise<any>[] = projectsSrc.map((project, index) => {
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