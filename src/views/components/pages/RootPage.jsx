import { Layout, Header, Nav, Main, Footer } from '@components/templates/Layout'
import MainMenu from '@components/organisms/MainMenu'
import Masthead from '@components/organisms/Masthead'
import { useLocation } from 'react-router-dom'

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
      { pathname !== '/' && (
        <Footer>
          <MainMenu />
        </Footer>
      )}
    </Layout>
  )
}
