import { useLoaderData } from "react-router-dom"
import { getProjects } from "../projects"

export async function loader({ params }) {    
    const project = await getProject(params.slug)
    return project
}

export async function getProject(slug) { 
    const projects = await getProjects()
    return projects.find(project => project.slug === slug)
  }

export default function Project() {
    const data = useLoaderData()
    const { title } = data
    return (
        <div style={{border: 'solid 1px red'}}>
            <h2>{title}</h2>
            <p>{title}</p>
        </div>
    )
}