import { NavLink } from 'react-router-dom'

export default function Menu({   
    items, 
    title, 
    showTitle = true, 
    ItemComponent = ({ text, className }) => <span className={className}>{text}</span>,
    ...props
}) {
  const menuItems = items.map((item) => {
    return (
      <li key={item.href}>
        <NavLink to={item.href}>
          <ItemComponent {...item} />
        </NavLink>
      </li>
    )
  })

  return (
    <div>
      <h2 className={showTitle ? '' : 'sr-only'}>{title}</h2>
      <ul { ...props } >{menuItems}</ul>
    </div>
  )
}
