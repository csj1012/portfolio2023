import { NavLink } from 'react-router-dom'

import classNames from 'classnames'

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
      {/* <h2 className={showTitle ? '' : 'sr-only'}>{title}</h2> */}
      {/* { showTitle ? title : ''} */}
      { < HeadingElement /> } 
      <ul { ...props } >{menuItems}</ul>
    </div>
  )
}
