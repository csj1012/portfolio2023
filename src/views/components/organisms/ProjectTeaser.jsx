import Image from '@components/atoms/Image'

export default function ProjectTeaser(
  { 
    title,
    organization,
    shortDescription,
    year,
    teaser,
    role
  }) {
  
  return (
    <div>
      <h2>{ title }</h2>
      <h3>{ organization } ({ year })</h3>
      { teaser ? <Image {...teaser} /> : ''}
      <p>{ shortDescription }</p>      
      <p>Project role: { role }</p>   
    </div>
  )
}