import { useParams } from 'react-router-dom'

function TaggedContent() {
  const { tag } = useParams()
  
  return (
    <div>
      <h1>Tag: {tag}</h1>
    </div>
  )
}

export default TaggedContent
