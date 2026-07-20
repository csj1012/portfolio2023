/**
 * Normalize a tech/topic label into a case-insensitive URL slug.
 * Collapses "Javascript" / "JavaScript" and similar variants.
 */
export function toTagSlug(label) {
  if (!label) return ''
  return String(label)
    .toLowerCase()
    .trim()
    .replace(/[/\\]/g, '-')
    .replace(/[:.]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9+-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

/** Prefer the label with more capital letters (e.g. JavaScript over Javascript). */
export function preferTagLabel(a, b) {
  const score = (s) => (String(s).match(/[A-Z]/g) || []).length
  return score(b) > score(a) ? b : a
}
