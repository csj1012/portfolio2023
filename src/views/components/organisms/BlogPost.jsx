import flourish from '/public/assets/svg/divider.svg'
import Image from '@components/atoms/Image'
export default function BlogPost(data) {
  const { id, title, content, tagline, author, date, slug } = data

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  })

  const svg = `<svg width="300px" height="50px" xmlns="http://www.w3.org/2000/svg">
  <!-- Left horizontal line -->
  <line x1="0" y1="25" x2="130" y2="25" stroke="black" stroke-width="2" />
  <!-- Right horizontal line -->
  <line x1="170" y1="25" x2="300" y2="25" stroke="black" stroke-width="2" />
  <!-- Fleuron in the middle -->
  <path d="M150 15 L160 35 L140 35 Z" fill="black" />
</svg>
`

  return (
    <article className='blog-post'>
      {/* <div className="blog-post__wrapper"> */}
      {/* <div className="blog-post__info"> */}
        <h2 className='blog-post__title'>{title}</h2>
        <h2 className='blog-post__tagline'>{tagline}</h2>
        <p className='blog-post__authored'>Chelsie Johnston<br/>{formattedDate}</p>
        {/* </div> */}
        {/* <img className='blog-post__divider' src={flourish} alt='' /> */}
        {/* Using dangerouslySetInnerHTML because the content is trusted and comes from a controlled source */}
        <div dangerouslySetInnerHTML={{ __html: content }} className='blog-post__content'></div>
      {/* </div> */}
    </article>
  )
}