import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { useTheme } from '../theme/ThemeContext'
import { languageNames } from '../i18n/translations'
import type { Language } from '../types'
import styles from './Header.module.css'

const languages: Language[] = ['ru', 'uz', 'en']

export function Header() {
  const { language, setLanguage, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()
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
          <img
            src={theme === 'dark' ? 'images/logo/artstation-logo-white.webp' : 'images/logo/artstation-logo-black.webp'}
            alt="Art Station"
            className={styles.logoImg}
          />
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
            type="button"
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t.theme.toLight[language] : t.theme.toDark[language]}
            title={theme === 'dark' ? t.theme.toLight[language] : t.theme.toDark[language]}
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6" />
                <path
                  d="M12 2.5v2.5M12 19v2.5M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2.5 12H5M19 12h2.5M4.2 19.8 6 18M18 6l1.8-1.8"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>

          <button
            className={styles.burger}
            aria-label="menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M2 6h18M2 11h18M2 16h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
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
