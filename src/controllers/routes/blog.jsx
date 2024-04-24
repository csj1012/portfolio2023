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
  const matched = posts.find((blogPost) => blogPost.slug === slug)
  const content = await getPostContent(matched.slug)
  matched['content'] = content.html
  
  return matched
}

async function getPostContent(slug) {
  const filePath = `/files/blog/${slug}.json`

  try {
    const response = await fetch(filePath)
    const postContents = await response.json()
    return postContents
  } catch (error) {
    console.error("Failed to fetch post content:", error)
    return null
  }
}

export default function Project() {
  const data = useLoaderData()
  return <BlogPost {...data} />
}
