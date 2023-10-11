import Menu from '@components/molecules/Menu'

export default function MainMenu() {
  const items = [
    { text: 'Home', href: '/' },
    { text: 'Projects', href: '/projects' },
    { text: 'Contact', href: '/contact' },
  ]
  return <Menu items={items} title={'Main Menu'} />
}
