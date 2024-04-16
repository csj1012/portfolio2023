import fs from 'fs';
import sizeOf from 'image-size';
import { promisify } from 'util';
import path from 'path';
const currentFileUrl = new URL(import.meta.url);
const currentDir = path.dirname(currentFileUrl.pathname);
const toSlug = (title, abbreviation) => {
    let slug = title.toLowerCase().split(' ').join('-');
    slug = slug.replace(/[:.]/g, '');
    slug = abbreviation ? `${abbreviation}--${slug}` : slug;
    console.log(slug);
    return slug;
};
const getImageDimensions = async (src) => {
    const readFileAsAsync = promisify(fs.readFile);
    try {
        // DEBUG
        return {
            'width': 1,
            'height': 1,
            'type': 'png'
        };
        const imagePath = path.resolve(currentDir, `../../public${src}`);
        const data = await readFileAsAsync(imagePath);
        const dimensions = sizeOf(data);
        if (dimensions.width === undefined || dimensions.height === undefined) {
            throw new Error('Image dimensions are missing');
        }
        // if (dimensions.type !== 'string') {
        //   dimensions.type = 'string'
        // }
        return dimensions;
    }
    catch (err) {
        throw err;
    }
};
const buildImage = async (img, title) => {
    try {
        const { alt, caption = null } = img;
        isValidImageSrc(img.src, '.png');
        console.log(isValidImageSrc);
        const src = img.src || `${toSlug(title)}.png`;
        const webp = src.replace(/\.png$/i, '.webp');
        const dimensions = await getImageDimensions(src);
        return { src, alt, caption, dimensions, webp };
    }
    catch (err) {
        throw new Error(`${err}`);
    }
};
function isValidImageSrc(src, extension) {
    console.log(src, extension);
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
        throw new Error(`${error}`);
    }
}
export { buildImage, isValidImageSrc, buildItem, getImageDimensions, toSlug };
