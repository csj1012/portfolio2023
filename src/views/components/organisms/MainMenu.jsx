import { Link, NavLink } from 'react-router-dom'

export default function MainMenu() {
  const items = [    
    { text: 'About', href: '/about' },
    { text: 'Projects', href: '/projects' },
    { text: 'Github', href: 'https://github.com/csj1012', external: true }
  ]
  const menuItems = items.map((item) => {
    const LinkElement = item.external ? Link : NavLink
    return (
      <li className='main-menu__item' key={item.href}>
        <LinkElement to={item.href}>
          { item.text }
        </LinkElement>
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
      <ul className='main-menu'>{menuItems}</ul>
    </div>
  )
  
}

