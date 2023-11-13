import fs from 'fs'
import sizeOf from 'image-size'
import { promisify } from 'util'

const toSlug = (title, abbreviation) => {
  let slug = title.toLowerCase().split(' ').join('-')
  slug = slug.replace(/[:\.]/g, '')
  slug = abbreviation ? `${abbreviation}--${slug}` : slug  
  console.log(slug)
  return slug
}

const getImageDimensions = async (src) => {
  const readFileAsAsync = promisify(fs.readFile)
  try {
    const data = await readFileAsAsync(`../../../public${src}`)
    const dimensions = sizeOf(data)
    return dimensions
  } catch (err) {
    throw new Error(`Failed to get aspect ratio for img.src: ${err}`)
  }
}

const buildImage = async (img, title) => {
  const { alt, caption } = img
  const src = img.src || `${toSlug(title)}.png`
  try {
    const dimensions = await getImageDimensions(src)
    return { src, alt, caption, dimensions }
  } catch (error) {
    console.error(error);
  }  
}

export async function buildItem(item) {
  try {
    const { image, teaser, title, abbreviation, aside } = item
    if (item.image) {
      item.image = await buildImage(image, title)
    }

    if (item.teaser) {
      item.teaser = await buildImage(teaser, title)
    }

    const project = {
      slug: toSlug(title, abbreviation),       
      ...item,
    }
    
    return project
  } catch (e) {
    console.error(`ITEM BUILD ERROR: Could not build ${item.title.toUpperCase()}: ${e}`)
  }
}
