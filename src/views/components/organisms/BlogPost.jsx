import flourish from '/public/assets/svg/divider.svg'
import Image from '@components/atoms/Image'
export default function BlogPost(data) {
  const { id, title, content, tagline, author, date, slug, topics } = data

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  })

  return (
    <article className='blog-post'>
      {/* <div className="blog-post__wrapper"> */}
      {/* <div className="blog-post__info"> */}
        <h2 className='blog-post__title'>{title}</h2>
        <h2 className='blog-post__tagline'>{tagline}</h2>
        <p className='blog-post__authored'>Chelsie Johnston<br/>{formattedDate}</p>
        <ul className="blog-post__topics">
          {topics && topics.map((topic, index) => (
            <li key={index} className='chiclet'>{topic}</li>
          ))}
        </ul>
        {/* </div> */}
        {/* <img className='blog-post__divider' src={flourish} alt='' /> */}
        {/* Using dangerouslySetInnerHTML because the content is trusted and comes from a controlled source */}
        <div dangerouslySetInnerHTML={{ __html: content }} className='blog-post__content'></div>
      {/* </div> */}
    </article>
  )
}