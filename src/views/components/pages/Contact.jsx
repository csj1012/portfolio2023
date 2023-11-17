import { Link } from 'react-router-dom'
import Image from '@components/atoms/Image'
import png from '/assets/images/dill.png'
import webp from '/assets/images/dill.webp'

export default function Contact() {
  return (
    <section className='contact'>    
      <div className='contact__info'>
        <p>Let's get in touch!</p>
        <ul>
          <li>LinkedIn: <Link to='https://www.linkedin.com/in/chelsiesjohnston/'>chelsiesjohnston</Link></li>
          <li>GitHub: <Link to='https://github.com/csj1012'>csj1012</Link></li>
          <li>Email: <Link to='mailto:chelsiesjohnston@gmail.com'>chelsiesjohnston@gmail.com</Link></li>
        </ul>
      </div>
      <aside className="contact__art">
        <Image src={png} webp={webp} dimensions={{'height': 680, 'width': 680}} alt='Chelsie and a dill plant.' />
      </aside>      
    </section>
  )
}