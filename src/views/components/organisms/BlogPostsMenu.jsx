import BlogPostTeaser from '@components/organisms/BlogPostTeaser'
import WorkStyle from '@components/organisms/WorkStyle'
import { NavLink } from 'react-router-dom'

export default function BlogPostsMenu({ items, current }) {
  let headingText = 'Recent Posts'
  let { posts } = items

  // if we're currently viewing a post, don't include it in the menu
  if (current) {
    posts = posts.filter((item) => item.slug !== current)
    headingText = 'More Posts'
  }

  const HeadingElement = () => <h3 className="projects__title">{headingText}</h3>

  console.log(items)
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
          {<HeadingElement />}
          <ul className="projects__menu projects__menu--blog">{menuItems}</ul>
        </div>
        <WorkStyle />
      </section>
    </>
  )
}
