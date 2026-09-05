import type { LocalizedText } from '../types'

// Источник: Key Indicators, ART_STATION_AnnualReport24-25 (EN).pdf, стр. 15.
// 'years' и 'visitors' обновлены вручную (актуальнее отчёта: 3 года
// работы и 25 000 посетителей вместо исходных 2 / 15 000).
export interface Stat {
  id: string
  value: string
  label: LocalizedText
}

export const stats: Stat[] = [
  { id: 'years', value: '3', label: { ru: 'года интенсивной работы', uz: 'yil jadal ish', en: 'years of intensive work' } },
  { id: 'events', value: '71', label: { ru: 'мероприятие', uz: 'tadbir', en: 'events' } },
  { id: 'countries', value: '30', label: { ru: 'стран-участниц', uz: 'ishtirokchi mamlakat', en: 'countries' } },
  { id: 'spaces', value: '2', label: { ru: 'многофункциональных пространства', uz: "ko'p funksiyali maydon", en: 'multifunctional spaces' } },
  { id: 'team', value: '15', label: { ru: 'членов команды', uz: 'jamoa a\'zosi', en: 'team members' } },
  { id: 'area', value: '3300 м²', label: { ru: 'выставочной площади', uz: "ko'rgazma maydoni", en: 'dedicated to art, culture, and education' } },
  { id: 'visitors', value: '25 000', label: { ru: 'посетителей', uz: 'tashrif buyuruvchi', en: 'visitors' } },
  { id: 'partners', value: '10', label: { ru: 'международных партнёров', uz: 'xalqaro hamkor', en: 'international partners' } },
]
