import ProjectTeaser from '@components/organisms/ProjectTeaser'
import WorkStyle from '@components/organisms/WorkStyle'
import { NavLink } from 'react-router-dom'
import { TextLabel } from '@components/atoms/TextLabel'
import Divider from '@components/atoms/Divider'

export default function ProjectsMenu({ items, current }) {
  let headingText = 'Selected Projects // Case Studies'

  // if we're currently viewing a project, don't include it in the menu
  if (current) {
    items = items.filter((item) => item.slug !== current)
    headingText = 'More Projects'
  }

  items = items.map((item) => ({
    ...item,
    title: item.title,
    href: `/work/${item.slug}`,
  }))

  const menuItems = items.map((item) => {
    const featuredClass = item.featured ? 'featured' : ''
    return (
      <li
        key={item.href}
        className={featuredClass}
      >
        <NavLink
          to={item.href}
          className="teaser"
        >
          <ProjectTeaser {...item} />
        </NavLink>
      </li>
    )
  })

  return (
    <section className="projects">
      {current && <Divider />}
      <TextLabel as='h2'>{headingText}</TextLabel>
      <ul className="projects__menu">{menuItems}</ul>
      <WorkStyle />
    </section>
  )
}
