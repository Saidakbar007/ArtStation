import type { Language, LocalizedText, PartialLocalizedText } from '../types'

/**
 * Возвращает текст на нужном языке; если перевода нет (частично
 * заполненный PartialLocalizedText у EventShort), откатывается на
 * английский, затем русский, затем узбекский — лишь бы не показывать
 * пустую строку.
 */
export function pickText(text: LocalizedText | PartialLocalizedText, lang: Language): string {
  return text[lang] ?? text.en ?? text.ru ?? text.uz ?? ''
}
