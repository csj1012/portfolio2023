const toSlug = (title, abbreviation) => {
  let slug = title.toLowerCase().split(' ').join('-')
  slug = abbreviation ? `${abbreviation}--${slug}` : slug
  console.log(slug)
  return slug
}

const buildImage = (img, title) => {
  const { alt, caption } = img
  const src = img.src || `${toSlug(title)}.png`  
  return { src, alt, caption }
}

export function buildItem(item) {
  try {
    const { image, teaser, title, abbreviation } = item
    if (item.image) {
      item.image = buildImage(image, title)
    }

    if (item.teaser) {
      item.teaser = buildImage(teaser, title)
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
