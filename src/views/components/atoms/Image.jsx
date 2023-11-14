export default function Image({ src, alt, dimensions, webp, ...props } ) {
  function getImageUrl(filePath) {
    const basePath = 'assets/'
    const name = filePath.includes(basePath) ? filePath.split(basePath)[1] : ''
    const url = new URL(`${name}`, import.meta.url).href
    return url
  }

  const updatedSrc = getImageUrl(src)
  const updatedWebP = getImageUrl(webp)

  return (
    <picture {...props} height={dimensions.height} width={dimensions.width}>
      <source type="image/webp" srcSet={updatedWebP} />
      <source type="image/png" srcSet={updatedSrc} />
      <img src={updatedSrc} alt={alt} />
    </picture>
  )
}