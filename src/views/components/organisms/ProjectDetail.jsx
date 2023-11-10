import Image from '@components/atoms/Image'
import UnorderedList from '../atoms/UnorderedList'

export default function ProjectDetail({
  title,
  organization,
  shortDescription,
  year,
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
      {/* <div ></div> */}
      <div className='detail__image-wrapper order-1 md:order-2 md:col-span-2'>
        {image ? <Image {...image} className='detail__masthead' /> : ''}
        <UnorderedList items={techs} className='detail__basics__list mt-2' />
      </div>
      
      <p className='special order-3 my-12 mx-6 text-2xl 2xl:text-3xl md:col-span-3 italic text-root border-y-2 border-haze py-8'>{shortDescription}</p>
      <p className='order-4 mx-6'>In partnership with {organization}</p>
      <p className='order-5 mx-6 mt-6 md:mt-0 mb-12 font-serif text-lg md:col-span-2 md:pl-6 md:border-l-2 border-haze'>{description}</p>
    </div>
    // <div className='detail grid grid-col-1 md:grid-col-3'>
    //   <div className='md:col-span-2 space-y-4'>
    //     {image ? <Image {...image} className='detail__masthead' /> : ''}
    //     <p>{shortDescription}</p>  
    //     <UnorderedList items={linkList(links)} />
    //     {credits ? <p>Special thanks to: {credits}</p> : null}
    //   </div>  
    //   <div className='col-span-6 row-span-1'>
    //   <h2 className="text-4xl mx-auto text-center">
    //       {organization}
    //     </h2>
    //     <h2 className="sr-only">
    //       {title}, organization: {organization}
    //     </h2>
    //     <h3 className="text-xl mx-auto text-center smallcaps">
    //       {title}
    //     </h3>  
    //   </div>
    //   <div className='col-span-2 bg-offwhite pr-12 space-y-4'>
    //     <p>Role: {role}</p>    
    //     <UnorderedList items={techs} className='list-disc list-inside' />
    //   </div>
    // </div>
  )
}
