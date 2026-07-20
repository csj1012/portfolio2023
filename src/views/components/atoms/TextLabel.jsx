export const TextLabel = ({ children, as: Element = 'span' }) => {
  return (
    <Element className='text-label'>
      {children}
    </Element>
  )
}