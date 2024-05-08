export default function Image({ src, alt, dimensions, webp, webpHalf, sizes, ...props }) {
  function getImageUrl(filePath) {
    const basePath = 'assets/'
    const name = filePath.includes(basePath) ? filePath.split(basePath)[1] : ''
    const url = new URL(`${name}`, import.meta.url).href
    return url
  }

  const updatedSrc = getImageUrl(src)
  let updatedWebP = getImageUrl(webp)
  let updatedWebPHalf = null
  let webPSrcSet = updatedWebP
  
  if (webpHalf) {
    updatedWebPHalf = getImageUrl(webpHalf)
    webPSrcSet = `${updatedWebP} ${dimensions.width}w, ${updatedWebPHalf} ${Math.ceil(dimensions.width / 2)}w`
  }
  
  // @todo: replace with worst-case scenario?
  // const sizes = 'sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 547px"'

  return (
    <picture {...props} height={dimensions.height} width={dimensions.width}>
      <source type="image/webp" srcSet={webPSrcSet} sizes={sizes} />
      <source type="image/png" srcSet={updatedSrc} sizes={sizes} />
      <img src={updatedSrc} alt={alt} height={dimensions.height} width={dimensions.width} />
    </picture>
  )
}