import ReactPlayer from 'react-player'

export default function Video({ src, ...props } ) {
  return (
    <div className='player-wrapper'>
      <ReactPlayer
        className='react-player'
        url={src}
        playing={true}
        muted={true}
        width='100%'
        height='100%'
      />
    </div>
  )
}