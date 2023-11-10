import { Layout, Header, Nav, Main } from '@components/templates/Layout'
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
    </Layout>
  )
}
