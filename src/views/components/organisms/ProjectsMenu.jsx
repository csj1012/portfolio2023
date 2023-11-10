import ProjectTeaser from '@components/organisms/ProjectTeaser'
import { NavLink } from 'react-router-dom'

export default function ProjectsMenu({ items, current }) {
  let headingText = 'Project Highlights'

  // if we're currently viewing a project, don't include it in the menu
  if (current) {
    items = items.filter((item) => item.slug !== current)
    headingText = 'More Projects'
  }

  const HeadingElement = () => <h2 className="projects__title"><span className="projects__title__highlight">{headingText}</span></h2>

  items = items.map((item) => ({
    ...item,
    title: item.title,
    href: `/projects/${item.slug}`,
  }))

  const menuItems = items.map((item) => { 
    const featuredClass = item.featured ? 'featured' : ''
    return (
      <li key={item.href} className={featuredClass}>
        <NavLink to={item.href} className='projects__menu__link'>
          <ProjectTeaser {...item} />
        </NavLink>
      </li>
    )
  })

  return (
    <section className="projects">
      { < HeadingElement /> } 
      <ul className='projects__menu'>{menuItems}</ul>
    </section>
  )
}
