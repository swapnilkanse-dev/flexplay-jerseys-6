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

function scoreQueryAgainstText(query: string, text: string): number {
  const normalizedQuery = normalizeSearchText(query)
  if (!normalizedQuery) return 0

  const normalizedText = normalizeSearchText(text)
  if (!normalizedText) return 0

  const queryTokens = normalizedQuery.split(/\s+/).filter(Boolean)
  const textTokens = normalizedText.split(/\s+/).filter(Boolean)
  let score = 0

  // Give a strong boost when the query matches the beginning of the first token.
  if (queryTokens.length > 0 && textTokens.length > 0) {
    const queryFirst = queryTokens[0]
    const textFirst = textTokens[0]
    if (textFirst === queryFirst) score += 80
    else if (textFirst.startsWith(queryFirst)) score += 60
  }

  for (const token of queryTokens) {
    for (let index = 0; index < textTokens.length; index += 1) {
      const textToken = textTokens[index]
      const positionWeight = Math.max(1, 10 - index)

      if (textToken === token) {
        score += 40 * positionWeight
        break
      }
      if (textToken.startsWith(token)) {
        score += 20 * positionWeight
        break
      }
      if (textToken.includes(token)) {
        score += 5 * positionWeight
        break
      }
    }
  }

  // Reward matches where the query tokens appear in the same order.
  let lastMatchIndex = -1
  for (const token of queryTokens) {
    const foundIndex = textTokens.findIndex((textToken, idx) => idx > lastMatchIndex && textToken.includes(token))
    if (foundIndex >= 0) {
      score += 10
      lastMatchIndex = foundIndex
    } else {
      break
    }
  }

  return score
}

export function getSearchSuggestionScore(query: string, jersey: { name?: string; country?: string; tags?: string[] } | any): number {
  return scoreQueryAgainstText(query, getSearchableText(jersey))
}

export function getSearchSuggestions(query: string, jerseys: Array<{ name: string; country?: string; tags?: string[] } | any>, limit = 8): string[] {
  const trimmedQuery = query?.trim() || ''
  if (!trimmedQuery) return []

  return jerseys
    .map(jersey => ({
      name: jersey.name ?? '',
      score: getSearchSuggestionScore(trimmedQuery, jersey),
    }))
    .filter(item => item.name && item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.name)
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
