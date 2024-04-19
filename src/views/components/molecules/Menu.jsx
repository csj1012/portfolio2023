export default function Menu({ items, headingElement: HeadingElement = () => <h2>Menu</h2> }) {
  const menuItems = items.map((item) => {
    const { linkElement: LinkElement, itemComponent: ItemComponent } = item.renderOptions
    
    return (
      <li key={item.href}>
        <LinkElement to={item.href}>
          <ItemComponent text={item.text} />
        </LinkElement>
      </li>
    )
  })

  return (
    <>
      <HeadingElement />
      <ul>{menuItems}</ul>
    </>
  )
}
