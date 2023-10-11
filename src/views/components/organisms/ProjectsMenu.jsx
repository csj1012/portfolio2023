import ProjectTeaser from '@components/organisms/ProjectTeaser'
import Menu from '@components/molecules/Menu'

export default function ProjectsMenu({ items, current }) {
  let heading = 'Projects (Selected)'

  // if we're currently viewing a project, don't include it in the menu
  if (current) {
    items = items.filter(item => item.slug !== current)
    heading = 'More Projects'
  }

  items = items.map(item => (
    { 
      ...item,
      title: item.title, 
      href: `/projects/${item.slug}` 
    }
  ))

  return <Menu items={ items } title={ heading } ItemComponent = { ProjectTeaser } />
}