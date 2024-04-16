import bgImage from '/assets/images/nouveau-bg.png'

export default function RootPage({ outlet }) {
  return (
    <div className='layout' style={{backgroundImage: `url(${bgImage})`}}>
      <div className='text1'>Chelsie Johnston</div>
    </div>
  )
}
