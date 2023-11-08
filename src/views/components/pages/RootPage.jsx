import { Layout, Header, Nav, Main, Footer } from '@components/templates/Layout'
import MainMenu from '@components/organisms/MainMenu'
import { useLocation } from 'react-router-dom'
import Masthead from '@components/molecules/Masthead'

export default function RootPage({ outlet }) {
  const { pathname } = useLocation()

  return (
    <Layout>
      <Header>
        <Nav>
          <MainMenu />
        </Nav>
        <Masthead />       
      </Header>
      <Main>{ outlet }</Main>
      <div style={{ display: 'none' }}>
          <div className='bg-moss h-24 w-24'>test</div>
          <div className='bg-licorice h-24 w-24'>test</div>
          <div className='bg-blackbean h-24 w-24'>test</div>
          <div className='bg-floralwhite h-24 w-24'>test</div>
          <div className='bg-licorice h-24 w-24'>test</div>
          <div className='bg-tawny h-24 w-24'>test</div>
          <div className='bg-yellow h-24 w-24'>test</div>
          <div className='bg-citrine h-24 w-24'>test</div>
          <div className='bg-frenchgray h-24 w-24'>test</div>
        </div>
      { pathname !== '/' && (
        <Footer>
          <MainMenu />
        </Footer>
      )}
    </Layout>
  )
}
