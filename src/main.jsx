import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Error from '@routes/error'
import Design from '@components/pages/Design'
import Root from '@routes/root'
import '/src/styles/index.scss'

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      // {
      //   path: '/work',
      //   element: <ProjectsList />,
      //   loader: projectsListLoader,
      //   children: [
      //     {
      //       path: '/work/:slug',
      //       element: <Project />,
      //       loader: projectLoader,
      //     },
      //   ],
      // },
      // {
      //   path: '/contact',
      //   element: <Contact />
      // }
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
