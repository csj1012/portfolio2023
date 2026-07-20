import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Root from '@routes/root'
import Error from '@routes/error'
import Project, { loader as projectLoader } from './controllers/routes/project'
import ProjectsList, { loader as projectsListLoader } from './controllers/routes/projectsList'
import Blog, { loader as blogLoader } from './controllers/routes/blog'
import BlogList, { loader as blogPostsLoader } from './controllers/routes/blogList'
import '/src/styles/index.scss'
import FeaturedContent from '@components/organisms/FeaturedContent'
// import Design from '@components/pages/Design'

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <FeaturedContent />
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
        path: '/blog',
        element: <BlogList />,
        loader: blogPostsLoader,
        children: [
          {
            path: '/blog/:slug',
            element: <Blog />,
            loader: blogLoader,
          },
        ],
      }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)