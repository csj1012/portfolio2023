import ProjectTeaser from '@components/organisms/ProjectTeaser'
import WorkStyle from '@components/organisms/WorkStyle'
import gradient from '/assets/svg/noiseHaze.svg'
import { NavLink } from 'react-router-dom'
import ComputedBg from '@components/atoms/ComputedBg'

export default function ProjectsMenu({ items, current }) {
  let headingText = 'Selected Projects'

  // if we're currently viewing a project, don't include it in the menu
  if (current) {
    items = items.filter((item) => item.slug !== current)
    headingText = 'More Projects'
  }

  const HeadingElement = () => <h2 className='projects__title'>{headingText}</h2>

  items = items.map((item) => ({
    ...item,
    title: item.title,
    href: `/work/${item.slug}`,
  }))

  const menuItems = items.map((item) => { 
    const featuredClass = item.featured ? 'featured' : ''
    return (
      <li key={item.href} className={featuredClass}>
        <NavLink to={item.href} className='teaser'>
          <ProjectTeaser {...item} />
        </NavLink>
      </li>
    )
  })

  return (
    <section className='projects'>
      { < HeadingElement /> } 
      <div className='inset'>
        <ul className='projects__menu'>{menuItems}</ul>
      </div>      
      <WorkStyle />
    </section>
  )
}
