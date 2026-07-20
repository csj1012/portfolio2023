import bgJade from '/assets/svg/noise.svg'
import bgHaze from '/assets/svg/noiseHaze.svg'
import bgJadeFallback from '/assets/images/nouveau-bg.webp'
import bgHazeFallback from '/assets/images/bg-noiseHaze.webp'

export default function ComputedBg(variant = 'jade') {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

  const modern = variant === 'haze' ? 
    `url(${bgHaze})` :
    `url(${bgJade})`

  const fallback = variant === 'haze' ?
    `url(${bgHazeFallback})` :
    `url(${bgJadeFallback})`

  return isSafari
    ? fallback
    : modern
}