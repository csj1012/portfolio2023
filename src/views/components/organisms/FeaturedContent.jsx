import { Link } from 'react-router-dom'
import TeaserList from '@components/molecules/TeaserList'

const teaserItems = [
  {
    'category': 'Blog Post',
    'title': 'On Ten Years in the Web Dev Industry',
    'summary': 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'link': {
      'href': '/blog/on-ten-years-in-the-web-dev-industry',
      'text': 'Read full blog post'
    }
  },
  {
    'category': 'Project',
    'title': 'An accessible, atomically-designed component library and Drupal theme for Blackboard\'s corporate rebranding effort.',
    'summary': 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'link': {
      'href': '/work/blackboard--blackboard-corporate-rebrand',
      'text': 'View project page'
    }
  },
  {
    'category': 'Blog Post',
    'title': 'That time I tried to use ChatGPT to write The Expanse, The Musical',
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
