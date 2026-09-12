import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import styles from './Footer.module.css'

export function Footer() {
  const { language, t } = useLanguage()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div>
          <div className={styles.logo}>
            <img src="images/logo/artstation-logo-white.webp" alt="Art Station" className={styles.logoImg} />
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
            <li><a href="mailto:info@artstation.uz">info@artstation.uz</a></li>
            <li><a href="https://t.me/artstationit" target="_blank" rel="noreferrer">Telegram @artstationit</a></li>
            <li><a href="https://www.instagram.com/artstationuz" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://www.facebook.com/share/1AnG8G9mFb/?mibextid=LQQJ4d" target="_blank" rel="noreferrer">Facebook</a></li>
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
