export default function Image({ src, alt, dimensions = {}, ...props } ) {
  return <img { ...props } 
    src={src} 
    alt={alt} 
    height={dimensions.height}
    width={dimensions.width}
  />
  // <picture { ...props }>
  //   <source srcSet="image-desktop.jpg" media="(min-width: 1025px)" />
  //   <source srcSet="image-tablet.jpg" media="(min-width: 768px) and (max-width: 1024px)" />
  //   <source srcSet="image-mobile.jpg" media="(max-width: 767px)" />
  //   <img src="image-desktop.jpg" alt="Descriptive text" />
  // </picture>
}

/* <img { ...props } 
    src={src} 
    alt={alt} 
    height={dimensions.height}
    width={dimensions.width}
  />*/