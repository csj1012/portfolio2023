import { NavLink } from 'react-router-dom'

export default function MainMenu() {
  const items = [
    { text: 'Home', href: '/' },
    { text: 'Projects', href: '/projects' },
    { text: 'Contact', href: '/contact' },
  ]
  const ItemComponent = ( {text } ) => {
    return (
      <span className="button">{ text }</span>
    )
  }
  const menuItems = items.map((item) => {
    return (
      <li key={item.href}>
        <NavLink to={item.href}>
          <ItemComponent {...item} />
        </NavLink>
      </li>
    )
  })
 
  const HeadingElement = () => (
    <h2 className='sr-only'>
      Main Menu
    </h2>
  )
  return (
    <div>
    { < HeadingElement /> } 
    <ul className='flex justify-center pt-24' >{menuItems}</ul>
    </div>
  )
  
}

