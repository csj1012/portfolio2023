import { Link } from 'react-router-dom'

export default function WorkStyle() {
  return (
    <aside className='workstyle inset'>
      <h2 className='workstyle__title'>How I Work</h2>
      <p className='workstyle__intro'>My favorite teams to be part of are ones made of people who consciously:</p>
      <ul>
        <li>Lead by example (and team building exercises)</li>
        <li>Maintain clean, sensible markup and styling (using BEM, SMACSS, modular CSS—whichever methodology fits the project)</li>
        <li>Streamline development and deployment workflow - from local to live - using automated testing and deployment tools</li>
        <li>Curate a well-organized, cohesive design pattern library</li>
        <li>Cultivate transparency and honesty in organizations, with clients, and especially among project teams</li>
        <li>Spend the time and energy to get the details right</li>
        <li>Iterate upon nimble project methodologies that think outside the box</li>
        <li>Solve problems at the root</li>
        <li>Use the right tools for the job (next time, I&#39;ll probably build this in Astro...)</li>
        <li>Do what works and improve what doesn&#39;t</li>
        <li>Deliver quality (pull requests, code reviews, writing, and web projects) as painlessly as possible</li>
      </ul>
      <p className='workstyle__cta'>If we think the same, <Link to='/contact'>I'd love to get in touch!</Link></p>
    </aside>
  )
}