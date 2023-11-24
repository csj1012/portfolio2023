import ProjectTeaser from '@components/organisms/ProjectTeaser'
import WorkStyle from '@components/organisms/WorkStyle'
import gradient from '/assets/svg/gradient.svg'
import { NavLink } from 'react-router-dom'

export default function ProjectsMenu({ items, current }) {
  let headingText = 'Project Highlights'

  // if we're currently viewing a project, don't include it in the menu
  if (current) {
    items = items.filter((item) => item.slug !== current)
    headingText = 'More Project Highlights'
  }

  const HeadingElement = () => <h2 className="projects__title">{headingText}</h2>

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
    <section className="projects" style={{backgroundImage: `url(${gradient})`}}>
      <div className="projects__inset">
        { < HeadingElement /> } 
        <ul className='projects__inset__menu'>{menuItems}</ul>
      </div>      
      <WorkStyle />
    </section>
  )
}
