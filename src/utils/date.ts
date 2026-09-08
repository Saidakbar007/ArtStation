import type { Language, PartialLocalizedText } from '../types'
import { pickText } from './localize'

export type EventStatus = 'upcoming' | 'ongoing' | 'past'

const localeMap: Record<Language, string> = {
  ru: 'ru-RU',
  uz: 'uz-Latn-UZ',
  en: 'en-GB',
}

export function getEventStatus(startDate: string, endDate: string | undefined, now: Date = new Date()): EventStatus {
  const start = new Date(startDate)
  const end = endDate ? new Date(endDate) : start
  // событие идёт весь день окончания включительно
  end.setHours(23, 59, 59, 999)
  if (now < start) return 'upcoming'
  if (now > end) return 'past'
  return 'ongoing'
}

export function formatDateRange(startDate: string, endDate: string | undefined, lang: Language): string {
  const locale = localeMap[lang]
  const start = new Date(startDate)
  const end = endDate ? new Date(endDate) : undefined

  const dayMonth: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' }
  const dayMonthYear: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' }

  if (!end || start.getTime() === end.getTime()) {
    return new Intl.DateTimeFormat(locale, dayMonthYear).format(start)
  }

  const sameYear = start.getFullYear() === end.getFullYear()
  const sameMonth = sameYear && start.getMonth() === end.getMonth()

  if (sameMonth) {
    const startStr = new Intl.DateTimeFormat(locale, { day: 'numeric' }).format(start)
    const endStr = new Intl.DateTimeFormat(locale, dayMonthYear).format(end)
    return `${startStr}–${endStr}`
  }

  if (sameYear) {
    const startStr = new Intl.DateTimeFormat(locale, dayMonth).format(start)
    const endStr = new Intl.DateTimeFormat(locale, dayMonthYear).format(end)
    return `${startStr} – ${endStr}`
  }

  const startStr = new Intl.DateTimeFormat(locale, dayMonthYear).format(start)
  const endStr = new Intl.DateTimeFormat(locale, dayMonthYear).format(end)
  return `${startStr} – ${endStr}`
}

/**
 * Дата события для карточек: либо явная метка dateLabel ("Скоро"), либо
 * форматированный диапазон startDate–endDate.
 */
export function formatEventDate(
  event: { startDate: string; endDate?: string; dateLabel?: PartialLocalizedText },
  lang: Language,
): string {
  if (event.dateLabel) return pickText(event.dateLabel, lang)
  return formatDateRange(event.startDate, event.endDate, lang)
}

/** Ближайшее по времени событие: идущее сейчас > ближайшее будущее > самое недавнее прошлое. */
export function pickFeaturedEvent<T extends { startDate: string; endDate?: string }>(
  events: T[],
  now: Date = new Date(),
): { event: T; status: EventStatus } | null {
  if (events.length === 0) return null

  const withStatus = events.map((event) => ({ event, status: getEventStatus(event.startDate, event.endDate, now) }))

  const ongoing = withStatus.filter((e) => e.status === 'ongoing')
  if (ongoing.length > 0) {
    ongoing.sort((a, b) => new Date(a.event.startDate).getTime() - new Date(b.event.startDate).getTime())
    return ongoing[0]
  }

  const upcoming = withStatus.filter((e) => e.status === 'upcoming')
  if (upcoming.length > 0) {
    upcoming.sort((a, b) => new Date(a.event.startDate).getTime() - new Date(b.event.startDate).getTime())
    return upcoming[0]
  }

  const past = withStatus.filter((e) => e.status === 'past')
  if (past.length > 0) {
    // "Самое недавнее прошлое" — по дате завершения, а не начала: иначе
    // однодневное событие, начавшееся позже, обходит длящуюся неделями
    // выставку, которая на самом деле закончилась позже него.
    const effectiveEnd = (e: T) => new Date(e.endDate ?? e.startDate).getTime()
    past.sort((a, b) => effectiveEnd(b.event) - effectiveEnd(a.event))
    return past[0]
  }

  return null
}
