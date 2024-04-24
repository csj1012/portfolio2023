import { Link } from 'react-router-dom'
import TeaserList from '@components/molecules/TeaserList'

const teaserItems = [
  // {
  //   'category': 'Blog Post',
  //   'title': 'On Ten Years in the Web Dev Industry',
  //   'summary': 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   'link': {
  //     'href': '/blog/on-ten-years-in-the-web-dev-industry',
  //     'text': 'Read full blog post'
  //   }
  // },
  {
    'category': 'Blog Post',
    'title': 'Four Takeaways from Eleven Years as a Professional Dev',
    'summary': [
      "Of course, I've been coding for much longer—since around 2000, when I built my own play-by-post RPG website. What would I tell my younger self, were she starting out today?"
    ],
    'link': {
      'href': '/blog/four-takeaways-after-eleven-years',
      'text': 'Read full blog post'
    }
  },
  {
    'category': 'Project',
    'title': 'An accessible, atomically-designed component library and Drupal theme for Blackboard\'s corporate rebranding effort',
    'summary': [
      'The new design system served as both the source of truth for our theme and the theme code itself, which saved us a ton of time...'
    ],
    'link': {
      'href': '/work/blackboard--blackboard-corporate-rebrand',
      'text': 'View project page'
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
    </>
  )
}
