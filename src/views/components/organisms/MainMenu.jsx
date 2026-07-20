import { Link, NavLink } from 'react-router-dom'
import ThemeSelect from '@components/molecules/ThemeSelect'
import Menu from '@components/molecules/Menu'
import HamburgerMenu from '@components/organisms/HamburgerMenu'

export default function MainMenu() {
  const ItemComponent = ({text}) => <span className=''>{text}</span>

  const NoClientSideRoutingLink = ({to, children}) => <a href={to}>{ children }</a>

  const HeadingElement = () => <h2 className='sr-only'>Main Menu:</h2>

  const renderOptions = { linkElement: NavLink, itemComponent: ItemComponent }

  const items = [    
    { text: 'About', href: '/', renderOptions },
    { text: 'Work', href: '/work', renderOptions },
    { text: 'Blog', href: '/blog', renderOptions },
    { text: 'Resume (PDF)', href: '/files/ChelsieJohnston_Resume_2024.pdf', renderOptions: { linkElement: NoClientSideRoutingLink, itemComponent: ItemComponent } }
  ]
  
  return (
    <menu className="main-menu">
        <span className="main-menu__title">        
          <NavLink to="/" className='main-menu__title__link'>
            <span className="main-menu__fleur" aria-hidden="true">⚜</span>
            Chelsie Johnston
          </NavLink>     
        </span>
        {/* <ThemeSelect /> */}
        <Menu items={ items } headingElement={ HeadingElement } className='main-menu__nav' />
        <HamburgerMenu />
    </menu>
  )
  
}

