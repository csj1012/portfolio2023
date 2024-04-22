import BlogPostsMenu from '@components/organisms/BlogPostsMenu'
import { getBlogPosts } from '@controllers/blogPosts'
import { Outlet, useLoaderData, useParams } from 'react-router-dom'

export async function loader() {
  const blogPosts = await getBlogPosts()
  return { blogPosts }
}

export default function BlogList() {
  const { slug } = useParams()
  const { blogPosts } = useLoaderData()

  return (
    <>
      <h2 className="content__section-heading">From the Blog:</h2>
      <Outlet />
      <BlogPostsMenu items={blogPosts} current={slug} />
    </>
  )
}
