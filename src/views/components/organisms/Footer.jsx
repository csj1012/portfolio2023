import heart from '/assets/svg/heart.svg'

export default function Footer() {
  const Heart = <img src={heart} alt='' className='footer__heart'/>  
  return <p>&#169; <span>Chelsie Johnston, 2023-2024 &middot; Coded (and designed) with {Heart}.</span></p>
}