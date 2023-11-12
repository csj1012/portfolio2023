import Image from '@components/atoms/Image'
import UnorderedList from '../atoms/UnorderedList'

export default function ProjectDetail({
  title,
  organization,
  shortDescription,  
  image,
  techs,
  role,
  links,
  credits,
  description
}) {
  const linkList = (links) => {
    const list = []
    for (const link of links) {
      list.push(<a href={link.href}>{link.text}</a>)
    }
    return list
  }

  return (
    <div className='detail'>
      <div className='detail__basics'>
        <h2 className='detail__basics__title'>{title}</h2>
        <p className='detail__basics__involvement'>Involvement: {role}</p>        
        <UnorderedList items={linkList(links)} className='detail__basics__links' />
      </div>      
      <div className='detail__image-wrapper'>
        {image ? <Image {...image} className='detail__masthead' /> : ''}
        <p className="text-xs">{image.caption}</p>
        <UnorderedList items={techs} className='detail__list' />
      </div>
      
      <p className='detail__short-description'>{shortDescription}</p>
      <div className='detail__credits'>
        <p>In partnership with {organization}</p>
        { credits ? (
          <p>Special thanks to: {credits}</p>
        ) : ''}
      </div>
      <div className='detail__description'>{description}</div>      
    </div>
  )
}
