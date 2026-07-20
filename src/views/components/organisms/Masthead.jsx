import { useLayoutEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { Avatar } from '@components/atoms/Avatar'
import { TextLabel } from '@components/atoms/TextLabel'
import { useLayoutStyle } from '@views/hooks/useLayoutStyle'

export default function Masthead() {
  const layoutStyle = useLayoutStyle()
  const isFirstRender = useRef(true)
  const prevLayoutRef = useRef(layoutStyle)
  const [fadeInActive, setFadeInActive] = useState(false)

  const layoutChanged = !isFirstRender.current && layoutStyle !== prevLayoutRef.current

  useLayoutEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      prevLayoutRef.current = layoutStyle
      return
    }

    if (layoutStyle === prevLayoutRef.current) return

    prevLayoutRef.current = layoutStyle

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    setFadeInActive(true)
  }, [layoutStyle])

  const handleAnimationEnd = (event) => {
    if (event.animationName !== 'fadeIn') return
    setFadeInActive(false)
  }

  const contentsClassName = classNames(
    'masthead__contents',
    `masthead__contents--${layoutStyle}`,
    {
      'masthead__contents--fade-in': layoutChanged || fadeInActive,
    },
  )

  return (
    <div className={contentsClassName} onAnimationEnd={handleAnimationEnd}>
      <Avatar />
      <span className="masthead__text">
        <TextLabel>Design // Development // Design Systems</TextLabel>
        <h1>Chelsie Johnston</h1>
        <span className="masthead__intro__description">
          I <span className="masthead__intro__description__highlight">design & code</span> elegant, performant, and
          accessible solutions for the web.
        </span>
      </span>
    </div>
  )
}
