const HASHTAG_RE = /#[^\s#]+/gu
const TITLE_MAX_LENGTH = 100

/**
 * Построчно убирает хэштеги из подписи и схлопывает пустые строки:
 * строка, целиком состоявшая из хэштегов, исчезает вместе с собой (а не
 * превращается в пустую строку) — иначе в конце почти любой подписи из
 * Instagram остаётся пустой "хвост" от блока хэштегов.
 */
function cleanCaptionLines(caption: string): string[] {
  const lines: string[] = []

  for (const raw of caption.split('\n')) {
    const wasBlank = raw.trim() === ''
    if (wasBlank) {
      lines.push('')
      continue
    }
    const cleaned = raw.replace(HASHTAG_RE, '').replace(/[ \t]{2,}/g, ' ').trim()
    if (cleaned !== '') lines.push(cleaned)
  }

  const collapsed: string[] = []
  for (const line of lines) {
    if (line === '' && (collapsed.length === 0 || collapsed[collapsed.length - 1] === '')) continue
    collapsed.push(line)
  }
  while (collapsed.length && collapsed[0] === '') collapsed.shift()
  while (collapsed.length && collapsed[collapsed.length - 1] === '') collapsed.pop()

  return collapsed
}

function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  const cut = text.slice(0, maxLength)
  const lastSpace = cut.lastIndexOf(' ')
  return `${lastSpace > 40 ? cut.slice(0, lastSpace) : cut}…`
}

/**
 * Разбирает подпись Instagram-поста: заголовок — первая непустая строка
 * (без хэштегов, до ~100 символов), анонс — сжатый остаток текста для
 * карточки списка, текст — остаток с сохранёнными абзацами/переносами
 * строк для страницы новости. Хэштеги вычищены из всех трёх частей.
 */
export function parseCaption(caption: string): { title: string; excerpt: string; body: string } {
  const lines = cleanCaptionLines(caption)
  const titleIndex = lines.findIndex((line) => line !== '')

  if (titleIndex === -1) return { title: '', excerpt: '', body: '' }

  const title = truncate(lines[titleIndex], TITLE_MAX_LENGTH)
  const rest = lines.slice(titleIndex + 1)

  return {
    title,
    excerpt: rest.filter((line) => line !== '').join(' '),
    body: rest.join('\n').trim(),
  }
}
