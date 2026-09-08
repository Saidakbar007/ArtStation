import { useEffect } from 'react'
import type { Event } from '../types'
import { useLanguage } from '../i18n/LanguageContext'
import { pickText } from '../utils/localize'
import { formatEventDate } from '../utils/date'
import { EventTypeBadge } from './EventTypeBadge'
import styles from './EventModal.module.css'

/**
 * У краткого события (EventShort) нет отдельной страницы — по схеме
 * данных (discriminated union hasFullContent) для него просто нет
 * достаточно контента для полноценного разворота. Поэтому клик по
 * карточке открывает модалку с тем минимумом, что есть.
 */
export function EventModal({ event, onClose }: { event: Event; onClose: () => void }) {
  const { language } = useLanguage()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="close">
          &times;
        </button>
        <img src={event.coverImage} alt={pickText(event.title, language)} className={styles.image} />
        <div className={styles.body}>
          <div className={styles.meta}>
            <span>{formatEventDate(event, language)}</span>
            <EventTypeBadge type={event.type} />
          </div>
          <h3 className={styles.title}>{pickText(event.title, language)}</h3>
          <p className={styles.note}>
            {language === 'ru' && 'Подробное описание этого события пока не опубликовано.'}
            {language === 'uz' && 'Bu tadbir haqida batafsil ma\'lumot hali chop etilmagan.'}
            {language === 'en' && 'A detailed description of this event has not been published yet.'}
          </p>
        </div>
      </div>
    </div>
  )
}
