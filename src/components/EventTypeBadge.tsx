import type { EventType } from '../types'
import { useLanguage } from '../i18n/LanguageContext'

export function EventTypeBadge({ type, className }: { type: EventType; className?: string }) {
  const { language, t } = useLanguage()
  return <span className={className}>{t.eventType[type][language]}</span>
}
