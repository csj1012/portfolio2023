import BlogPostTeaser from '@components/organisms/BlogPostTeaser'
import { NavLink } from 'react-router-dom'
import { TextLabel } from '@components/atoms/TextLabel'
import Divider from '@components/atoms/Divider'

export default function BlogPostsMenu({ items, current }) {
  let headingText = 'Recent Posts'
  let { posts } = items

  // if we're currently viewing a post, don't include it in the menu
  if (current) {
    posts = posts.filter((item) => item.slug !== current)
    headingText = 'More Posts'
  }
  
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  posts = posts.map((item) => ({
    ...item,
    title: item.title,
    href: `/blog/${item.slug}`,
  }))

  const menuItems = posts.map((listItem) => {
    const featuredClass = listItem.featured ? 'featured' : ''
    return (
      <li
        key={listItem.href}
        className={featuredClass}
      >
        <NavLink
          to={listItem.href}
          className="teaser"
        >
          <BlogPostTeaser {...listItem} />
        </NavLink>
      </li>
    )
  })

  return (
    <>
      <section className="projects">
        <div className="inset">
          {current && <Divider />}
          <TextLabel as='h2'>From the Blog // {headingText}</TextLabel>
          <ul className="projects__menu projects__menu--blog">{menuItems}</ul>
        </div>
      </section>
    </>
  )
}
