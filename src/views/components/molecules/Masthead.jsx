import divider from '@assets/svg/divider.svg'
import Image from '@components/atoms/Image'
import MainMenu from '@components/organisms/MainMenu'
import { Nav } from '@components/templates/Layout'

export default function Masthead() {
  return (
    <div className="bg-licorice text-center pb-24">
      <div className="space-y-8 pt-24 lg:w-1/2 lg:mx-auto">
        <h1 className="text-wheat font-sans text-8xl">Chelsie Johnston</h1>
        <p className="text-wheat font-serif text-4xl">
          I’m a developer with a special passion for front end. I also dabble in design (and a bunch of other things!).
        </p>
        <p className="text-wheat font-serif text-4xl">
          I've worked mostly in the Education and NonProfit sectors and have worn several hats over the course of my
          professional career, from Design Lead to Software Engineer.
        </p>
      </div>
      <Image
        src={divider}
        className="mt-12 mx-auto sm:w-2/3 lg:w-1/3"
      />
    </div>
  )
}
