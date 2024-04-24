export default function BlogPost(data) {
  const { title, content, tagline, date, topics } = data

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })

  return (
    <article className="blog-post">
      <h3 className="blog-post__title">{title}</h3>
      <p className="blog-post__tagline">{tagline}</p>
      <p className="blog-post__authored">
        Chelsie Johnston
        <br />
        {formattedDate}
      </p>
      <ul className="blog-post__topics">
        {topics &&
          topics.map((topic, index) => (
            <li
              key={index}
              className="chiclet"
            >
              {topic}
            </li>
          ))}
      </ul>
      {/* Using dangerouslySetInnerHTML because the content is trusted and comes from a controlled source */}
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="blog-post__content"
      ></div>
    </article>
  )
}
