export default function Image({ src, alt, dimensions, ...props } ) {
  console.log(dimensions)
  return <img { ...props } 
    src={src} 
    alt={alt} 
    // height={dimensions.height}
    // width={dimensions.width}
  />
}