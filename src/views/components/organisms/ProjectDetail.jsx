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
    <div>
      <h2>{title}</h2>
      <h3>
        {organization} ({year})
      </h3>
      {image ? <Image {...image} /> : ''}
      <p>{shortDescription}</p>
      <UnorderedList items={techs} />
      <p>Role: {role}</p>
      <UnorderedList items={linkList(links)} />
      {credits ? <p>Special thanks to: {credits}</p> : null}
    </div>
  )
}
