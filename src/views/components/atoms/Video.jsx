import ReactPlayer from 'react-player'
import classNames from 'classnames'
import usePrefersReducedMotion from '@components/util/prefersReducedMotion'

export default function Video({ src, ...props } ) {
  console.log(usePrefersReducedMotion())
  const { className } = props
  const classes = className ? classNames('react-player', className) : 'react-player'
  return (
    <div className='player-wrapper'>
      <ReactPlayer
        className={classes}
        url={src}
        playing={usePrefersReducedMotion() ? false : true}
        muted={true}
        width='100%'
        height='100%'        
      />
    </div>
  )
}