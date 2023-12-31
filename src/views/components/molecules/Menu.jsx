import { NavLink } from 'react-router-dom'

export default function Menu({   
    items, 
    HeadingElement = () => <h2>Menu</h2>,
    LinkElement = () => <NavLink {...props}/>,
    ItemComponent = ({ text, className }) => <span className={className}>{text}</span>,
    ...props
}) {
  const menuItems = items.map((item) => {
    return (
      <li key={item.href}>
        <LinkElement to={item.href} {...props}>
          <ItemComponent {...item} />
        </LinkElement>
      </li>
    )
  })

  return (
    <div>
      { < HeadingElement /> } 
      <ul { ...props } >{menuItems}</ul>
    </div>
  )
}
