export default function Teaser({ className, ...props }) {
  const { category, link, summary, title } = props
  return (
    <div className={className || ''}>
      <span className="chiclets">{ category }</span>
      <p className="title">{ title }</p>
      {summary.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      <span className='action-text'>{link.text}</span>
    </div>
  )
}
