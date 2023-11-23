import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Root from '@routes/root'
import Error from '@routes/error'
import Intro from '@components/organisms/Intro'
import Project, { loader as projectLoader } from './controllers/routes/project'
import ProjectsList, { loader as projectsListLoader } from './controllers/routes/projectsList'
import Contact from '@components/pages/Contact'
import '/src/styles/index.scss'

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Intro />
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
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
