import { useState, useEffect } from 'react'
// See https://www.joshwcomeau.com/snippets/react-hooks/use-prefers-reduced-motion/

const QUERY = '(prefers-reduced-motion: no-preference)'
const getInitialState = () => !window.matchMedia(QUERY).matches
export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(getInitialState)
  useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY)
    const listener = (event) => {
      setPrefersReducedMotion(!event.matches)
    }
    mediaQueryList.addEventListener('change', listener)
    return () => {
      mediaQueryList.removeEventListener('change', listener)
    }
  }, [])
  return prefersReducedMotion
}

export function isMobile() { 
  return window.matchMedia('(max-width: 768px)').matches 
}
