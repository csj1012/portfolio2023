import { NavLink } from "react-router-dom"

export default function ProjectsMenu({items}) {
  return (
    <ul>
      {
        items.map(({ slug, title }) => {
          return (
          <li key={slug}>
            <NavLink to={`/projects/${slug}`}>{title}</NavLink>
          </li>
          )          
        })
      }
    </ul>
  )
}