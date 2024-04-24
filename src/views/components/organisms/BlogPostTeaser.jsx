import Image from '@components/atoms/Image'
import UnorderedList from '@components/atoms/UnorderedList'

export default function BlogPostTeaser({ title, summary, teaser, topics, featured, date }) {  

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  })

  return (
    <>
      <h3 className="teaser__title sr-hidden">{title}</h3>
      <p className="teaser__posted">{formattedDate}</p>
      <p className="teaser__short-description">{summary}</p>
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
      {/* {topics ? (
        <UnorderedList items={topics} className='teaser__list' />
      ) : ''} */}
    </>
  )
}
