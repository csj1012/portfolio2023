import { Layout, Header, Nav, Main, Footer } from '@components/templates/Layout'
import FooterBar from '@components/organisms/Footer'
import MainMenu from '@components/organisms/MainMenu'
import { ScrollRestoration } from 'react-router-dom'

export default function RootPage({ outlet }) {
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
      <Footer>
        <FooterBar />
      </Footer>
    </Layout>
  )
}
