import { buildItem } from '../util.js'
import fs from 'fs'
import { IProjectsSrcList } from './ProjectTypes'

// Transform the projects to add slugs, build image objects, etc.
// outputPath is flexbile for testing purposes.
export const transformProjects = async (data: IProjectsSrcList, outputPath: string = null): Promise<void> => {
  const errors: string[] = []
  const proms: Promise<any>[] = data.map((project, index) => {
    return buildItem(project).catch(e => {
      const str = project.title ? project.title.toUpperCase() : `PROJECT ${index}`
      errors.push(`TRANSFORM ERROR: Could not process ${str}: ${e}`)
      return null
    })
  })

  const processed = (await Promise.all(proms)).filter(Boolean)
  errors.forEach((error) => console.error(error))

  if (outputPath) {
    try {
      fs.writeFileSync(outputPath, JSON.stringify(processed))
      console.log('--- File write success at ' + outputPath)
    } catch (error) {
      console.error(error)
    }
  } else {
    console.log('--- outputPath not specified.')
  }
}