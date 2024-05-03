import { Link } from 'react-router-dom'
import UnorderedList from '@components/atoms/UnorderedList'

const topics = [
  'Accessiblity',
  'Design Systems',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Full stack development',
  'Drupal development',
  'PHP',
  'NodeJS',
  'PatternLab',
  'Storybook',
  'Mannequin',
  'UI/UX Design',
  'Twig',
  'Atomic Design',
  'Circle CI',
  'BackstopJS',
  'Decoupled Drupal',
  'Material UI',
  'CSS-in-JS',
]

export default function Testimonial() {
  return (
    <aside className="testimonial">
      <div className="inset">
        <div className="testimonial__topics">
          {topics ? (
            <UnorderedList
              items={topics}
              className="testimonial__topics__list"
            />
          ) : (
            ''
          )}
        </div>
        <div className="testimonial__writing">
          <p>
            &quot;Chelsie is one of the best developers I’ve ever worked with; the sites she builds always look and
            function better than the designs she’s given to work from because she fills in gaps with a designer’s eye,
            taking into account both the user experience and aesthetic.&quot;
          </p>
          <p>
            &quot;Super smart - Very thorough - Makes the effort to do things correctly and future-proof them - Uses
            knowledge outside of her development discipline (design, accessibility, general empathy) to make sure the
            things she builds will be successful - A joy to work with&quot;
          </p>
          <p className="testimonial__attribution">— <Link to='https://www.linkedin.com/in/colinpanetta/'>Colin Panetta</Link>, Director of UX/UI, Last Call Media</p>
        </div>
      </div>
    </aside>
  )
}
