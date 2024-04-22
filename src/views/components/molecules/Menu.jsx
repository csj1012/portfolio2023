import classNames from 'classnames'

export default function Menu({ items, headingElement: HeadingElement = () => <h2>Menu</h2>, ...props }) {
  const menuItems = items.map((item) => {
    const { linkElement: LinkElement, itemComponent: ItemComponent } = item.renderOptions
    
    return (
      <li key={item.href}>
        <LinkElement to={item.href} onClick={props.onClick}>
          <ItemComponent text={item.text} />
        </LinkElement>
      </li>
    )
  })

  return (
    <div className={classNames('menu-wrapper', props.className)}>
      <HeadingElement />
      <ul>{menuItems}</ul>
    </div>
  )
}
