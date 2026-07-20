import fs from 'fs';
import sizeOf from 'image-size';
import { promisify } from 'util';
import path from 'path';
import sharp from 'sharp';
const currentFileUrl = new URL(import.meta.url);
const currentDir = path.dirname(currentFileUrl.pathname);
const toSlug = (title, abbreviation) => {
    let slug = title.toLowerCase().split(' ').join('-');
    slug = slug.replace(/[:.]/g, '');
    slug = abbreviation ? `${abbreviation}--${slug}` : slug;
    return slug;
};
const getImageDimensions = async (src) => {
    const readFileAsAsync = promisify(fs.readFile);
    // try {
    // // DEBUG
    // return {
    //   'width': 1,
    //   'height': 1,
    //   'type': 'png'
    // }
    const imagePath = path.resolve(currentDir, `../../public${src}`);
    const data = await readFileAsAsync(imagePath);
    const dimensions = sizeOf(data);
    if (dimensions.width === undefined || dimensions.height === undefined) {
        throw new Error('Image dimensions are missing');
    }
    return dimensions;
};
const buildImage = async (img, title) => {
    try {
        const { alt, caption = null } = img;
        isValidImageSrc(img.src, '.png');
        const src = img.src || `${toSlug(title)}.png`;
        let webp;
        await convertToWebP(src).then(() => {
            webp = src.replace(/\.png$/i, '.webp');
        });
        let webpHalf;
        webpHalf = await generateHalfSizeImage(src);
        webpHalf = webpHalf?.success ? webpHalf.value : null;
        const dimensions = await getImageDimensions(src);
        return { src, alt, caption, dimensions, webp, webpHalf };
    }
    catch (err) {
        throw new Error(`in buildImage: ${err}`);
    }
};
function isValidImageSrc(src, extension) {
    const validUrl = /^http(s)?:\/\/|^\/\w+/.test(src);
    const validExtension = src.endsWith(extension);
    if (!validUrl) {
        throw new Error(`Invalid image source format, expected a URL or relative path: ${src}`);
    }
    if (!validExtension) {
        throw new Error(`Invalid image source format, expected ${extension} file extension: ${src}`);
    }
}
async function buildItem(item) {
    try {
        const { image, teaser, title, abbreviation, aside } = item;
        if (image) {
            item.image = await buildImage(image, title);
        }
        if (teaser) {
            item.teaser = await buildImage(teaser, title);
        }
        if (aside) {
            item.aside = await buildImage(aside, title);
        }
        const project = {
            slug: toSlug(title, abbreviation),
            ...item,
        };
        return Promise.resolve(project);
    }
    catch (error) {
        throw new Error(`in buildItem: ${error}`);
    }
}
const convertToWebP = async (inputFile) => {
    const imagePath = path.resolve(currentDir, `../../public${inputFile}`);
    const outputFilePath = imagePath.replace(/\.[^/.]+$/, '') + '.webp';
    const conversionResult = await sharp(imagePath)
        .toFormat('webp')
        .toFile(outputFilePath)
        .then(() => {
        return Result.ok(undefined);
    })
        .catch((error) => Result.fail(error, 'Could not convert image'));
    if (!conversionResult.success) {
        console.error('Could not convert image', conversionResult.error);
        return;
    }
};
const generateHalfSizeImage = async (src) => {
    try {
        const dimensions = await getImageDimensions(src);
        const { width, height } = dimensions;
        const halfWidth = Math.floor(width / 2);
        const halfHeight = Math.floor(height / 2);
        const inputFile = path.resolve(currentDir, `../../public${src}`);
        const publicPath = src.replace(/\.[^/.]+$/, '') + '-half.webp';
        const outputFilePath = path.resolve(currentDir, `../../public${publicPath}`);
        await sharp(inputFile)
            .resize(halfWidth, halfHeight)
            .toFormat('webp')
            .toFile(outputFilePath);
        return Result.ok(publicPath);
    }
    catch (error) {
        return Result.fail(error, `Error generating 1x image: ${error}`);
    }
};
class Result {
    success;
    value;
    error;
    errorMessage;
    constructor(success, value, error, errorMessage = '') {
        this.success = success;
        this.value = value;
        this.error = error;
        this.errorMessage = errorMessage;
    }
    static ok(value) {
        return new Result(true, value, null);
    }
    static fail(error, errorMessage) {
        return new Result(false, [], error, errorMessage);
    }
}
export { buildImage, isValidImageSrc, buildItem, getImageDimensions, toSlug, Result, convertToWebP };
