import ProjectTeaser from '@components/organisms/ProjectTeaser'
import { NavLink } from 'react-router-dom'
import Link from '@components/atoms/Link'

export default function ProjectsMenu({ items, current }) {
  let headingText = 'Projects (Selected)'

  // if we're currently viewing a project, don't include it in the menu
  if (current) {
    items = items.filter((item) => item.slug !== current)
    headingText = 'More Projects'
  }

  const HeadingElement = () => <h2 className="bg-frenchgray text-3xl pt-24 text-center">{headingText}</h2>

  const LinkElement = (props) => (
    <Link
      className="text-yellow"
      {...props}
    />
  )

  items = items.map((item) => ({
    ...item,
    title: item.title,
    href: `/projects/${item.slug}`,
  }))

  const menuItems = items.map((item) => {
    return (
      <li key={item.href}>
        <NavLink to={item.href} className='m-10 block'>
          <ProjectTeaser {...item} />
        </NavLink>
      </li>
    )
  })

  return (
    <div>
      { < HeadingElement /> } 
      <ul className='projects-menu bg-frenchgray grid grid-cols-2 gap-5'>{menuItems}</ul>
    </div>
  )
}
