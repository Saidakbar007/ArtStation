import { Link } from 'react-router-dom'
import { openCall } from '../data/openCall'
import { NEWS_DIR } from '../hooks/useNewsPosts'
import { useLanguage } from '../i18n/LanguageContext'
import { pickText } from '../utils/localize'
import { formatDateRange } from '../utils/date'
import styles from './OpenCallSpotlight.module.css'

const MS_PER_DAY = 1000 * 60 * 60 * 24

/**
 * Пинится первым блоком на главной, сразу под Hero — единственный открытый
 * конкурс сейчас принимает только внешнюю форму (applyUrl BIENALSUR), а не
 * форму на events-странице, поэтому это отдельная секция, а не карточка
 * события. Секция сама исчезает после дедлайна (та же логика авто-скрытия,
 * что у OpenCallBanner), так что убирать её вручную не нужно.
 */
export function OpenCallSpotlight() {
  const { language } = useLanguage()

  const deadline = new Date(openCall.deadline)
  deadline.setHours(23, 59, 59, 999)
  const daysLeft = Math.ceil((deadline.getTime() - Date.now()) / MS_PER_DAY)

  if (daysLeft < 0) return null

  return (
    <section className={styles.section} aria-labelledby="open-call-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.media}>
          <img src={`${NEWS_DIR}${openCall.image}`} alt="" className={styles.photo} />
          <div className={styles.stamp} aria-hidden="true">
            <span className={styles.stampDays}>{daysLeft}</span>
            <span className={styles.stampLabel}>{pickText(openCall.daysLabel, language)}</span>
          </div>
        </div>

        <div className={styles.content}>
          <span className={styles.eyebrow}>{pickText(openCall.eyebrow, language)}</span>
          <h2 id="open-call-title" className={styles.title}>
            {pickText(openCall.title, language)}
          </h2>
          <p className={styles.description}>{pickText(openCall.description, language)}</p>

          <div className={styles.deadlineRow}>
            <span className={styles.deadlineLabel}>{pickText(openCall.deadlineLabel, language)}</span>
            <span className={styles.deadlineDate}>{formatDateRange(openCall.deadline, undefined, language)}</span>
          </div>

          <div className={styles.actions}>
            <a href={openCall.applyUrl} target="_blank" rel="noreferrer" className={styles.applyButton}>
              {pickText(openCall.cta, language)}
              <span aria-hidden="true">→</span>
            </a>
            <Link to={`/news/${openCall.newsSlug}`} className={styles.secondaryLink}>
              {pickText(openCall.secondaryCta, language)}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
