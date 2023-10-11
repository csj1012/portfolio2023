import { useLoaderData } from 'react-router-dom'
import { getProjects } from '@controllers/projects'
import ProjectDetail from '@components/organisms/ProjectDetail'

export async function loader({ params }) {
  const project = await getProject(params.slug)
  return project
}

export async function getProject(slug) {
  const projects = await getProjects()
  return projects.find((project) => project.slug === slug)
}

export default function Project() {
  const data = useLoaderData()
  return <ProjectDetail {...data} />
}
