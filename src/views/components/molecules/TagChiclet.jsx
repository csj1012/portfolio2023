import { useNavigate } from 'react-router-dom'

function TagChiclet({ tag, prefix = '' }) {
  const navigate = useNavigate()
  
  function handleClick() {
    navigate(`/${prefix}tags/${tag}`)
  }

  return (
    <button onClick={handleClick}>
      {tag}
    </button>
  )
}

export default TagChiclet