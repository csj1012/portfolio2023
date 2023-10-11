import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from '@routes/root'
import Error from '@routes/error'
import Contact from '@routes/contact'
import Project, { loader as projectLoader } from './controllers/routes/project'
import ProjectsList, { loader as projectsListLoader } from './controllers/routes/projectsList'
import '/src/index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/projects',
        element: <ProjectsList />,
        loader: projectsListLoader,
        children: [
          {
            path: '/projects/:slug',
            element: <Project />,
            loader: projectLoader,
          },
        ],
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
