import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Error from '@routes/error'
import Design from '@components/pages/Design'
import Root from '@routes/root'
import '/src/styles/index.scss'
import ProjectsList from '@components/organisms/ProjectsMenu'
import projectsListLoader from '@routes/projectsList'
import Project from '@components/organisms/ProjectDetail'
import Contact from '@components/pages/Contact'
import TaggedContent from '@components/organisms/TaggedContent'
import projectLoader from '@routes/project'

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/tag/:tag',
        element: <TaggedContent />,
        loader: projectLoader, // Replace with 'all content' loader once we have blogs
      },
      {
        path: '/work',
        element: <ProjectsList />,
        loader: projectsListLoader,
        children: [
          {
            path: '/work/:slug',
            element: <Project />,
            loader: projectLoader,
          },
        ],
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ],
  },
  {
    path: '/design',
    element: <Design />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
