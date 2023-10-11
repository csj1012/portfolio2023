import { Outlet } from 'react-router-dom'
import RootPage from '@components/pages/RootPage'

export default function Root() {
  return (
    <div style={{ border: 'solid 1px blue' }}>
      <RootPage outlet={ <Outlet /> } />
    </div>
  )
}
