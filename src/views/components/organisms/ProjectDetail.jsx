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
}) {
  const linkList = (links) => {
    const list = []
    for (const link of links) {
      list.push(<a href={link.href}>{link.text}</a>)
    }
    return list
  }

  return (
    <div className='bg-offwhite shadow-sm border-2 p-10 rounded-sm grid grid-cols-6 mx-auto w-2/3 space-y-8 mt-24 mb-24 text-title'>
      <div className='col-span-6 row-span-1'>
      <h2 className="text-4xl mx-auto text-center">
          {organization}
        </h2>
        <h2 className="sr-only">
          Project {title} for {organization}
        </h2>
        <h3 className="text-xl mx-auto text-center smallcaps">
          Project: {title} ({year})
        </h3>  
      </div>
      <div className='col-span-2 bg-offwhite pr-12 space-y-4'>
        <p>Role: {role}</p>    
        <UnorderedList items={techs} className='list-disc list-inside' />
      </div>
      <div className='col-span-4 bg-offwhite space-y-4'>
        {image ? <Image {...image} className='mx-0 ' /> : ''}
        <p>{shortDescription}</p>  
        <UnorderedList items={linkList(links)} />
        {credits ? <p>Special thanks to: {credits}</p> : null}
      </div>  
    </div>
  )
}
