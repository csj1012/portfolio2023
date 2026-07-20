import { NavLink, useRouteLoaderData } from 'react-router-dom'

export default function TagsMenu() {
  const { tags = [] } = useRouteLoaderData('root') ?? {}

  if (tags.length === 0) return null

  return (
    <nav className="tags-menu" aria-label="Filter by tag">
      <h2 className="tags-menu__title">Filter by Tag:</h2>
      <ul className="tags-menu__list">
        {tags.map(({ slug, label, total, colorTier }) => (
          <li key={slug} className="tags-menu__item">
            <NavLink
              to={`/tags/${slug}`}
              title={`${total} result${total === 1 ? '' : 's'}`}
              className={({ isActive }) =>
                [
                  'tags-menu__tag',
                  `tags-menu__tag--tier-${colorTier}`,
                  isActive ? 'tags-menu__tag--active' : '',
                ]
                  .filter(Boolean)
                  .join(' ')
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
