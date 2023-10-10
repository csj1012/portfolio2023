const toSlug = (title) => {
  return title.toLowerCase().split(' ').join('-')
}

const buildImage = (img, title) => {  
  const { alt, caption } = img
  const src = img.src || `${toSlug(title)}.png`
  return { src, alt, caption }
}

export function buildItem(item) {
  try {
    const { image, teaser, title } = item
    if (item.image) {
      item.image = buildImage(image, title)
    }

    if (item.teaser) {
      item.teaser = buildImage(teaser, title)
    }

    const project = {
      slug: toSlug(title),
      ...item
    }

    return project
  } catch (e) {
    console.error(`ITEM BUILD ERROR: Could not build ${item.title.toUpperCase()}: ${e}`)
  }
}