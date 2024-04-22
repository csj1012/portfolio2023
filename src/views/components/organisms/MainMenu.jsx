import { Link, NavLink } from 'react-router-dom'
import ThemeSelect from '@components/molecules/ThemeSelect'
import Menu from '@components/molecules/menu'

export default function MainMenu() {
  const ItemComponent = ({text}) => <span className=''>{text}</span>

  const NoClientSideRoutingLink = ({to, children}) => <a href={to}>{ children }</a>

  const HeadingElement = () => <h2 className='sr-only'>Main Menu:</h2>

  const renderOptions = { linkElement: Link, itemComponent: ItemComponent }

  const items = [    
    { text: 'About', href: '/', renderOptions },
    { text: 'Work', href: '/work', renderOptions },
    { text: 'Blog', href: '/blog', renderOptions },
    { text: 'Resume', href: '/files/Resume_ChelsieJohnston_2024.pdf', renderOptions: { linkElement: NoClientSideRoutingLink, itemComponent: ItemComponent } }
  ]
  
  return (
    <menu className="main-menu">
        <h1 className="main-menu__title">        
          <Link to="/" className='main-menu__title__link'>Chelsie Johnston</Link>     
        </h1>
        {/* <ThemeSelect /> */}
        <Menu items={ items } headingElement={ HeadingElement } />
    </menu>
  )
  
}

