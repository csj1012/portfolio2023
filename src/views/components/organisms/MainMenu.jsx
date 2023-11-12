import { Link, NavLink } from 'react-router-dom'
import bgImage from '@assets/images/nouveau-bg.png'

export default function MainMenu() {
  const items = [    
    { text: 'About', href: '/about' },
    { text: 'Work', href: '/work' },
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
    <div className="main-menu-wrapper" style={{backgroundImage: `url(${bgImage})`}}>
      <h1 className="main-menu__title">        
        <Link to="/" className='main-menu__title__link'>Chelsie Johnston</Link>        
      </h1>
      { < HeadingElement /> } 
      <ul className='main-menu__menu'>{menuItems}</ul>
    </div>
  )
  
}

