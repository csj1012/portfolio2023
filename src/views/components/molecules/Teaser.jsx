export default function Teaser({ className, ...props }) {
  const { category, date, link, summary, title } = props

  const formattedDate = date
    ? new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC',
      })
    : null

  return (
    <div className={className || ''}>
      <span className="chiclets">{ category }</span>
      <p className="title">{ title }</p>
      {formattedDate ? (
        <time className="posted" dateTime={date}>{formattedDate}</time>
      ) : null}
      {summary.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      <span className='action-text'>{link.text}</span>
    </div>
  )
}
