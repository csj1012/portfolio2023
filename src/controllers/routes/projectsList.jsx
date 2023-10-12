import ProjectsMenu from '@components/organisms/ProjectsMenu'
import { getProjects } from '@controllers/projects'
import { Outlet, useLoaderData, useParams } from 'react-router-dom'

export async function loader() {
  const projects = await getProjects()
  return { projects }
}

export default function ProjectsList() {
  const { slug } = useParams()
  const { projects } = useLoaderData()

  return (
    <div>
      <Outlet />
      <ProjectsMenu items={projects} current={slug} />
    </div>
  )
}
