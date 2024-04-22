import { Link } from 'react-router-dom'
import TeaserList from '@components/molecules/TeaserList'

const teaserItems = [
  {
    'category': 'Blog Post',
    'title': 'On Ten Years in the Web Dev Industry',
    'summary': 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'link': {
      'href': '/blog/lorem-ipsum',
      'text': 'Read full blog post'
    }
  },
  {
    'category': 'Project',
    'title': 'An accessible, atomically-designed component library and Drupal theme for Blackboard\'s corporate rebranding effort.',
    'summary': 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'link': {
      'href': '/blog/lorem-ipsum',
      'text': 'View project page'
    }
  },
  {
    'category': 'Blog Post',
    'title': 'That time I tried to use ChatGPT to write The Expanse, The Musical',
    'link': {
      'href': '/blog/lorem-ipsum',
      'text': 'Read full blog post'
    }
  }
]

export default function FeaturedContent() {
  return (
    <>
      <TeaserList items={teaserItems} />
      {/* <div className="featured-content">
        <div className="featured-content__item">
          <span className="chiclets">Blog Post: </span>
          <p className="title">On Ten Years in the Web Dev Industry</p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <Link to='/blog/lorem-ipsum'>Read the full blog post</Link>
        </div>
        <div className="featured-content__item">
          <span className="chiclets">Project Highlight: </span>
          <p className="title">
            An accessible, atomically-designed component library and Drupal theme for Blackboard's corporate rebranding
            effort.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
          <Link to='/work/blackboard--blackboard-corporate-rebrand'>View project</Link>
        </div>
        <div className="featured-content__item">
          <span className="chiclets">Blog Post: </span>
          <p className="title">That time I tried to use ChatGPT to write The Expanse, The Musical</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <Link to='/blog/dolor-sit-amet'>Read the full blog post</Link>
        </div>
        <div className="featured-content__item">
          <span className="chiclets">Podcast: </span>
          <p className="title">Reflections on conference speakership</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
      </div> */}
    </>
  )
}
