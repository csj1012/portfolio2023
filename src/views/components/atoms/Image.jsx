export default function Image({ src, alt, ...props } ) {
  return <img { ...props } src={src} alt={alt} style={{ maxWidth: '100%' }} />
}