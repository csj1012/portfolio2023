import { Outlet } from 'react-router-dom'
import RootPage from '@components/pages/RootPage'
import { getTags } from '@controllers/tags'

export async function loader() {
  const tags = await getTags()
  return { tags }
}

export default function Root() {
  return (
    <RootPage outlet={ <Outlet /> } />    
  )
}
