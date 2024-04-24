import Image from '@components/atoms/Image'
import png from '/assets/images/dill.png'
import webp from '/assets/images/dill.webp'

export default function About() {
  return (
    <div className="about">
      <div className="inset">
        {/* <h2>Hello</h2> */}
        <div>
        <p>I'm Chelsie. I specialize in creating and maintaining design systems and component libraries with a focus on aesthetics, usability, and accessibility—as well as Drupal and general front end development. </p>

<p>Offline, I perform in plays and musicals, sew and knit my own clothing, tend my vegetable and native plant garden, and hang out with my four cats.</p>

<p>I love meeting others who are dedicated to the craft of web dev—feel free to drop me an email, and let's have coffee sometime! :)</p>
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
