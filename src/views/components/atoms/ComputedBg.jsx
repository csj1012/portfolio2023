import bgImage from '/assets/svg/noise.svg'
import fgImage from '/assets/svg/noiseOverlay.svg'
import bgImageFallback from '/assets/images/nouveau-bg.webp'

export default function ComputedBg() {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

  return isSafari
    ? `url(${bgImageFallback})`
    : `url(${fgImage}), url(${bgImage})`
}