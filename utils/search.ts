export function normalizeSearchText(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

export function getSearchableText(jersey: { name?: string; country?: string; tags?: string[] } | any): string {
  return [jersey?.name, jersey?.country, ...(jersey?.tags ?? [])]
    .filter(Boolean)
    .join(' ')
}

export function matchesSearchQuery(query: string, jersey: { name?: string; country?: string; tags?: string[] } | any): boolean {
  const trimmedQuery = query?.trim() || ''
  if (!trimmedQuery) return true

  const normalizedQuery = normalizeSearchText(trimmedQuery)
  if (!normalizedQuery) return true

  const searchableText = normalizeSearchText(getSearchableText(jersey))
  const compactQuery = normalizedQuery.replace(/\s+/g, '')
  const compactSearchText = searchableText.replace(/\s+/g, '')

  if (!searchableText) return false

  if (searchableText.includes(normalizedQuery)) return true
  if (compactSearchText.includes(compactQuery)) return true

  const queryTokens = normalizedQuery.split(/\s+/).filter(Boolean)
  const haystackTokens = searchableText.split(/\s+/).filter(Boolean)

  if (queryTokens.length > 1) {
    const tokenMatches = queryTokens.filter(token => haystackTokens.includes(token)).length
    if (tokenMatches === queryTokens.length) return true
  }

  return false
}
