import { Avatar } from '@components/atoms/Avatar'
import { TextLabel } from '@components/atoms/TextLabel'

export default function Masthead() {
  return (
    <>
      <div className="masthead__contents">
        <Avatar />
        <span className="masthead__text">
          <TextLabel>Design // Development // Design Systems</TextLabel>
          <h1>Chelsie Johnston</h1>
          <span className="masthead__intro__description">
            I <span className="masthead__intro__description__highlight">design & code</span> elegant, performant, and
            accessible solutions for the web.
          </span>
        </span>
      </div>
    </>
  )
}
