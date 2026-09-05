import { useMemo, useState } from 'react'
import { events } from '../data/events'
import { EventCard } from '../components/EventCard'
import { EventTimeline } from '../components/EventTimeline'
import { EventModal } from '../components/EventModal'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import { getEventStatus, type EventStatus } from '../utils/date'
import type { Event, EventType } from '../types'
import styles from './EventsPage.module.css'

const allTypes: EventType[] = [
  'exhibition',
  'lecture',
  'workshop',
  'concert',
  'residency',
  'performance',
  'theatre',
  'fair',
  'festival',
  'filmScreening',
  'networking',
  'photoExhibition',
  'digitalArchive',
  'internationalPartnership',
  'professionalDevelopment',
]

const statusOptions: (EventStatus | 'all')[] = ['all', 'ongoing', 'upcoming', 'past']

type ViewMode = 'grid' | 'timeline'

export function EventsPage() {
  const { language, t } = useLanguage()
  const [type, setType] = useState<EventType | 'all'>('all')
  const [status, setStatus] = useState<EventStatus | 'all'>('all')
  const [view, setView] = useState<ViewMode>('grid')
  const [modalEvent, setModalEvent] = useState<Event | null>(null)

  const filtered = useMemo(() => {
    return events
      .filter((e) => type === 'all' || e.type === type)
      .filter((e) => status === 'all' || getEventStatus(e.startDate, e.endDate) === status)
      .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
  }, [type, status])

  const statusLabel = (s: EventStatus | 'all') => {
    switch (s) {
      case 'all':
        return t.events.statusAll[language]
      case 'ongoing':
        return t.events.statusOngoing[language]
      case 'upcoming':
        return t.events.statusUpcoming[language]
      case 'past':
        return t.events.statusPast[language]
    }
  }

  return (
    <div>
      <Reveal>
        <div className={`container ${styles.header}`}>
          <SectionHeading eyebrow="Art Station" title={t.events.title[language]} subtitle={t.events.subtitle[language]} />

          <div className={styles.filters}>
            <div className={styles.filterGroup}>
              {statusOptions.map((s) => (
                <button
                  key={s}
                  className={`${styles.chip} ${status === s ? styles.chipActive : ''}`}
                  onClick={() => setStatus(s)}
                >
                  {statusLabel(s)}
                </button>
              ))}
            </div>

            <select
              className={styles.select}
              value={type}
              onChange={(e) => setType(e.target.value as EventType | 'all')}
            >
              <option value="all">{t.events.filterAll[language]}</option>
              {allTypes.map((tp) => (
                <option key={tp} value={tp}>
                  {t.eventType[tp][language]}
                </option>
              ))}
            </select>

            <div className={styles.filterGroup}>
              <button
                className={`${styles.chip} ${view === 'grid' ? styles.chipActive : ''}`}
                onClick={() => setView('grid')}
              >
                {t.events.viewGrid[language]}
              </button>
              <button
                className={`${styles.chip} ${view === 'timeline' ? styles.chipActive : ''}`}
                onClick={() => setView('timeline')}
              >
                {t.events.viewTimeline[language]}
              </button>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="container">
        {filtered.length === 0 ? (
          <Reveal>
            <p className={styles.empty}>{t.events.noResults[language]}</p>
          </Reveal>
        ) : view === 'grid' ? (
          <div className={styles.grid}>
            {filtered.map((event) => (
              <Reveal key={event.id}>
                <EventCard event={event} onOpenShort={setModalEvent} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div style={{ paddingBottom: 'var(--space-6)' }}>
            <EventTimeline events={filtered} onOpenShort={setModalEvent} />
          </div>
        )}
      </div>

      {modalEvent && <EventModal event={modalEvent} onClose={() => setModalEvent(null)} />}
    </div>
  )
}
