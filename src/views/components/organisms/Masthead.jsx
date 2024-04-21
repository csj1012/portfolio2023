import Menu from '@components/molecules/menu'
import { Link } from 'react-router-dom'
import UnorderedList from '@components/atoms/UnorderedList'

export default function Masthead() {
  const ItemComponent = ({text}) => <span className=''>{text}</span>

  const HeadingElement = () => <h2 className='sr-only'>Where to find me:</h2>

  const renderOptions = { linkElement: Link, itemComponent: ItemComponent }

  const items = [    
    { text: 'LinkedIn', href: 'https://www.linkedin.com/in/chelsiesjohnston', renderOptions },
    { text: 'GitHub', href: 'https://github.com/csj1012', renderOptions },
    { text: 'Mastodon', href: 'https://hachyderm.io/@chelsiejohnston', renderOptions },
    { text: 'Contact', href: '/contact', renderOptions  }
  ]

  const topics = [
    'Full stack development',
    'Drupal development',
    'Accessiblity',
    'Design Systems',
    'CSS',
    'JavaScript',
    'TypeScript',
    'PHP',
    'React',
    'NodeJS',
    'OOCSS',
    'PatternLab',
    'Storybook',
    'Mannequin',
    'UI/UX Design',
    'Gulp',
    'Composer',
    'Twig',
    'Atomic Design',
    'Circle CI',
    'BackstopJS',
    'Decoupled Drupal',
    'Material UI',
    'CSS-in-JS',
  ]

  return (
    <>
      <div className='masthead__intro'>
        <p>
          Hello, I'm <span className='fancy'>Chelsie</span> A descriptor one, descriptor two, descriptor three.
        </p>
        <Menu
          items={items}
          headingElement={HeadingElement}
        />
        <div className='divider'></div>                             
      </div>
      <div className='masthead__filters'>
        <p>With over 10 years of experience in:</p>
        {topics ? (
          <UnorderedList
            items={topics}
            className='masthead__filters__list'
          />
        ) : (
          ''
        )}
      </div>
    </>
  )
}

