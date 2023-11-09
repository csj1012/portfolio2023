import { Link } from 'react-router-dom'

export default function Masthead() {
  return (
    <div className="masthead">
      <h1 className="masthead__title">
        <span className="masthead__title__highlight">Chelsie Johnston</span>
      </h1>        
      <div className="masthead__copy">
        <p className="masthead__copy--special">Hi! I’m a developer with an <em>affinity for front end</em>.</p>
        <p>My journey through code & design has been shaped by the continuous joy I find in crafting experiences that evoke emotion and connection, a passion kindled from an early start with coding at age 10.</p>
        <p>Over the years I’ve cultivated a deep appreciation for design systems, valuing their ability to unify visual aesthetics with functional coherence and elevate the developer experience.</p>
        <p><Link to="about" className='masthead__cta'>Read about my career so far &#187;</Link></p>
      </div>
    </div>
  )
}
