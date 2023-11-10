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
    <div className='detail grid md:grid-cols-3 md:gap-x-12 bg-hazelight m-1'>
      <div className='detail__basics mt-12 ml-6 order-2 md:order-1 md:col-span-1 space-y-3'>
        <h2 className='text-3xl lg:text-4xl font-serif'>{title}</h2>
        <p className='detail__involvement lg:text-xl'>Involvement: {role}</p>        
        <UnorderedList items={linkList(links)} className='detail__basics__links' />
      </div>      
      <div className='detail__image-wrapper order-1 md:order-2 md:col-span-2'>
        {image ? <Image {...image} className='detail__masthead delay-700' /> : ''}
        <p className="text-xs">{image.caption}</p>
        <UnorderedList items={techs} className='detail__basics__list mt-2' />
      </div>
      
      <p className='special order-3 my-12 mx-6 text-2xl 2xl:text-3xl md:col-span-3 italic text-root border-y-2 border-haze py-8'>{shortDescription}</p>
      <div className='order-4 mx-6 space-y-3'>
        <p>In partnership with {organization}</p>
        { credits ? (
          <p>Special thanks to: {credits}</p>
        ) : ''}
      </div>
      <div className='order-5 mx-6 mt-6 md:mt-0 mb-12 font-serif text-lg md:col-span-2 md:pl-6 md:border-l-2 border-haze'>{description}</div>      
    </div>
  )
}
