export default function UnorderedList({ items, ...props }) {
  return (
    <ul {...props}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}
