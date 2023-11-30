import { Link, NavLink } from 'react-router-dom'
import bgImage from '/assets/images/nouveau-bg.png'
import ThemeSelect from '@components/molecules/ThemeSelect'

export default function MainMenu() {
  const items = [    
    { text: 'About', href: '/' },
    { text: 'Work', href: '/work' },
    { text: 'Contact', href: '/contact' }
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
    <menu className="main-menu" style={{backgroundImage: `url(${bgImage})`}}>
      <h1 className="main-menu__title">        
        <Link to="/" className='main-menu__title__link'>Chelsie Johnston</Link>     
      </h1>
      <ThemeSelect />   
      { < HeadingElement /> }
      <ul className='main-menu__menu bg-cover'>{menuItems}</ul>
    </menu>
  )
  
}

