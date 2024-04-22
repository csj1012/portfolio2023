import { Link } from 'react-router-dom'

export default function WorkStyle() {
  return (
    <aside className='workstyle inset'>
      <h2 className='workstyle__title'>How I Work</h2>
      <p className='workstyle__intro'>My favorite teams to be part of are ones made of people who consciously:</p>
      <ul>
        <li>Cultivate transparency and honesty in organizations, with clients, and especially among project teams</li>
        <li>Spend the time and energy to get the details right</li>
        <li>Solve problems at the root</li>
        <li>Lead by example and foster a culture of doing</li>
        <li>Carry a deep love and respect for the craft of web dev</li>
        <li>Streamline development and deployment workflow automated testing and deployment tools</li>
        <li>Curate well-organized, cohesive design pattern libraries</li>
        <li>Iterate often using nimble project methodologies</li>
        <li>Do what works and improve what doesn&#39;t</li>
        <li>Deliver quality (pull requests, code reviews, writing, and web projects)</li>
      </ul>
      <p className='workstyle__cta'>If we think the same, <Link to='/contact'>I'd love to get in touch!</Link></p>
    </aside>
  )
}