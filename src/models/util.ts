import fs from 'fs'
import sizeOf from 'image-size'
import { promisify } from 'util'
import path from 'path'
import { IItem, IBuildItemReturn, IBuildImageReturn } from './UtilTypes'
import { IProject } from './projects/ProjectTypes'
import { ISizeCalculationResult } from 'image-size/dist/types/interface'
import sharp, { FormatEnum } from 'sharp'

const currentFileUrl = new URL(import.meta.url)
const currentDir = path.dirname(currentFileUrl.pathname)

const toSlug = (title: string, abbreviation?: string) => {
  let slug = title.toLowerCase().split(' ').join('-')
  slug = slug.replace(/[:.]/g, '')
  slug = abbreviation ? `${abbreviation}--${slug}` : slug
  return slug
}

const getImageDimensions = async (src: string) => {
  const readFileAsAsync = promisify(fs.readFile)
  // try {

  // // DEBUG
  // return {
  //   'width': 1,
  //   'height': 1,
  //   'type': 'png'
  // }

  const imagePath = path.resolve(currentDir, `../../public${src}`)
  const data = await readFileAsAsync(imagePath)
  const dimensions: ISizeCalculationResult = sizeOf(data)
  if (dimensions.width === undefined || dimensions.height === undefined) {
    throw new Error('Image dimensions are missing')
  }
  return dimensions
}

const buildImage = async (
  img: {
    src: string
    alt: string
    caption?: string | null
    teaser?: boolean
  },
  title: string,
): Promise<IBuildImageReturn> => {
  try {
    const { alt, caption = null } = img

    isValidImageSrc(img.src, '.png')

    const src: string = img.src || `${toSlug(title)}.png`

    let webp: string | undefined
    await convertToWebP(src).then(() => {
      webp = src.replace(/\.png$/i, '.webp')
    })

    const dimensions = await getImageDimensions(src)
    return { src, alt, caption, dimensions, webp }
  } catch (err) {
    throw new Error(`in buildImage: ${err as Error}`)
  }
}

function isValidImageSrc(src: string, extension: string): void {
  const validUrl = /^http(s)?:\/\/|^\/\w+/.test(src)
  const validExtension = src.endsWith(extension)

  if (!validUrl) {
    throw new Error(`Invalid image source format, expected a URL or relative path: ${src}`)
  }
  if (!validExtension) {
    throw new Error(`Invalid image source format, expected ${extension} file extension: ${src}`)
  }
}

async function buildItem(item: IItem): Promise<IProject> {
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
  } catch (error) {
    throw new Error(`in buildItem: ${error as Error}`)
  }
}

const convertToWebP = async (inputFile: string) => {
  const imagePath = path.resolve(currentDir, `../../public${inputFile}`)
  const outputFilePath = imagePath.replace(/\.[^/.]+$/, '') + '.webp'

  const conversionResult: Result<void> = await sharp(imagePath)
    .toFormat('webp')
    .toFile(outputFilePath)
    .then(() => {
      console.log(Result.ok)
      return Result.ok<void>(undefined)
    })
    .catch((error) => Result.fail<void>(error, 'Could not convert image'))

  if (!conversionResult.success) {
    console.error('Could not convert image', conversionResult.error)
    return
  }
}

class Result<T> {
  constructor(
    public success: boolean,
    public value: T,
    public error: any,
    public errorMessage: string = '',
  ) {}

  static ok<T>(value: T): Result<T> {
    return new Result<T>(true, value, null)
  }

  static fail<T>(error: any, errorMessage: string): Result<T> {
    return new Result<T>(false, [] as T, error, errorMessage)
  }
}

export { buildImage, isValidImageSrc, buildItem, getImageDimensions, toSlug, Result, convertToWebP }
