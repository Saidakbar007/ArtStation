import type { CSSProperties } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import {
  audience,
  audienceTitle,
  foreword,
  importantAnnouncement,
  mission,
  portfolio,
  strategicGoals,
  survey,
} from '../data/about'
import { team } from '../data/team'
import styles from './AboutPage.module.css'

// Реальные цвета цветовой кодировки разделов программы из отчёта
// (см. --color-section-* в tokens.css) — используются циклически для
// карточек аудитории, чтобы "красочность" была на бренде, а не случайной.
const audienceColors = [
  'var(--color-section-education)',
  'var(--color-section-exhibitions)',
  'var(--color-section-residencies)',
  'var(--color-section-partnership)',
]

export function AboutPage() {
  const { language, t } = useLanguage()

  return (
    <div>
      <Reveal>
        <div className="container">
          <div className={styles.hero}>
            <SectionHeading eyebrow="Art Station" title={t.about.title[language]} />
            <div className={styles.splitRow}>
              <p className={styles.heroText}>{foreword.intro[language]}</p>
              <img
                src="images/about/inverted-visions-team.webp"
                alt=""
                loading="lazy"
                className={styles.splitPhoto}
              />
            </div>
          </div>

          <div className={styles.quotes}>
            <blockquote className={styles.quote}>
              <img src={foreword.directorPhoto} alt={foreword.directorName} loading="lazy" className={styles.quotePhoto} />
              <div className={styles.quoteBody}>
                <p className={styles.quoteTextLine}>«{foreword.directorQuote[language]}»</p>
                <span className={styles.quoteAuthor}>{foreword.directorName}</span>
              </div>
            </blockquote>
            <blockquote className={styles.quote}>
              <img src={foreword.ministerPhoto} alt={foreword.ministerName} loading="lazy" className={styles.quotePhoto} />
              <div className={styles.quoteBody}>
                <p className={styles.quoteTextLine}>«{foreword.ministerQuote[language]}»</p>
                <span className={styles.quoteAuthor}>{foreword.ministerName}</span>
              </div>
            </blockquote>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className="container">
            <div className={styles.missionHeadingShift}>
              <SectionHeading title={t.about.missionTitle[language]} />
            </div>
            <div className={styles.missionRow}>
              <div>
                <p className={styles.heroText}>{mission[language]}</p>
                <div className={styles.goals}>
                  {strategicGoals.items.map((item) => (
                    <span key={item.en} className={styles.goal}>
                      {item[language]}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.missionPhotos}>
                <img src="images/about/research-program-sketchbook.webp" alt="" loading="lazy" />
                <img src="images/about/research-program-tablet.webp" alt="" loading="lazy" />
                <img src="images/about/research-program-map.webp" alt="" loading="lazy" />
                <img src="images/about/research-program-studio.webp" alt="" loading="lazy" />
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className={styles.section}>
          <div className="container">
            <SectionHeading title={t.about.portfolioTitle[language]} />
            <div className={styles.portfolioGrid}>
              {portfolio.map((item) => (
                <div key={item.title.en} className={styles.portfolioCard}>
                  <div className={styles.portfolioCardTitle}>{item.title[language]}</div>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>{item.text[language]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className="container">
            <SectionHeading title={audienceTitle[language]} />
            <div className={styles.audienceGrid}>
              {audience.map((item, i) => (
                <Reveal key={item.en} delay={i * 80}>
                  <div
                    className={styles.audienceItem}
                    style={{ '--accent': audienceColors[i % audienceColors.length] } as CSSProperties}
                  >
                    <span className={styles.audienceIndex}>{String(i + 1).padStart(2, '0')}</span>
                    <p className={styles.audienceText}>{item[language]}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className={styles.section}>
          <div className="container">
            <SectionHeading title={survey.title[language]} />
            <div className={`${styles.splitRow} ${styles.splitRowReverse}`}>
              <img
                src="images/about/cultural-leaders-lab.webp"
                alt=""
                loading="lazy"
                className={styles.splitPhoto}
              />
              <div className={styles.surveyParagraphs}>
                {survey.paragraphs.map((p, i) => (
                  <p key={i}>{p[language]}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className="container">
            <div className={`${styles.splitRow} ${styles.historyRow}`}>
              <div>
                <SectionHeading title={t.about.historyTitle[language]} />
                <p className={styles.heroText}>{t.about.historyText[language]}</p>
              </div>
              <img
                src="images/about/inevitability-sculpture.webp"
                alt=""
                loading="lazy"
                className={`${styles.splitPhoto} ${styles.historyPhoto}`}
              />
            </div>

            <div className={styles.addressGrid}>
              <div className={styles.addressCard}>
                <div className={styles.addressCardLabel}>История (2015–2025)</div>
                Самарканд, ул. Беруни, 1
              </div>
              <div className={styles.addressCard}>
                <div className={styles.addressCardLabel}>{t.about.currentAddressLabel[language]}</div>
                Ташкент, Astronomy Park, ARTepa Gallery
              </div>
            </div>

            <div className={styles.announcement}>
              <strong>{importantAnnouncement.title[language]}</strong>
              <p style={{ marginTop: 8, lineHeight: 1.6 }}>{importantAnnouncement.text[language]}</p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className={styles.section}>
          <div className="container">
            <SectionHeading title={t.about.teamTitle[language]} />
            <div className={styles.teamGrid}>
              {team.map((member) => (
                <div key={member.id} className={styles.teamCard}>
                  <img src={member.photo} alt={member.name} loading="lazy" className={styles.teamPhoto} />
                  <div className={styles.teamName}>{member.name}</div>
                  {member.role && <div className={styles.teamRole}>{member.role}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  )
}
