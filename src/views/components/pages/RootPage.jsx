import { Layout, Header, Nav, Main, Footer } from '@components/templates/Layout'
import MainMenu from '@components/organisms/MainMenu'
import Intro from '@components/organisms/Intro'
import { useLocation } from 'react-router-dom'

export default function RootPage({ outlet }) {
  const { pathname } = useLocation()

  return (
    <Layout>
      <Header>
        <Nav>
          <MainMenu />
        </Nav>
      </Header>
      <Main>
        <Intro />  
        { outlet }
      </Main>
      { pathname !== '/' && (
        <Footer>
          <MainMenu />
        </Footer>
      )}
    </Layout>
  )
}
