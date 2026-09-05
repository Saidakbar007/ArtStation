import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { languageNames } from '../i18n/translations'
import type { Language } from '../types'
import styles from './Header.module.css'

const languages: Language[] = ['ru', 'uz', 'en']

export function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { to: '/', label: t.nav.home[language] },
    { to: '/events', label: t.nav.events[language] },
    { to: '/about', label: t.nav.about[language] },
    { to: '/contact', label: t.nav.contact[language] },
  ]

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <NavLink to="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
          <span className={styles.logoDot} />
          Art Station
        </NavLink>

        <nav className={styles.nav}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.right}>
          <div className={styles.langSwitch}>
            {languages.map((lang) => (
              <button
                key={lang}
                className={`${styles.langButton} ${lang === language ? styles.langButtonActive : ''}`}
                onClick={() => setLanguage(lang)}
                aria-pressed={lang === language}
              >
                {languageNames[lang]}
              </button>
            ))}
          </div>

          <button
            className={styles.burger}
            aria-label="menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M2 6h18M2 11h18M2 16h18" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className={styles.mobileNav}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={styles.mobileNavLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
