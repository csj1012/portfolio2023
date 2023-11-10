import { Link, NavLink } from 'react-router-dom'
import bgImage from '@assets/images/nouveau-menu-bg.png'

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
    <div className="grid bg-jade main-menu-wrapper" style={{backgroundImage: `url(${bgImage})`}}>
      <h1 className="intro__title">        
        <Link to="/" className='hover:opacity-50'>Chelsie Johnston</Link>        
      </h1>
      { < HeadingElement /> } 
      <ul className='main-menu'>{menuItems}</ul>
    </div>
  )
  
}

