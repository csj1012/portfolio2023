import { useState, useEffect } from 'react'
// See https://www.joshwcomeau.com/snippets/react-hooks/use-prefers-reduced-motion/

//@todo: standardize return types and function names
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

export function systemDarkModeSetting() {
  let systemSetting
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    systemSetting = 'dark'
  } else {
    systemSetting = 'light'
  }
  return systemSetting
}