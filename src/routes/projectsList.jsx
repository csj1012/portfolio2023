import ProjectsMenu from '../components/ProjectsMenu'
import { getProjects } from "../projects"
import { Outlet, useLoaderData } from 'react-router-dom'

export async function loader() {
  const projects = await getProjects()
  return { projects }
}

export default function ProjectsList() {
  const { projects } = useLoaderData()
    return (
        <div style={{ border: 'solid 1px purple' }}>
            <h2>All Projects</h2>
            <ProjectsMenu items={ projects }/>
            <Outlet />
        </div>
    )
}