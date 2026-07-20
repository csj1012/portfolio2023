import { getProjects } from '@controllers/projects'
import { getBlogPosts } from '@controllers/blogPosts'
import { preferTagLabel, toTagSlug } from '@models/tagSlug'

function itemMatchesTag(labels, slug) {
  return (labels || []).some((label) => toTagSlug(label) === slug)
}

/**
 * Build a map of slug → { slug, label, projectSlugs, postSlugs }
 * from project techs and post topics.
 */
async function buildTagIndex() {
  const [projects, blogData] = await Promise.all([getProjects(), getBlogPosts()])
  const posts = blogData.posts || []
  const bySlug = new Map()

  function upsert(label, type, itemSlug) {
    const slug = toTagSlug(label)
    if (!slug) return

    const existing = bySlug.get(slug)
    if (!existing) {
      bySlug.set(slug, {
        slug,
        label,
        projectSlugs: new Set(),
        postSlugs: new Set(),
      })
    } else {
      existing.label = preferTagLabel(existing.label, label)
    }

    const entry = bySlug.get(slug)
    if (type === 'project') entry.projectSlugs.add(itemSlug)
    if (type === 'post') entry.postSlugs.add(itemSlug)
  }

  for (const project of projects) {
    for (const tech of project.techs || []) {
      upsert(tech, 'project', project.slug)
    }
  }

  for (const post of posts) {
    for (const topic of post.topics || []) {
      upsert(topic, 'post', post.slug)
    }
  }

  return { bySlug, projects, posts }
}

function getTagColorTier(total) {
  if (total >= 9) return 6
  if (total >= 7) return 5
  if (total >= 5) return 4
  if (total >= 3) return 3
  if (total >= 2) return 2
  return 1
}

export async function getTags() {
  const { bySlug } = await buildTagIndex()

  return [...bySlug.values()]
    .map(({ slug, label, projectSlugs, postSlugs }) => {
      const counts = {
        projects: projectSlugs.size,
        posts: postSlugs.size,
      }
      const total = counts.projects + counts.posts

      return {
        slug,
        label,
        counts,
        total,
        colorTier: getTagColorTier(total),
      }
    })
    .sort((a, b) => {
      const totalDiff = b.total - a.total
      if (totalDiff !== 0) return totalDiff
      return a.label.localeCompare(b.label, undefined, { sensitivity: 'base' })
    })
}

function itemSortDate(item, type) {
  if (type === 'post' && item.date) {
    return new Date(item.date).getTime()
  }

  if (item.year) {
    return new Date(`${item.year}-12-31T23:59:59Z`).getTime()
  }

  return 0
}

export async function getItemsByTag(tagSlug) {
  const slug = toTagSlug(tagSlug)
  const { bySlug, projects, posts } = await buildTagIndex()
  const entry = bySlug.get(slug)

  if (!entry) {
    return {
      tag: { slug, label: tagSlug },
      items: [],
    }
  }

  const items = [
    ...projects
      .filter((project) => itemMatchesTag(project.techs, slug))
      .map((item) => ({ type: 'project', item, sortDate: itemSortDate(item, 'project') })),
    ...posts
      .filter((post) => itemMatchesTag(post.topics, slug))
      .map((item) => ({ type: 'post', item, sortDate: itemSortDate(item, 'post') })),
  ].sort((a, b) => b.sortDate - a.sortDate)

  return {
    tag: { slug: entry.slug, label: entry.label },
    items,
  }
}
