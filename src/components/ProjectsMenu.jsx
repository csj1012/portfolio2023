import { NavLink } from "react-router-dom"
import ProjectTeaser from './ProjectTeaser'

export default function ProjectsMenu({items}) {
  return (
    <ul>
      {
        items.map(item => {
          return (
          <li key={item.slug}>
            <NavLink to={`/projects/${item.slug}`}>
              <ProjectTeaser { ...item }/>
            </NavLink>
          </li>
          )          
        })
      }
    </ul>
  )
}