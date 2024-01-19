import { LayoutContext, useLayout } from '@views/LayoutContext'
import gradient from '/assets/svg/noiseHaze.svg'

export const Layout = ({ children }) => (
  <LayoutContext.Provider value={true}>
    {children}
  </LayoutContext.Provider>
)

const HeaderElement = ({ children }) => <header className='header'>{children}</header>
const NavElement = ({ children }) => <nav>{children}</nav>
const MainElement = ({ children }) => <main>{children}</main>
const FooterElement = ({ children }) => <footer className='footer' style={{backgroundImage: `url(${gradient})`}}>{children}</footer>

// HOC for wrapping each section of the layout in the LayoutContext.
// This is probably overkill for now.
const withLayout = (Component, name) => {
  return function WrappedComponent(props) {
    if (!useLayout()) console.error(`MISSING CONTEXT: ${name} must be inside a Layout!`)
    return <Component {...props} />
  }
}

const layoutSections = [
  { name: 'Header', component: withLayout(HeaderElement, 'Header') },
  { name: 'Nav', component: withLayout(NavElement, 'Nav') },
  { name: 'Main', component: withLayout(MainElement, 'Main') },
  { name: 'Footer', component: withLayout(FooterElement, 'Footer') }
]

// Export the sections as an object for use in Layout jsx.
export const { 
  Header, 
  Nav, 
  Main, 
  Footer 
} = layoutSections.reduce((acc, section) => {
  acc[section.name] = section.component
  return acc
}, {})
