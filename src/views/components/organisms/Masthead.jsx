import Menu from '@components/molecules/menu'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

export default function Masthead() {
  const ItemComponent = ({ text }) => <span className=''>{text}</span>

  const HeadingElement = () => <h2 className='sr-only'>Where to find me:</h2>

  const renderOptions = { linkElement: Link, itemComponent: ItemComponent }

  const isSafari = () => {
    var ua = navigator.userAgent.toLowerCase()
    return ua.indexOf('safari') != -1 && !(ua.indexOf('chrome') > -1)
  }

  const items = [
    { text: 'LinkedIn', href: 'https://www.linkedin.com/in/chelsiesjohnston', renderOptions },
    { text: 'GitHub', href: 'https://github.com/csj1012', renderOptions },
    { text: 'Mastodon', href: 'https://hachyderm.io/@chelsiejohnston', renderOptions },
    { text: 'Email', href: 'mailto:chelsiesjohnston@gmail.com', renderOptions },
  ]

  console.log(isSafari(), isSafari)
  const classes = classNames([isSafari(), 'fancy'])
  console.log('classes', classes)

  return (
    <>
      <div className='masthead__intro'>
        <p>Hello, I'm </p>
        <h1 className={classNames(isSafari() ? 'safari' : '', 'fancy')}>Chelsie Johnston</h1>
        <p>
          A full-stack <strong>Design Systems and UI Engineer</strong> with deep front end expertise, thriving at the
          intersection of accessible code and inclusive design.
          <br />
        </p>
        <Menu
          items={items}
          headingElement={HeadingElement}
        />
        <div className='divider'></div>
      </div>
    </>
  )
}
