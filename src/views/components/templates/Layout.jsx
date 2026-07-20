import { LayoutContext, useLayout } from '@views/contexts/LayoutContext'
import classNames from 'classnames'
import { layoutClassName } from '../../../constants/layoutStyles'
import { useLayoutStyle } from '@views/hooks/useLayoutStyle'
import ComputedBg from '@components/atoms/ComputedBg'

export const Layout = ({ children }) => {
  const layoutStyle = useLayoutStyle()
  const classes = classNames('ui-wrapper', layoutClassName(layoutStyle))

  return (
    <LayoutContext.Provider value={true}>
      <div className={classes} style={{ backgroundImage: ComputedBg('haze') }}>
        {children}
      </div>
    </LayoutContext.Provider>
  )
}

const NavElement = ({ children }) => <nav>{children}</nav>
const HeaderElement = ({ children }) => <header className='masthead'>{children}</header>
const MainElement = ({ children }) => <main>{children}</main>
const AuxiliaryMenuElement = ({ children, style }) => <aside className='auxiliary-menu' style={style}>{children}</aside>
const FooterElement = ({ children }) => <footer className='footer'>{children}</footer>

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
  { name: 'AuxiliaryMenu', component: withLayout(AuxiliaryMenuElement, 'AuxiliaryMenu') },
  { name: 'Footer', component: withLayout(FooterElement, 'Footer') }
]

// Export the sections as an object for use in Layout jsx.
export const { 
  Header, 
  Nav, 
  Main, 
  AuxiliaryMenu,
  Footer 
} = layoutSections.reduce((acc, section) => {
  acc[section.name] = section.component
  return acc
}, {})
