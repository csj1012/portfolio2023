export default function Teaser({ className, ...props }) {
  const { category, link, summary, title } = props
  return (
    <div className={className || ''}>
      <span className="chiclets">{ category }</span>
      <p className="title">{ title }</p>
      <p>
        {summary}
      </p>
      <span className='action-text'>{link.text}</span>
    </div>
  )
}
