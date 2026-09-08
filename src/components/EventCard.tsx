import { Link } from 'react-router-dom'
import type { Event } from '../types'
import { useLanguage } from '../i18n/LanguageContext'
import { pickText } from '../utils/localize'
import { formatEventDate, getEventStatus } from '../utils/date'
import { EventTypeBadge } from './EventTypeBadge'
import { LiveDot } from './LiveDot'
import styles from './EventCard.module.css'

export function EventCard({ event, onOpenShort }: { event: Event; onOpenShort?: (event: Event) => void }) {
  const { language, t } = useLanguage()
  const title = pickText(event.title, language)
  const status = getEventStatus(event.startDate, event.endDate)

  const content = (
    <>
      <div className={styles.imageWrap}>
        <img
          src={event.coverImage}
          alt={title}
          loading="lazy"
          className={styles.image}
        />
        {status === 'ongoing' && (
          <span className={styles.liveBadge}>
            <LiveDot label={t.hero.liveNow[language]} />
          </span>
        )}
      </div>
      <div className={styles.meta}>
        <span>{formatEventDate(event, language)}</span>
        <EventTypeBadge type={event.type} />
      </div>
      <h3 className={styles.title}>{title}</h3>
    </>
  )

  if (event.hasFullContent) {
    return (
      <Link to={`/events/${event.id}`} className={styles.card}>
        {content}
      </Link>
    )
  }

  return (
    <button type="button" className={styles.card} onClick={() => onOpenShort?.(event)}>
      {content}
    </button>
  )
}
