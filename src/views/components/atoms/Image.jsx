export default function Image({ src, alt }) {
  src = '/src/images/' + src
  return <img src={src} alt={alt} style={{ maxWidth: '100%' }} />
}
