import Menu from '@components/molecules/Menu'

export default function MainMenu() {
  const items = [
    { text: 'Home', href: '/' },
    { text: 'Projects', href: '/projects' },
    { text: 'Contact', href: '/contact' },
  ]
  const ItemComponent = ( {text } ) => {
    return (
      <span className="ml-2 mr-2 p-10 pt-5 pb-5 rounded-sm bg-yellow hover:bg-tawny font-subheading text-2xl">{ text }</span>
    )
  }
  return <Menu 
    className='flex justify-center pt-24' 
    items={items} 
    title={'Main Menu'} 
    showTitle={ false } 
    ItemComponent={ ItemComponent }
  />
}
