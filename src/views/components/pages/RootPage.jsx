import { Layout, Header, Nav, Main, Footer } from '@components/templates/Layout'
import MainMenu from '@components/organisms/MainMenu'
import { useLocation } from 'react-router-dom'

export default function RootPage({ outlet }) {
  const { pathname } = useLocation()

  return (
    <Layout>
      <Header>
        <h1>Chelsie Johnston</h1>
      </Header>
      <Nav>
        <MainMenu />
      </Nav>
      <Main>{ outlet }</Main>
      { pathname !== '/' && (
        <Footer>
          <MainMenu />
        </Footer>
      )}
    </Layout>
  )
}
