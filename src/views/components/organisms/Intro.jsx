import { Link } from 'react-router-dom'
import Image from '@components/atoms/Image'
import Nouveau from '@assets/images/nouveau.png'

export default function Intro() {
  return (
    <div className="intro">    
      <div className="intro__art">
        <Image src={Nouveau} alt='art nouveau Chelsie by Zach Henderson'></Image>
        <p className="intro__caption">"Chelsie and Maurice, Art Nouveau" by Zach Henderson</p>
      </div>
      <div className="intro__copy">
        <p className="intro__copy--special"><em>Hello! I'm a developer with a love for all things front end. A little about  me:</em></p>
        <p>My journey through code & design has been shaped by the continuous joy I've found in crafting experiences that evoke emotion and foster a sense of connection—a passion kindled from an early start with coding at age 10.</p>
        <p>Throughout my time as a developer I’ve cultivated a deep appreciation for design systems for their ability to marry visual and functional coherence. And on the human side of things, I'm always interested in the "hows" and "whys" of web work (and love a good retro). </p>
        <p><Link to="work" className='intro__cta'>Check out some of my past work &#187;</Link></p>
      </div>
    </div>
  )
}
