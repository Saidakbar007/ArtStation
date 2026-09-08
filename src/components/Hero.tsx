import { useState } from 'react'
import { Link } from 'react-router-dom'
import { events } from '../data/events'
import { stats } from '../data/stats'
import { useLanguage } from '../i18n/LanguageContext'
import { pickText } from '../utils/localize'
import { formatDateRange, pickFeaturedEvent } from '../utils/date'
import { DuotoneFilter } from './DuotoneFilter'
import { EventModal } from './EventModal'
import type { Event } from '../types'
import styles from './Hero.module.css'

// Три показателя из Key Indicators (см. data/stats.ts) для краткой
// строки статистики под wordmark.
const heroStatIds = ['events', 'countries', 'visitors'] as const

// Разворот "Portfolio" (стр. 5 годового отчёта) — те же 6 фото, в том же
// порядке и с теми же пропорциями высоты, что и в книге, сложены в
// вертикальный стек вместо одного фото события.
const portfolioPhotos = [
  { src: 'images/hero/hero-exhibition.webp', ratio: 237 },
  { src: 'images/hero/hero-residencies.webp', ratio: 338 },
  { src: 'images/hero/hero-education.webp', ratio: 171 },
  { src: 'images/hero/hero-art-interventions.webp', ratio: 172 },
  { src: 'images/hero/hero-research.webp', ratio: 171 },
  { src: 'images/hero/hero-spaces.webp', ratio: 216 },
]

export function Hero() {
  const { language, t } = useLanguage()
  const [modalEvent, setModalEvent] = useState<Event | null>(null)
  // Фото Hero — фиксированный разворот книги (portfolioPhotos ниже), не
  // зависит от события, поэтому в кандидаты на подпись берём вообще все
  // события, включая короткие (EventShort) без отдельной страницы.
  const featured = pickFeaturedEvent(events)

  const statusLabel = featured
    ? featured.status === 'ongoing'
      ? t.hero.liveNow[language]
      : featured.status === 'upcoming'
        ? t.hero.upcoming[language]
        : t.hero.recent[language]
    : null

  const statLabelById = {
    events: t.hero.statsEvents,
    countries: t.hero.statsCountries,
    visitors: t.hero.statsVisitors,
  }
  const heroStats = heroStatIds
    .map((id) => stats.find((s) => s.id === id))
    .filter((s): s is (typeof stats)[number] => Boolean(s))

  return (
    <section className={styles.hero}>
      <DuotoneFilter />

      <div className={styles.wordmarkZone}>
        <div className={styles.wordmarkGroup}>
          <p className={styles.kicker}>{t.hero.kicker[language]}</p>
          <h1 className={styles.wordmark}>Art Station</h1>
          <div className={styles.statsLine}>
            {heroStats.map((stat, i) => (
              <span key={stat.id} className={styles.statsItem}>
                {i > 0 && <span className={styles.statsDivider} aria-hidden="true" />}
                <span className={styles.statsValue}>{stat.value}</span>{' '}
                {statLabelById[stat.id as keyof typeof statLabelById][language]}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.scrollHint}>
          <span>{t.hero.scrollHint[language]}</span>
          <span className={styles.scrollArrow} aria-hidden="true">
            ↓
          </span>
        </div>
      </div>

      {featured && (
        <div className={styles.photoZone}>
          {/* Настоящий дуотон через SVG feComponentTransfer (см. DuotoneFilter),
              применяется прямо к оригинальному цветному фото. */}
          <div className={styles.photoStack}>
            {portfolioPhotos.map((photo) => (
              <img
                key={photo.src}
                src={photo.src}
                alt=""
                className={styles.photoImg}
                style={{ flex: `${photo.ratio} 1 0` }}
              />
            ))}
          </div>
          <div className={styles.fadeEdge} />
          <div className={styles.patternCorner}>
            <img src="images/hero/cover-pattern.webp" alt="" />
          </div>
        </div>
      )}

      {featured && (
        <div className={styles.caption}>
          <span className={styles.captionStatus}>{statusLabel}</span>
          <span className={styles.captionTitle}>{pickText(featured.event.title, language)}</span>
          <span className={styles.captionDate}>
            {formatDateRange(featured.event.startDate, featured.event.endDate, language)}
          </span>
          {featured.event.hasFullContent ? (
            <Link to={`/events/${featured.event.id}`} className={styles.cta}>
              {t.hero.viewDetails[language]}
            </Link>
          ) : (
            <button type="button" className={styles.cta} onClick={() => setModalEvent(featured.event)}>
              {t.hero.viewDetails[language]}
            </button>
          )}
        </div>
      )}

      {modalEvent && <EventModal event={modalEvent} onClose={() => setModalEvent(null)} />}
    </section>
  )
}
