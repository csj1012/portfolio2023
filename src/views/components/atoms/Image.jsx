export default function Image({ src, alt, dimensions, ...props } ) {
  return <img { ...props } 
    src={src} 
    alt={alt} 
    height={dimensions.height}
    width={dimensions.width}
  />
}