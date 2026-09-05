import { Link } from 'react-router-dom'
import type { Event } from '../types'
import { useLanguage } from '../i18n/LanguageContext'
import { pickText } from '../utils/localize'
import { formatDateRange } from '../utils/date'
import { Reveal } from './Reveal'
import styles from './EventTimeline.module.css'

export function EventTimeline({
  events,
  onOpenShort,
}: {
  events: Event[]
  onOpenShort: (event: Event) => void
}) {
  const { language, t } = useLanguage()

  const groups = new Map<string, Event[]>()
  for (const event of events) {
    const year = event.startDate.slice(0, 4)
    if (!groups.has(year)) groups.set(year, [])
    groups.get(year)!.push(event)
  }

  return (
    <div className={styles.timeline}>
      {[...groups.entries()].map(([year, yearEvents]) => (
        <div key={year} className={styles.yearGroup}>
          <h3 className={styles.yearHeading}>{year}</h3>

          {yearEvents.map((event) => {
            const content = (
              <>
                <span className={styles.thumb}>
                  <img src={event.coverImage} alt="" loading="lazy" />
                </span>
                <span className={styles.body}>
                  <span className={styles.date}>{formatDateRange(event.startDate, event.endDate, language)}</span>
                  <span className={styles.title}>{pickText(event.title, language)}</span>
                </span>
                <span className={styles.typeBadge}>{t.eventType[event.type][language]}</span>
              </>
            )

            return (
              <Reveal key={event.id}>
                {event.hasFullContent ? (
                  <Link to={`/events/${event.id}`} className={styles.item}>
                    {content}
                  </Link>
                ) : (
                  <button type="button" className={styles.item} onClick={() => onOpenShort(event)}>
                    {content}
                  </button>
                )}
              </Reveal>
            )
          })}
        </div>
      ))}
    </div>
  )
}
