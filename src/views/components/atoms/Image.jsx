export default function Image({ src, alt, dimensions, webp, webpHalf, sizes, ...props }) {
  let webPSrcSet = webp

  if (webpHalf) {
    webPSrcSet = `${webp} ${dimensions.width}w, ${webpHalf} ${Math.ceil(dimensions.width / 2)}w`
  }

  // @todo: replace with worst-case scenario?
  // const sizes = 'sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 547px"'

  return (
    <picture {...props} height={dimensions.height} width={dimensions.width}>
      <source type="image/webp" srcSet={webPSrcSet} sizes={sizes} />
      <source type="image/png" srcSet={src} sizes={sizes} />
      <img src={src} alt={alt} height={dimensions.height} width={dimensions.width} />
    </picture>
  )
}
