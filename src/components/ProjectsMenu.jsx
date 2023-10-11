import { NavLink } from "react-router-dom"
import ProjectTeaser from './ProjectTeaser'

export default function ProjectsMenu({ items, current }) {
  let heading = 'Projects (Selected)'

  // if we're currently viewing a project, don't include it in the menu
  if (current) {
    items = items.filter(item => item.slug !== current)
    heading = 'More Projects'
  }

  return (
    <>
      <h2>{ heading }</h2>
      <ul>
        {
          items.map(item => {
            return (
              <li key={ item.slug }>
                <NavLink to={ `/projects/${item.slug}` }>
                  <ProjectTeaser { ...item }/>
                </NavLink>
              </li>
            )          
          })
        }
      </ul>
    </>
  )
}