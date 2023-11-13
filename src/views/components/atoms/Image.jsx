// export default function Image({ src, alt, dimensions, ...props } ) {
//   return <img { ...props } 
//     src={src} 
//     alt={alt} 
//     // height={dimensions.height}
//     // width={dimensions.width}
//   />
// }

export default function Image({ src, alt, dimensions, webp, ...props } ) {
  console.log(dimensions)
  return <picture {...props}>
    <source type="image/webp" srcSet={webp} />
    <source type="image/png" srcSet={src} />
    <img src={src} alt={alt} />
  </picture>
}
