/**
 * Плейсхолдер-обложка в фирменном стиле (чёрный фон, жёлтый текст) —
 * используется, пока для события нет реального фото.
 * TODO: заменить на реальные фото по мере поступления материалов.
 */
export function placeholderCover(title: string): string {
  const text = encodeURIComponent(title.slice(0, 60))
  return `https://placehold.co/800x600/1a1a1a/ffcc00?text=${text}&font=poppins`
}

export function placeholderAvatar(name: string): string {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
  return `https://placehold.co/400x400/1a1a1a/ffcc00?text=${initials}&font=poppins`
}
