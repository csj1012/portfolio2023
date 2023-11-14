import ReactPlayer from 'react-player'
import classNames from 'classnames'
import usePrefersReducedMotion from '@components/util/prefersReducedMotion'
import { useState } from 'react'
import Pause from '/assets/svg/pause.svg'
import Play from '/assets/svg/play.svg'

const PauseButton = () => <img alt='Pause video' className='w-2/3' src={Pause} />
const PlayButton = () => <img alt='Play video' className='w-2/3' src={Play} />

export default function Video({ src, ...props } ) {
  const [playing, setPlaying] = useState(usePrefersReducedMotion() ? false : true)
  const { className } = props
  const classes = className ? classNames('react-player', className) : 'react-player'

  const handleClick = () => {
    setPlaying(playing ? false : true)
  }  

  function getVideoUrl(filePath) {
    const basePath = 'assets/'
    const name = filePath.includes(basePath) ? filePath.split(basePath)[1] : ''
    const url = new URL(`${name}`, import.meta.url).href
    return url
  }

  const updatedSrc = getVideoUrl(src)

  return (
    <div className='player-wrapper relative'>
      <ReactPlayer
        className={classes}
        url={updatedSrc}        
        playing={playing}
        muted={true}
        width='100%'
        height='100%' 
        loop={true}
      />
      <button className='video__control' onClick={handleClick}>
        <span className='video__buttons'>{playing ? <PauseButton /> : <PlayButton />}</span>
      </button>
    </div>
  )
}