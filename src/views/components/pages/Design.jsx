import ComputedBg from '@components/atoms/ComputedBg'
import nouveauArtDummy from '/assets/images/nouveau-dummy-edited.png'
import Github from '/assets/github.png'
import Linkedin from '/assets/linkedin.png'
import Email from '/assets/svg/email.png'
import { Link } from 'react-router-dom'
import List from '/assets/list.png'
import UnorderedList from '@components/atoms/UnorderedList'
import Image from '@components/atoms/Image'
import png from '/assets/images/dill.png'
import webp from '/assets/images/dill.webp'

const buzzwords = [
  'Drupal',
  'Accessiblity',
  'Javascript',
  'React',
  'CSS',
  'Drupal',
  'Accessiblity',
  'Javascript',
  'React',
  'CSS',
  'Drupal',
  'Accessiblity',
  'Javascript',
  'React',
  'CSS',
]

export default function RootPage({ outlet }) {
  return (
    <div
      className="layout-border"
      style={{ backgroundImage: ComputedBg('jade') }}
    >
      <div class="top">Chelsie Johnston — Work / Blog / Contact</div>
      <div
        className="layout"
        style={{ backgroundImage: ComputedBg('haze') }}
      >
        <div className="text-wrapper">
          <div className="text2">Hello! I'm</div>
          <div className="text1">Chelsie</div>
          <div className="text2">A design systems, Developer experience, and UI tooling expert.</div>
          <ul className="contacts">
            <li>
              <span
                style={{ backgroundImage: `url(${Linkedin})` }}
                alt="Linkedin logo"
              />{' '}
              <Link to="https://www.linkedin.com/in/chelsiesjohnston/">LinkedIn</Link>
            </li>
            <li>
              <span
                style={{ backgroundImage: `url(${Github})` }}
                alt="Github logo"
              />{' '}
              <Link to="https://github.com/csj1012">GitHub</Link>
            </li>
            <li>
              <span
                style={{ backgroundImage: `url(${Email})` }}
                alt="Email icon"
              />{' '}
              <Link to="https://hachyderm.io/@chelsiejohnston">Mastodon</Link>
            </li>
            <li>
              <span
                style={{ backgroundImage: `url(${List})` }}
                alt="Email icon"
              />{' '}
              <a href="/files/Resume_ChelsieJohnston_2024.pdf">Contact</a>
            </li>
          </ul>
          <div className="divider"></div>
        </div>

        <div className='bullshit'>
          <p>Filter by topic:</p>
          {buzzwords ? (
            <UnorderedList
              items={buzzwords}
              className="teaser__list"
            />
          ) : (
            ''
          )}
          </div>

          <div className="items">
            <div className="item">
              <span className="chiclets">Blog Post: </span>
              <p className="title">On Ten Years in the Web Dev Industry</p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>Read the full post</p>

            </div>
            <div className="item">
              <span className="chiclets">Project Highlight: </span>
              <p className="title">
                An accessible, atomically-designed component library and Drupal theme for Blackboard's corporate
                rebranding effort.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>

            </div>
            <div className="item">
              <span className="chiclets">Blog Post: </span>
              <p className="title">Sustainable Design Patterns in CSS</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>Read the full post</p>
            </div>
            <div className="item">
              <span className="chiclets">Podcast: </span>
              <p className="title">
                Reflections on conference speakership
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

            </div>
                          {/* <div className="stinger">
                <a href="asdf">All blog posts</a>
              </div> */}
          </div>

      </div>
      <div className='story'>
        <div className='inset'> 
        {/* <h2>Hello</h2> */}
        <div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          When I'm not trying to get back into the industry I've been in for ten years, I'm spending time on stage, with my four cats, gardening, knitting, or sewing.
        </p>
        </div>
        <Image style={{ background: 'black'}} src={png} webp={webp} dimensions={{'height': 680, 'width': 680}} alt='Chelsie and a dill plant.' />

        </div>
      </div>
      <div className='brands'>
        <div className="logos">
          <img alt='blackboard' src='/assets/images/BLAC_grey_site.png' />
          <img alt='blackboard' src='/assets/images/BLAC_grey_site.png' />
          <img alt='blackboard' src='/assets/images/BLAC_grey_site.png' />
          <img alt='blackboard' src='/assets/images/BLAC_grey_site.png' />
          <img alt='blackboard' src='/assets/images/BLAC_grey_site.png' />
          <img alt='blackboard' src='/assets/images/BLAC_grey_site.png' />
          <img alt='blackboard' src='/assets/images/BLAC_grey_site.png' />
          <img alt='blackboard' src='/assets/images/BLAC_grey_site.png' />
        </div>
      </div>
    </div>
  )
}
