import { stats } from '../data/stats'
import { useLanguage } from '../i18n/LanguageContext'
import styles from './StatsBlock.module.css'

export function StatsBlock() {
  const { language, t } = useLanguage()
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 style={{ fontSize: 'var(--font-size-h2)', paddingTop: 'var(--space-5)' }}>
          {t.home.statsTitle[language]}
        </h2>
        <div className={styles.grid}>
          {stats.map((stat) => (
            <div key={stat.id}>
              <div className={styles.value}>{stat.value}</div>
              <div className={styles.label}>{stat.label[language]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
