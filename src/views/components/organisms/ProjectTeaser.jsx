import Image from '@components/atoms/Image'
import UnorderedList from '@components/atoms/UnorderedList'

export default function ProjectTeaser({ title, shortDescription, teaser, techs, featured }) {  
  return (
    <>
      <h3 className="teaser__title sr-hidden">{title} &#187;</h3>
      <p className="teaser__short-description">{shortDescription}</p>
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
      {techs ? (
        <UnorderedList items={techs} className='teaser__list' />
      ) : ''}
    </>
  )
}
