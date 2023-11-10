import { Layout, Header, Nav, Main } from '@components/templates/Layout'
import MainMenu from '@components/organisms/MainMenu'
import { ScrollRestoration } from 'react-router-dom'
// import Intro from '@components/organisms/Intro'
// import { useLocation } from 'react-router-dom'

export default function RootPage({ outlet }) {
  // const { pathname } = useLocation()

  return (
    <Layout>
      <ScrollRestoration />
      <Header>
        <Nav>
          <MainMenu />
        </Nav>
      </Header>
      <Main>        
        { outlet }
      </Main>
      {/* { pathname !== '/' && (
        <Footer>
          <MainMenu />
        </Footer>
      )} */}
    </Layout>
  )
}
