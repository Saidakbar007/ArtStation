import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import styles from './Footer.module.css'

// Telegram отчёт не упоминает; в старом коде сайта встречались два разных
// адреса — оставлены закомментированными до уточнения:
// t.me/artstation_silkroad или @artstationuzb

export function Footer() {
  const { language, t } = useLanguage()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div>
          <div className={styles.logo}>
            <span className={styles.logoDot} />
            Art Station
          </div>
          <p className={styles.tagline}>{t.home.aboutTeaser[language]}</p>
        </div>

        <div>
          <div className={styles.colTitle}>{t.nav.home[language]}</div>
          <ul className={styles.list}>
            <li><Link to="/">{t.nav.home[language]}</Link></li>
            <li><Link to="/events">{t.nav.events[language]}</Link></li>
            <li><Link to="/about">{t.nav.about[language]}</Link></li>
            <li><Link to="/contact">{t.nav.contact[language]}</Link></li>
          </ul>
        </div>

        <div>
          <div className={styles.colTitle}>{t.contact.socialLabel[language]}</div>
          <ul className={styles.list}>
            <li><a href="mailto:artstation.uz@gmail.com">artstation.uz@gmail.com</a></li>
            <li><a href="tel:+998950209988">+998 95 020 99 88</a></li>
            <li><a href="https://www.instagram.com/artstationuz" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://www.facebook.com/share/1AnG8G9mFb/?mibextid=LQQJ4d" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://www.tiktok.com/@artstation.uz" target="_blank" rel="noreferrer">TikTok</a></li>
            <li><a href="https://youtube.com/@artstation_uz" target="_blank" rel="noreferrer">YouTube</a></li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>&copy; {new Date().getFullYear()} Art Station. {t.footer.rights[language]}.</span>
        <span>Tashkent, Astronomy Park, ARTepa Gallery</span>
      </div>
    </footer>
  )
}
