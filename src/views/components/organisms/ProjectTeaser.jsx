import Image from '@components/atoms/Image'
import UnorderedList from '@components/atoms/UnorderedList'

export default function ProjectTeaser({ title, organization, shortDescription, teaser, techs, featured }) {  
  const { orgName } = organization
  return (
    <div className="teaser">
      <h3 className="teaser__title sr-hidden">{title} &#187;</h3>
      <h3 className="sr-only">
        Project {title} for {orgName}
      </h3>
      <div className="teaser__image-wrapper">
      {featured ? (
          <span className='teaser__featured-chiclet'>Featured</span>
        ) : (
          ''
        )}
        {teaser ? (
          <Image
            className="teaser__image"
            {...teaser}            
          />
        ) : (
          ''
        )}
      </div>
      <div>
        {shortDescription}
        {techs ? (
          <UnorderedList items={techs} className='teaser__list' />
        ) : ''}
        </div>
    </div>
  )
}
