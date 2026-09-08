import { Link, Navigate, useParams } from 'react-router-dom'
import { getEventById } from '../data/events'
import { partners } from '../data/partners'
import { artists } from '../data/artists'
import { useLanguage } from '../i18n/LanguageContext'
import { pickText } from '../utils/localize'
import { formatEventDate } from '../utils/date'
import { EventTypeBadge } from '../components/EventTypeBadge'
import { Reveal } from '../components/Reveal'
import styles from './EventDetailPage.module.css'

export function EventDetailPage() {
  const { id } = useParams<{ id: string }>()
  const { language, t } = useLanguage()
  const event = id ? getEventById(id) : undefined

  if (!event || !event.hasFullContent) {
    return <Navigate to="/events" replace />
  }

  const title = pickText(event.title, language)
  const description = pickText(event.description, language)
  const isMachineTranslated = event.machineTranslatedLangs?.includes(language)

  const eventArtists = artists.filter((a) => event.artistIds.includes(a.id))
  const eventPartners = partners.filter((p) => event.partnerIds.includes(p.id))

  return (
    <div className="container">
      <Link to="/events" className={styles.back}>
        ← {t.eventDetail.back[language]}
      </Link>

      <Reveal>
      <div className={styles.layout}>
        <div className={styles.imageCol}>
          <img src={event.coverImage} alt={title} loading="eager" />
          {event.gallery.length > 0 && (
            <div className={styles.gallery}>
              {event.gallery.map((src) => (
                <img key={src} src={src} alt="" loading="lazy" />
              ))}
            </div>
          )}
        </div>

        <div>
          <div className={styles.meta}>
            <span>{formatEventDate(event, language)}</span>
            <EventTypeBadge type={event.type} />
          </div>

          <h1 className={styles.title}>{title}</h1>

          {isMachineTranslated && (
            <div>
              <span className={styles.mtBadge} title={t.eventDetail.machineTranslated[language]}>
                {t.eventDetail.machineTranslated[language]}
              </span>
            </div>
          )}

          {(eventArtists.length > 0 || event.place) && (
            <div className={styles.credits}>
              {event.place && (
                <span>
                  {t.eventDetail.place[language]}: {event.place}
                </span>
              )}
              {eventArtists.length > 0 && (
                <span>{eventArtists.map((a) => pickText(a.name, language)).join(', ')}</span>
              )}
            </div>
          )}

          <div className={styles.description}>
            {description.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {eventPartners.length > 0 && (
            <div className={styles.partners}>
              <strong>{t.eventDetail.partners[language]}</strong>
              <ul className={styles.partnerList}>
                {eventPartners.map((p) => (
                  <li key={p.id}>
                    {p.url ? (
                      <a href={p.url} target="_blank" rel="noreferrer">
                        {p.name}
                      </a>
                    ) : (
                      p.name
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      </Reveal>
    </div>
  )
}
