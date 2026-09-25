import { Link } from 'react-router-dom'
import { fullEvents } from '../data/events'
import { getEventStatus } from '../utils/date'
import { pickText } from '../utils/localize'
import { useLanguage } from '../i18n/LanguageContext'
import styles from './OpenCallBanner.module.css'

/**
 * Полоса на весь сайт для события с открытым набором заявок (applyUrl).
 * Показывается, пока событие не прошло — пропадает само, когда набор
 * закрывается (событие переходит в статус "past"), без ручной уборки.
 */
export function OpenCallBanner() {
  const { language, t } = useLanguage()
  const openCall = fullEvents.find(
    (event) => event.applyUrl && getEventStatus(event.startDate, event.endDate) !== 'past',
  )

  if (!openCall) return null

  return (
    <Link to={`/events/${openCall.id}`} className={styles.banner}>
      <span className={styles.badge}>{t.home.openCallBadge[language]}</span>
      <span className={styles.title}>{pickText(openCall.title, language)}</span>
      <span className={styles.arrow}>→</span>
    </Link>
  )
}
