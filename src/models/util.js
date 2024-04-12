import fs from 'fs'
import sizeOf from 'image-size'
import { promisify } from 'util'
import path from 'path'

const currentFileUrl = new URL(import.meta.url)
const currentDir = path.dirname(currentFileUrl.pathname)
const publicDir = `${currentDir}../../public`



export const toSlug = (title, abbreviation) => {
    let slug = title.toLowerCase().split(' ').join('-')
    slug = slug.replace(/[:.]/g, '')
    slug = abbreviation ? `${abbreviation}--${slug}` : slug
    console.log(slug)
    return slug
}

export const getImageDimensions = async (src, dir = publicDir) => {
    const readFileAsAsync = promisify(fs.readFile);
    const imagePath = path.resolve(dir, src);
    console.log('Reading image from:', imagePath); // Debug: Log the full path

    // DEBUG
    return {
        'width': 1,
        'height': 1,
        'type': 'png'
      }

    const data = await readFileAsAsync(imagePath);
    console.log('Data length:', data.length); // Debug: Check data size

    try {
        const dimensions = sizeOf(data);
        console.log('Dimensions:', dimensions); // Debug: Log dimensions

        if (dimensions.width === undefined || dimensions.height === undefined) {
            throw new Error('Image dimensions are missing');
        }

        return dimensions;
    } catch (error) {
        console.error('Error reading dimensions:', error.message); // Log any parsing errors
        throw new Error('Failed to read image dimensions');
    }
};

export const buildImage = async (img, title) => {
    const { alt, caption = null } = img
    const src = img.src || `${toSlug(title)}.png`
    const webp = src.replace(/\.png$/i, '.webp')
    try {
        const dimensions = await getImageDimensions(src)
        return { src, alt, caption, dimensions, webp }
    }
    catch (err) {
        throw new Error(`Failed to get aspect ratio for img.src: ${err.message}`)
    }
}
export async function buildItem(item) {
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
    }
    catch (e) {
        throw new Error(`Could not build ${item.title.toUpperCase()}: ${e}`)
    }
}
