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
    'title': 'That time I tried to use ChatGPT to write The Expanse, The Musical',
    "summary": "If we've ever spoken about the pitfalls of AI, you may have heard me reference the \"collective high-five:\" a somewhat tongue-in-cheek phrase I coined to characterize the \"training wheels\" that safeguard users from the darker potentials of LLMs. The \"high-five\" means that everything works out for everyone in the end; it's the silver lining, or maybe the toxic positivity sometimes found on your social media feed...",
    'link': {
      'href': '/blog/that-time-i-tried-to-use-chatgpt-to-write',
      'text': 'Read full blog post'
    }
  },
  {
    'category': 'Project',
    'title': 'An accessible, atomically-designed component library and Drupal theme for Blackboard\'s corporate rebranding effort',
    'summary': 'Our team crafted a style guide using Mannequin, Last Call Media’s custom pattern library tool. This allowed us to construct user interfaces from the ground up, incorporating everything from theme palette colors to rich navigation menus. The new design system served as both the source of truth for our theme and the theme code itself, which saved us a ton of time...',
    'link': {
      'href': '/work/blackboard--blackboard-corporate-rebrand',
      'text': 'View project page'
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
