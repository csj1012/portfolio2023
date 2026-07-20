import { Layout, Header, Nav, Main, Footer, AuxiliaryMenu } from '@components/templates/Layout'
import Elevator from '@components/organisms/Elevator'
import TagsMenu from '@components/organisms/TagsMenu'
import Masthead from '@components/organisms/Masthead'
import FooterBar from '@components/organisms/Footer'
// import About from '@components/organisms/about'
// import Testimonial from '@components/organisms/testimonial'
// import Brands from '@components/organisms/brands'
import MainMenu from '@components/organisms/MainMenu'
import { ScrollRestoration } from 'react-router-dom'
import ComputedBg from '@components/atoms/ComputedBg'
import classNames from 'classnames'
import Divider from '@components/atoms/Divider'

export default function RootPage({ outlet }) {
  function isWindows() {
    return navigator.platform.indexOf('Win') > -1
  }

  const classes = classNames(isWindows() ? 'windows' : '', 'content')

  return (
    <Layout>
      <ScrollRestoration />
      <Header>
        <Nav>
          <MainMenu />
        </Nav>
        <Masthead />
        <Divider />
      </Header>
      <Main>
        <div
          className={classes}          
        >
          {outlet}
        </div>
        {/* <Testimonial />
        <About />
        <Brands /> */}
      </Main>
      <AuxiliaryMenu
        style={{
          backgroundImage: `linear-gradient(var(--colors-surface-invert-body-subtle), var(--colors-surface-invert-body-subtle)), ${ComputedBg(
            'jade',
          )}`,
        }}
      >
        <Elevator />
        <TagsMenu />
      </AuxiliaryMenu>
      <Footer>
        <FooterBar />
      </Footer>
    </Layout>
  )
}
