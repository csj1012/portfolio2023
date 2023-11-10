import { Link } from 'react-router-dom'
import Image from '@components/atoms/Image'
import Nouveau from '@assets/images/nouveau.png'

export default function Intro() {
  return (
    <div className="intro">    
      <div>
        <Image src={Nouveau} alt='art nouveau Chelsie by Zach Henderson'></Image>
        <p className="text-xs mt-1">"Art Nouveau Chelsie" by Zach Henderson</p>
      </div>
      <div className="intro__copy">
        <p className="intro__copy--special">Hi! I’m a developer with an <em>affinity for front end</em>.</p>
        <p>My journey through code & design has been shaped by the continuous joy I find in crafting experiences that evoke emotion and connection, a passion kindled from an early start with coding at age 10.</p>
        <p>Over the years I’ve cultivated a deep appreciation for design systems, valuing their ability to unify visual aesthetics with functional coherence and elevate the developer experience.</p>
        <p><Link to="about" className='intro__cta'>Read about my career so far &#187;</Link></p>
      </div>
    </div>
  )
}
