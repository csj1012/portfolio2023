import { useLoaderData } from 'react-router-dom'
import { getBlogPosts } from '@controllers/blogPosts.js'
import BlogPost from '@components/organisms/BlogPost'

export async function loader({ params }) {
  const blogPost = await getBlogPost(params.slug)
  return blogPost
}

export async function getBlogPost(slug) {
  const data = await getBlogPosts()
  const { posts } = data
  
  return posts.find((blogPost) => blogPost.slug === slug)
}

export default function Project() {
  const data = useLoaderData()
  return <BlogPost {...data} />
}
