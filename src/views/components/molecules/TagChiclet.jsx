import { useNavigate } from 'react-router-dom'
import { toTagSlug } from '@models/tagSlug'

function TagChiclet({ tag, isStatic = false }) {
  const navigate = useNavigate()

  if (isStatic) {
    return <span className="chiclet chiclet--static">{tag}</span>
  }

  function handleClick(event) {
    event.preventDefault()
    event.stopPropagation()
    navigate(`/tags/${toTagSlug(tag)}`)
  }

  return (
    <button type="button" className="chiclet" onClick={handleClick}>
      {tag}
    </button>
  )
}

export default TagChiclet
