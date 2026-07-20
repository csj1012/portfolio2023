import TaggedContent from '@components/organisms/TaggedContent'
import { getItemsByTag } from '@controllers/tags'
import { useLoaderData } from 'react-router-dom'

export async function loader({ params }) {
  return getItemsByTag(params.tag)
}

export default function TaggedContentRoute() {
  const data = useLoaderData()
  return <TaggedContent {...data} />
}
