import Image from '@components/atoms/Image'
import Video from '@components/atoms/Video'
import UnorderedList from '@components/atoms/UnorderedList'
import { Link } from 'react-router-dom'

export default function ProjectDetail({
  title,
  organization,
  shortDescription,  
  image,
  video,
  techs,
  role,
  links,
  credits,
  description,
  aside
}) {
  const linkList = (links) => {
    const list = []
    for (const link of links) {
      list.push(<a href={link.href}>{link.text}</a>)
    }
    return list
  }

  console.log(description)

  function Description() {
    return (
      description.map((item, index) => (
        <p key={index}>{item}</p>
      ))
    )
  }
  
  const orgName = organization.name
  const orgUrl = organization.url


  return (
    <div className='detail'>
      <div className='detail__basics'>
        <h2 className='detail__basics__title'>{title}</h2>
        <p className='detail__basics__involvement'>Involvement: {role}</p>        
        <UnorderedList items={linkList(links)} className='detail__basics__links' />
      </div>      
      <div className='detail__image-wrapper'>
        { video ? <Video src={video.src} className='detail__masthead' /> : '' }
        <p className="text-xs">{image.caption}</p>
        <UnorderedList items={techs} className='detail__list' />
      </div>
      <p className='detail__short-description'>{shortDescription}</p>
      <aside className='detail__aside'>
      {aside ? 
          <div className='border-haze p-3'>
            <Image {...aside} className='border-2 border-haze ' /> 
            <p className='detail__aside__caption'>{aside.caption}</p>
          </div>
        : ''}       
      </aside>
      <div className='detail__description'>
        { description ? Description() : '' }   
        <p className='detail__aside__partnership'>In partnership with <Link to={orgUrl}>{orgName}</Link></p>
        { credits ? (
          <p>Special thanks to: {credits}</p>
        ) : ''} 
      </div>      
    </div>
  )
}
