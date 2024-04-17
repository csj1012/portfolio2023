import ComputedBg from '@components/atoms/ComputedBg'
import nouveauArtDummy from '/assets/images/nouveau-dummy-edited.png'

export default function RootPage({ outlet }) {
  return (
    <div className='layout-border' style={{ backgroundImage: ComputedBg('haze') }}>
      Chelsie Johnston — Work / Blog / Contact
      <div className='layout' style={{ backgroundImage: ComputedBg() }}>
        <div className='text-wrapper'>
        <div className='text2'>Hello! I'm</div>
        <div className='text1'>Chelsie</div>
        <div className='text2'>A design systems, Developer experience, and UI tooling expert.</div>
        <div class="divider"></div>
       <div className="items">
         <div className='item'>
          <span className="chiclets">Blog Post: </span>
          <p className="title">On Ten Years in the Web Dev Industry</p>
          {/* <p>I've been writing HTML, CSS, and JS since the year 2000 and working professionally as a dev for the past decade. I have 10+ years of experience. Please fucking hire me. Please. Christophe is a sexist ape. Fuck you, Christophe. ACCESSIBILTY.</p> */}
        </div>
       </div>
        </div>
      </div>
    </div>
  )
}
