import { Outlet } from 'react-router-dom'
import RootPage from '@components/pages/RootPage'

export default function Root() {
  return (
    <RootPage outlet={ <Outlet /> } />    
  )
}
