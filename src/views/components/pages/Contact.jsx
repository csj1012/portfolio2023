import { Link } from 'react-router-dom'
import Image from '@components/atoms/Image'
import png from '/assets/images/dill.png'
import webp from '/assets/images/dill.webp'
import Github from '/assets/github.png'
import Linkedin from '/assets/linkedin.png'
import Email from '/assets/svg/email.png'
import List from '/assets/list.png'

export default function Contact() {
  return (
    <section className='contact'>
      <div className='inset'>
        <div className='contact__info'>
          <p>Let's chat?</p>
          <ul>
            <li><span style={{ 'backgroundImage': `url(${Linkedin})`}} alt='Linkedin logo' /> <Link to='https://www.linkedin.com/in/chelsiesjohnston/'>chelsiesjohnston</Link></li>
            <li><span style={{ 'backgroundImage': `url(${Github})`}} alt='Github logo' /> <Link to='https://github.com/csj1012'>csj1012</Link></li>
            <li><span style={{ 'backgroundImage': `url(${Email})`}} alt='Email icon' /> <Link to='mailto:chelsiesjohnston@gmail.com'>chelsiesjohnston@gmail.com</Link></li>
            <li><span style={{ 'backgroundImage': `url(${List})`}} alt='Email icon' /> <a href='/files/Resume_ChelsieJohnston_2024.pdf'>résumé (PDF download)</a></li>
          </ul>
        </div>
        <aside className="contact__art">
          <Image src={png} webp={webp} dimensions={{'height': 680, 'width': 680}} alt='Chelsie and a dill plant.' />
        </aside>      
      </div>    
    </section>
  )
}