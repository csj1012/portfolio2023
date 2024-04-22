import { useState } from 'react'
import Menu from '@components/molecules/Menu'
import { Link } from 'react-router-dom'

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const ItemComponent = ({ text }) => <span className="">{text}</span>

  const NoClientSideRoutingLink = ({ to, children }) => <a href={to}>{children}</a>

  const HeadingElement = () => <h2 className="sr-only">Main Menu:</h2>

  const renderOptions = { linkElement: Link, itemComponent: ItemComponent }

  const items = [
    { text: 'About', href: '/', renderOptions },
    { text: 'Work', href: '/work', renderOptions },
    { text: 'Blog', href: '/blog', renderOptions },
    {
      text: 'Resume',
      href: '/files/Resume_ChelsieJohnston_2024.pdf',
      renderOptions: { linkElement: NoClientSideRoutingLink, itemComponent: ItemComponent },
    },
  ]

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className="hamburger">
      <button
        id="hamburger"
        aria-label="Main menu"
        aria-controls="navigation"
        aria-expanded={isOpen}
        onClick={toggleMenu}
        className="hamburger"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 100 100"
        >
          <path
            d={isOpen ? 'M30,30 L70,70 M70,30 L30,70' : 'M20,30 L80,30 M20,50 L80,50 M20,70 L80,70'}
            fill="none"
            stroke="#e4ede5"
            strokeWidth="8"
          />
        </svg>
      </button>
      <Menu
        items={items}
        headingElement={HeadingElement}
        id="navigation"
        className={isOpen ? 'open' : ''}
        aria-hidden={!isOpen}
        onClick={closeMenu}
      />
    </div>
  )
}

export default HamburgerMenu
