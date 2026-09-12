import { SectionHeading } from '../components/SectionHeading'
import { ContactForm } from '../components/ContactForm'
import { Reveal } from '../components/Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import styles from './ContactPage.module.css'

export function ContactPage() {
  const { language, t } = useLanguage()

  return (
    <div className="container">
      <Reveal>
        <div className={styles.header}>
          <SectionHeading eyebrow="Art Station" title={t.contact.title[language]} subtitle={t.contact.subtitle[language]} />
        </div>
      </Reveal>

      <Reveal>
      <div className={styles.layout}>
        <div>
          <ul className={styles.infoList}>
            <li>
              <div className={styles.infoLabel}>{t.contact.addressLabel[language]}</div>
              <div className={styles.infoValue}>Ташкент, Astronomy Park, ARTepa Gallery</div>
            </li>
            <li>
              <div className={styles.infoLabel}>{t.contact.hoursLabel[language]}</div>
              <div className={`${styles.infoValue} ${styles.todo}`}>{t.contact.hoursTodo[language]}</div>
            </li>
            <li>
              <div className={styles.infoLabel}>{t.contact.emailLabel[language]}</div>
              <div className={styles.infoValue}>
                <a href="mailto:info@artstation.uz">info@artstation.uz</a>
              </div>
            </li>
            <li>
              <div className={styles.infoLabel}>{t.contact.telegramLabel[language]}</div>
              <div className={styles.infoValue}>
                <a href="https://t.me/artstationit" target="_blank" rel="noreferrer">@artstationit</a>
              </div>
            </li>
            <li>
              <div className={styles.infoLabel}>{t.contact.socialLabel[language]}</div>
              <div className={styles.socialRow}>
                <a className={styles.socialLink} href="https://www.instagram.com/artstationuz" target="_blank" rel="noreferrer">Instagram</a>
                <a className={styles.socialLink} href="https://www.facebook.com/share/1AnG8G9mFb/?mibextid=LQQJ4d" target="_blank" rel="noreferrer">Facebook</a>
                <a className={styles.socialLink} href="https://youtube.com/@artstation_uz" target="_blank" rel="noreferrer">YouTube</a>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <SectionHeading title={t.contact.formTitle[language]} />
          <ContactForm />
        </div>
      </div>
      </Reveal>
    </div>
  )
}
