import ReactPlayer from 'react-player'
import classNames from 'classnames'

export default function Video({ src, ...props } ) {
  const { className } = props
  const classes = className ? classNames('react-player', className) : 'react-player'
  return (
    <div className='player-wrapper'>
      <ReactPlayer
        className={classes}
        url={src}
        playing={true}
        muted={true}
        width='100%'
        height='100%'        
      />
    </div>
  )
}