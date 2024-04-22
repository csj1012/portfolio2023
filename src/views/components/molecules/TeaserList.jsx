import Teaser from '@components/molecules/Teaser'
import { NavLink } from 'react-router-dom'

export default function TeaserList(items) {
  let teasers = items.items

  const menuItems = teasers.map((teaser) => { 
    const { link } = teaser
    const featuredClass = teaser.featured ? 'featured' : ''
    return (
      <li key={link.href} className={featuredClass}>
        <NavLink to={link.href} className='teaser'>
          <Teaser {...teaser} className='featured-content__item' />
        </NavLink>
      </li>
    )
  })

  return (
      <ul className='featured-content'>{menuItems}</ul>
  )
}