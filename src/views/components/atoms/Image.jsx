export default function Image({ src, alt, dimensions, webp, ...props } ) {
  return <picture {...props} height={dimensions.height} width={dimensions.width}>
    <source type="image/webp" srcSet={webp} />
    <source type="image/png" srcSet={src} />
    <img src={src} alt={alt} />
  </picture>
}
