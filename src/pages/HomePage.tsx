import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { EventCard } from '../components/EventCard'
import { EventModal } from '../components/EventModal'
import { EventSlider } from '../components/EventSlider'
import { SectionHeading } from '../components/SectionHeading'
import { StatsBlock } from '../components/StatsBlock'
import { PartnerStrip } from '../components/PartnerStrip'
import { Reveal } from '../components/Reveal'
import { events, fullEvents } from '../data/events'
import { partners } from '../data/partners'
import { useLanguage } from '../i18n/LanguageContext'
import type { Event } from '../types'
import styles from './HomePage.module.css'

export function HomePage() {
  const { language, t } = useLanguage()
  const [modalEvent, setModalEvent] = useState<Event | null>(null)

  const { primary, featuredPast } = useMemo(() => {
    // "Проекты этого года" — события, датированные текущим календарным
    // годом (сортировка по дате). Часть из них ещё не прошла, поэтому
    // фото может не быть — это ожидаемо для по-настоящему "этого года".
    const currentYear = new Date().getFullYear()
    const thisYear = events
      .filter((e) => new Date(e.startDate).getFullYear() === currentYear)
      .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())

    const primary: Event[] =
      thisYear.length > 0
        ? thisYear.slice(0, 6)
        : [...events].sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()).slice(0, 6)

    // "Самарканд" — только реальные фото из отчёта, не пересекается с primary.
    const primaryIds = new Set(primary.map((e) => e.id))
    const withRealPhoto = fullEvents.filter((e) => !e.coverImage.startsWith('https://placehold.co'))
    const featuredPast = withRealPhoto.filter((e) => !primaryIds.has(e.id)).slice(0, 8)

    return { primary, featuredPast }
  }, [])

  return (
    <div>
      <Hero />

      <Reveal>
        <section className={styles.aboutTeaser}>
          <div className="container">
            <p className={styles.aboutTeaserText}>{t.home.aboutTeaser[language]}</p>
            <Link to="/about" className={styles.viewAll}>
              {t.home.aboutLink[language]} →
            </Link>
          </div>
        </section>
      </Reveal>

      <section className={styles.section}>
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Art Station"
              title={t.home.thisYearTitle[language]}
              subtitle={t.home.thisYearSubtitle[language]}
            />
          </Reveal>
          <div className={styles.featuredGrid}>
            {primary.map((event, i) => (
              <Reveal key={event.id} delay={i * 90} className={styles.featuredItem}>
                <EventCard event={event} onOpenShort={setModalEvent} />
              </Reveal>
            ))}
          </div>
          <Link to="/events" className={styles.viewAll}>
            {t.home.viewAll[language]} →
          </Link>
        </div>
      </section>

      {featuredPast.length > 0 && (
        <Reveal>
          <section className={styles.section} style={{ background: 'var(--surface-alt)' }}>
            <div className="container">
              <SectionHeading title={t.home.samarkandTitle[language]} subtitle={t.home.samarkandSubtitle[language]} />
              <EventSlider events={featuredPast} />
            </div>
          </section>
        </Reveal>
      )}

      <Reveal>
        <StatsBlock />
      </Reveal>

      <Reveal>
        <section className={styles.section}>
          <div className="container">
            <SectionHeading title={t.home.partnersTitle[language]} />
            <PartnerStrip partners={partners} />
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className={styles.cta}>
          <div className={`container ${styles.ctaInner}`}>
            <h2 style={{ fontSize: 'var(--font-size-h2)' }}>{t.home.ctaTitle[language]}</h2>
            <p style={{ maxWidth: '50ch' }}>{t.home.ctaText[language]}</p>
            <Link to="/contact" className={styles.ctaButton}>
              {t.home.ctaButton[language]}
            </Link>
          </div>
        </section>
      </Reveal>

      {modalEvent && <EventModal event={modalEvent} onClose={() => setModalEvent(null)} />}
    </div>
  )
}
