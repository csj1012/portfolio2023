import bgJade from '/assets/svg/noise.svg'
import fgJade from '/assets/svg/noiseOverlay.svg'
import bgJadeFallback from '/assets/images/nouveau-bg.webp'
import bgHazeFallback from '/assets/images/bg-noiseHaze.webp'

export default function ComputedBg(variant = 'jade') {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

  const modern = variant === 'haze' ? 
    `url(${bgHazeFallback})` :
    `url(${fgJade}), url(${bgJade})`

  const fallback = variant === 'haze' ?
    `url(${bgHazeFallback})` :
    `url(${bgJadeFallback})`

  return isSafari
    ? fallback
    : modern
}