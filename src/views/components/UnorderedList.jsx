export default function UnorderedList({ items }) {
  return (
    <ul>
      { items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}