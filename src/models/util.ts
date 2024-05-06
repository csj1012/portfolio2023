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
  console.log(slug)
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
    console.log(isValidImageSrc)

    const src = img.src || `${toSlug(title)}.png`
    const webp = src.replace(/\.png$/i, '.webp')
    const dimensions = await getImageDimensions(src)
    return { src, alt, caption, dimensions, webp }
  } catch (err) {
    throw new Error(`${err as Error}`)
  }
}

function isValidImageSrc(src: string, extension: string): void {
  console.log(src, extension)
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
    throw new Error(`${error as Error}`)
  }
}

const convertToWebP = async (inputDir: string, outputDir: string, fileExtension: string) => {
  const readdir: (path: string) => Promise<string[]> = promisify(fs.readdir)
  // const inputDir = path.resolve('.')
  // const outputDir = path.resolve('.')
  // const fileExtension = '.png'
  const format: string = 'webp'

  const filesResult: Result<string[]> = await readdir(inputDir)
    .then(Result.ok)
    .catch((error) => Result.fail(error, 'Could not read input directory'))

  if (!filesResult.success) {
    console.error('Could not read input directory', filesResult.error)
    return
  }

  for (const file of filesResult.value) {
    if (path.extname(file).toLowerCase() === fileExtension) {
      const inputFilePath = path.resolve(inputDir, file)
      const outputFilePath = path.resolve(outputDir, path.basename(file, fileExtension) + `.${format}`)

      const conversionResult = await sharp(inputFilePath)
        .toFormat(format as keyof FormatEnum)
        .toFile(outputFilePath)
        .then(Result.ok)
        .catch((error) => Result.fail(error, 'Could not convert image'))

      if (!conversionResult.success) {
        console.error('Could not convert image', file, conversionResult.error)
        continue
      }

      console.log('Converted file ', file, 'to WebP')
    }
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

export { buildImage, isValidImageSrc, buildItem, getImageDimensions, toSlug, Result }
