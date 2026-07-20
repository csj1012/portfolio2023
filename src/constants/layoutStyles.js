export const LAYOUT_STYLES = ['centered', 'inset', 'full']
export const DEFAULT_LAYOUT_STYLE = 'centered'

export function layoutClassName(style = DEFAULT_LAYOUT_STYLE) {
  return `layout--${style}`
}
