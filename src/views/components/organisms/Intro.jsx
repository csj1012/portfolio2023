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
        <p className="intro__copy--special"><em>Hello! I&#39;m a developer with a love for all things front end. A little about  me:</em></p>
        <p>My journey through code & design has been shaped by the continuous joy I&#39;ve found in crafting experiences that evoke emotion and foster a sense of connection—a passion kindled from an early start with coding at age 10.</p>
        <p>Throughout my time as a developer I’ve cultivated a deep appreciation for design systems for their ability to marry visual and functional coherence. And on the human side of things, I&#39;m always interested in the &#34;hows&#34; and &#34;whys&#34; of web work (and love a good retro). </p>
        <p><Link to="work" className='intro__cta'>Check out some of my past work &#187;</Link></p>
      </article>
    </section>
  )
}
