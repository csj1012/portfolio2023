import { Layout, Header, Nav, Main, Footer } from '@components/templates/Layout'
import Masthead from '@components/organisms/Masthead'
import FooterBar from '@components/organisms/Footer'
import About from '@components/organisms/about'
import Testimonial from '@components/organisms/testimonial'
import Brands from '@components/organisms/brands'
import MainMenu from '@components/organisms/MainMenu'
import { ScrollRestoration } from 'react-router-dom'
import ComputedBg from '@components/atoms/ComputedBg'

export default function RootPage({ outlet }) {
  return (
    <Layout>
      <ScrollRestoration />
      <Nav>
        <MainMenu />
      </Nav>
      <Main>
        <div className="content" style={{ backgroundImage: ComputedBg('haze') }}>
          <Header>
            <Masthead />
          </Header>
          { outlet }
        </div>
        <Testimonial />
        <About />
        <Brands />
      </Main>
      <Footer>
        <FooterBar />
      </Footer>
    </Layout>
  )
}
