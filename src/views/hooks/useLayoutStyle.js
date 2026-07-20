import { useMatches } from 'react-router-dom'
import { DEFAULT_LAYOUT_STYLE } from '../../constants/layoutStyles'

export function useLayoutStyle() {
  const matches = useMatches()
  for (let i = matches.length - 1; i >= 0; i--) {
    const style = matches[i].handle?.layoutStyle
    if (style) return style
  }
  return DEFAULT_LAYOUT_STYLE
}
