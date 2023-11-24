import { Link } from 'react-router-dom'
import Image from '@components/atoms/Image'
import NouveauPNG from '/assets/images/nouveau.png'
import NouveauWebP from '/assets/images/nouveau.webp'

export default function Intro() {
  return (
    <section className="intro">    
      <aside className="intro__art">
        <Image src={NouveauPNG} webp={NouveauWebP} dimensions={{'height': 968, 'width': 774}} alt='art nouveau Chelsie by Zach Henderson'></Image>
        <p className="intro__caption">&#34;Chelsie and Maurice, Art Nouveau&#34; by Zach Henderson</p>
      </aside>
      <article className="intro__copy">
        <p className="intro__copy--special">Hello! I&#39;m Chelsie, a developer with a love for front end. A little about  me:</p>
        <p>My journey through code & design has been shaped by the continuous joy I&#39;ve found in crafting experiences that evoke emotion and foster a sense of connection—a passion kindled from an early start with coding at age 10.</p>
        <p>Throughout my time as a developer I’ve cultivated a deep appreciation for design systems for their ability to marry visual and functional coherence. </p>
        <p>On the human side of things, I’m very interested in how project teams bridge the gap between UX, visual design, and front end development. I’m always curious about how project teams can work best together (an area of interest which combines agile project management methodology, team psychology, and design and development workflow.</p>
        <p><Link to="work" className='intro__cta'>Check out some of my past work &#187;</Link></p>
      </article>
    </section>
  )
}
