import fs from 'fs'
import sizeOf from 'image-size'
import { promisify } from 'util'
import path from 'path'
import { IItem, IBuildItemReturn, IBuildImageReturn } from './UtilTypes'
import { IProject } from './projects/ProjectTypes'
import { ISizeCalculationResult } from 'image-size/dist/types/interface'

const currentFileUrl = new URL(import.meta.url);
const currentDir = path.dirname(currentFileUrl.pathname);

const toSlug = (title: string, abbreviation?: string) => {
  let slug = title.toLowerCase().split(' ').join('-')
  slug = slug.replace(/[:.]/g, '')
  slug = abbreviation ? `${abbreviation}--${slug}` : slug  
  console.log(slug)
  return slug
}

const getImageDimensions = async (src: string) => {
  const readFileAsAsync = promisify(fs.readFile)
  try {
    const imagePath = path.resolve(currentDir, `../../public${src}`);
    const data = await readFileAsAsync(imagePath)
    const dimensions: ISizeCalculationResult = sizeOf(data)
    if (dimensions.width === undefined || dimensions.height === undefined) {
      throw new Error('Image dimensions are missing');
    }
    // if (dimensions.type !== 'string') {
    //   dimensions.type = 'string'
    // }
    return dimensions
  } catch (err) {
    throw err
  }
}

const buildImage = async (img: {
  src: string
  alt: string
  caption?: string | null
  teaser?: boolean
}, title: string): Promise<IBuildImageReturn> => {
  const { alt, caption = null } = img
  const src = img.src || `${toSlug(title)}.png`
  const webp = src.replace(/\.png$/i, '.webp')
  try {
    const dimensions = await getImageDimensions(src)
    return { src, alt, caption, dimensions, webp }
  } catch (err) {
      throw new Error(`Failed to get aspect ratio for img.src: ${(err as Error).message}`)
  }
}

export async function buildItem(item: IItem): Promise<IProject> {
  try {
    const { image, teaser, title, abbreviation, aside } = item
    if (image) {
      item.image = await buildImage(image, title)
    }

    if (teaser) {
      item.teaser = await buildImage(teaser, title)
    }

    if (aside) {
      item.aside = await buildImage(aside, title)
    }

    const project = {
      slug: toSlug(title, abbreviation),       
      ...item,
    }
    
    return Promise.resolve(project)
  } catch (e) {
    throw new Error(`Could not build ${item.title.toUpperCase()}: ${e}`)
  }
}
