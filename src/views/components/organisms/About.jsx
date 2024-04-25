import Image from '@components/atoms/Image'
import png from '/assets/images/dill.png'
import webp from '/assets/images/dill.webp'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="about">
      <div className="inset">
        <div>
          <p>
            I've been building usable, accessible, projects for the web <Link to='/blog/four-takeaways-after-eleven-years'> for over eleven years</Link> after learning to design and code as a kid. While I'm comfy all across the stack, my deep knowledge lies in front end, design systems, and Drupal development.{' '}
          </p>

          <p>
            Offline, I perform in plays and musicals, sew and knit my own clothing, tend my vegetable and native plant
            garden, noodle around on the guitar, and hang out with my four cats.
          </p>

          <p>
            I love meeting others who are dedicated to the craft of web dev—feel free to <Link to="mailto:chelsiesjohnston@gmail.com">drop me an email</Link>, and let's have coffee sometime  :)
          </p>
        </div>
        <Image
          src={png}
          webp={webp}
          dimensions={{ height: 680, width: 680 }}
          alt="Chelsie and a dill plant."
        />
      </div>
    </div>
  )
}
