import heart from '/assets/svg/heart.svg'

export default function Footer() {
  const Heart = <img src={heart} alt='heart icon' width='11' height='11' className='footer__heart'/>  
  return <p>&#169; <span>Chelsie Johnston, 2023-2024 &middot; Designed and coded with {Heart}.</span></p>
}