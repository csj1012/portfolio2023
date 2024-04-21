import Image from '@components/atoms/Image'
import png from '/assets/images/dill.png'
import webp from '/assets/images/dill.webp'

export default function About() {
  return (
    <div className="about">
      <div className="inset">
        {/* <h2>Hello</h2> */}
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </p>
          <p>
            When I'm not trying to get back into the industry I've been in for ten years, I'm spending time on stage,
            with my four cats, gardening, knitting, or sewing.
          </p>
        </div>
        <Image
          style={{ background: 'black' }}
          src={png}
          webp={webp}
          dimensions={{ height: 680, width: 680 }}
          alt="Chelsie and a dill plant."
        />
      </div>
    </div>
  )
}
