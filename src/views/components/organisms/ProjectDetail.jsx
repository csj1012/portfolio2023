import Image from '@components/atoms/Image'
import Video from '@components/atoms/Video'
import UnorderedList from '@components/atoms/UnorderedList'
import TagChiclet from '@components/molecules/TagChiclet'
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
  aside,
}) {
  const linkList = (links) => {
    const list = []
    for (const link of links) {
      list.push(<a href={link.href}>{link.text}</a>)
    }
    return list
  }

  function Description() {
    return description.map((item, index) => <p key={index}>{item}</p>)
  }

  const orgName = organization.name
  const orgUrl = organization.url

  // from https://ausi.github.io/respimagelint/
  const asideSizes = `(min-width: 1360px) ${Math.floor(aside.dimensions.width / 2)}w, (min-width: 1040px) ${Math.floor(aside.dimensions.width / 2)}w, (min-width: 780px) ${aside.dimensions.width}w, ${aside.dimensions.width}w`

  return (
    <article className='detail'>
      <section className='detail__basics'>
        <h2 className='detail__basics__title'>{title}</h2>
        <p className='detail__basics__involvement'>
          <strong>Involvement</strong> {role}
        </p>
        <span className='detail__basics__links'>
          <strong>Links</strong>
          <UnorderedList items={linkList(links)} />
        </span>
      </section>
      <aside className='detail__image-wrapper'>
        {video ? (
          <Video
            src={video.src}
            className='detail__masthead'
          />
        ) : (
          ''
        )}
        <p className='detail__masthead-caption'>{image.caption}</p>
        <UnorderedList
          items={(techs || []).map((tech) => (
            <TagChiclet key={tech} tag={tech} />
          ))}
          className='detail__list'
        />
      </aside>
      <aside className='detail__short-description'>{shortDescription}</aside>
      <aside className='detail__aside'>
        {aside ? (
          <>
            <Image {...aside} sizes={asideSizes} />
            <p className='detail__aside__caption'>{aside.caption}</p>
          </>
        ) : (
          ''
        )}
      </aside>
      <section className='detail__description'>
        {description ? Description() : ''}
        <p className='detail__aside__partnership'>
          In partnership with <Link to={orgUrl}>{orgName}</Link>
        </p>
        {credits ? <p className='detail__aside__partnership'>Special thanks to: {credits}</p> : ''}
      </section>
    </article>
  )
}
