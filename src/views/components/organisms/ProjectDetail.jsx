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
    <article className='detail'>
      <section className='detail__basics'>
        <h2 className='detail__basics__title'>{title}</h2>
        <p className='detail__basics__involvement'><strong>Involvement &middot;</strong> {role}</p>        
        <UnorderedList items={linkList(links)} className='detail__basics__links' />
      </section>      
      <aside className='detail__image-wrapper'>
        { video ? <Video src={video.src} className='detail__masthead' /> : '' }
        <p className="detail__masthead-caption">{image.caption}</p>
        <UnorderedList items={techs} className='detail__list' />
      </aside>
      <aside className='detail__short-description'>{shortDescription}</aside>
      <aside className='detail__aside'>
      {aside ? 
          <>
            <Image {...aside} /> 
            <p className='detail__aside__caption'>{aside.caption}</p>
          </>
        : ''}       
      </aside>
      <section className='detail__description'>
        { description ? Description() : '' }   
        <p className='detail__aside__partnership'>In partnership with <Link to={orgUrl}>{orgName}</Link></p>
        { credits ? (
          <p>Special thanks to: {credits}</p>
        ) : ''} 
      </section>      
    </article>
  )
}
