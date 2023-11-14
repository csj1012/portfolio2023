import heart from '/assets/svg/heart.svg'

export default function Footer() {
  const Heart = <img src={heart} alt='' className='footer__heart'/>
  const year = new Date().getFullYear()
  return <div className="footer-wrapper">
    <p className='m-2 text-xs'>&#169; <span className='font-sans text-xs'>Chelsie Johnston, {year}. Made with {Heart}.</span></p>
  </div>
}