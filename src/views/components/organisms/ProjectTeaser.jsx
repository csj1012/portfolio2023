import Image from '@components/atoms/Image'
import UnorderedList from '@components/atoms/UnorderedList'

export default function ProjectTeaser({ title, organization, shortDescription, teaser, role, techs, featured }) {  
  return (
    <div className="teaser border-b-2 border-haze pb-12">
      <h3 className="teaser__title sr-hidden">{title} &#187;</h3>
      <h3 className="sr-only">
        Project {title} for {organization}
      </h3>
      <div className="teaser__image-wrapper">
      {featured ? (
          <span className='teaser__featured inline-block bg-grape text-hazelight p-1 rounded-sm absolute'>Featured</span>
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
          <UnorderedList items={techs} className='detail__basics__list mt-2' />
        ) : ''}
        </div>
    </div>
  )
}
