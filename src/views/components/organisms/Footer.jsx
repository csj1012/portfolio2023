import heart from '/assets/svg/heart.svg'

export default function Footer() {
  const Heart = <img src={heart} alt='' className='w-[12px] fill-root/50 inline-block mb-[3px]'/>
  const year = new Date().getFullYear()
  return <div className="footer-wrapper  tracking-wide h-full flex font-sans text-xs align-center justify-center bg-hazelight text-root/75 border-t-2 border-haze">
    <p className='m-2  text-xs'>&#169; <span className='font-sans text-xs'>Chelsie Johnston,</span> {year}. <span className='font-sans text-xs'>Made with {Heart}.</span></p>
  </div>
}