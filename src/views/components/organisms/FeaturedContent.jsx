import { Link } from 'react-router-dom'
import TeaserList from '@components/molecules/TeaserList'

const teaserItems = [
  {
    'category': 'Blog Post',
    'title': 'Four things I\'ve learned after eleven years as a professional web dev',
    'summary': [
      "Of course, I've been coding for much longer—since around 2000, when I built my own play-by-post RPG website. What would I tell someone just starting out today?"
    ],
    'link': {
      'href': '/blog/four-takeaways-after-eleven-years',
      'text': 'Read full blog post'
    }
  },
  {
    'category': 'Blog Post',
    'title': 'Optimizing this site\'s fonts and images for a 100% lighthouse score',
    'summary': [
      'This effort required some simple adjustments to the quick and dirty way I\'d been handling fonts and images—so I figured I\'d share some insights into how I made its load time feel much smoother.'
    ],
    'link': {
      'href': '/blog/optimizing-performance-perfect-lighthouse',
      'text': 'Read full blog post'
    }
  },
  {
    'category': 'Project',
    'title': 'Empowering the artists: building a headless React Drupal theme for \"CreativeGround\" by New England Foundation for the Arts',
    'summary': [
      'Much of the front-end work centered around the editor experience for artists: once signed in, artists can curate photo galleries, update contact information, and describe their art with ease.'
    ],
    'link': {
      'href': '/work/creativeground-new-england-foundation-for-the-arts',
      'text': 'View project page'
    }
  },
  {
    'category': 'Blog Post',
    'title': 'That time I tried to use ChatGPT to write The Expanse, The Musical',
    "summary": [
      "If we've ever spoken about the pitfalls of AI, you may have heard me reference the \"collective high-five:\" a somewhat tongue-in-cheek phrase I coined to characterize the \"training wheels\" that safeguard users from the darker potentials of LLMs...",
    ],
    'link': {
      'href': '/blog/that-time-i-tried-to-use-chatgpt-to-write',
      'text': 'Read full blog post'
    }
  }
]

export default function FeaturedContent() {
  return (
    <>
      <TeaserList items={teaserItems} />
      <div className="more-links">
        <Link to='/work'>All Projects</Link>
        <Link to='/blog'>All Blog Posts</Link>
      </div>
    </>
  )
}
