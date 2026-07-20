import BlogPostTeaser from '@components/organisms/BlogPostTeaser'
import ProjectTeaser from '@components/organisms/ProjectTeaser'
import { TextLabel } from '@components/atoms/TextLabel'
import { NavLink } from 'react-router-dom'

export default function TaggedContent({ tag, items = [] }) {
  return (
    <section className="projects">
      <div className="inset">
        <TextLabel as="h2">Tagged // {tag.label}</TextLabel>

        {items.length === 0 ? (
          <p className="projects__empty">No projects or posts with this tag.</p>
        ) : (
          <ul className="projects__menu projects__menu--tagged">
            {items.map(({ type, item }) => {
              const href = type === 'post' ? `/blog/${item.slug}` : `/work/${item.slug}`
              const className = [item.featured ? 'featured' : '', type === 'post' ? 'post' : '']
                .filter(Boolean)
                .join(' ')

              return (
                <li key={`${type}-${item.slug}`} className={className || undefined}>
                  <NavLink to={href} className="teaser">
                    {type === 'post' ? (
                      <BlogPostTeaser {...item} />
                    ) : (
                      <ProjectTeaser {...item} />
                    )}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </section>
  )
}
