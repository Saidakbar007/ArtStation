import { useLanguage } from '../i18n/LanguageContext'
import { useNewsPosts, NEWS_DIR } from '../hooks/useNewsPosts'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { NewsCard } from '../components/NewsCard'
import styles from './NewsPage.module.css'

export function NewsPage() {
  const { language, t } = useLanguage()
  const { posts, error } = useNewsPosts()

  return (
    <div className="container">
      <Reveal>
        <div className={styles.header}>
          <SectionHeading eyebrow="Art Station" title={t.news.title[language]} subtitle={t.news.subtitle[language]} />
        </div>
      </Reveal>

      {error ? (
        <p className={styles.empty}>{t.news.error[language]}</p>
      ) : posts === null ? (
        <p className={styles.empty}>{t.news.loading[language]}</p>
      ) : posts.length === 0 ? (
        <p className={styles.empty}>{t.news.empty[language]}</p>
      ) : (
        <div className={styles.grid}>
          {posts.map((post) => (
            <Reveal key={post.shortcode}>
              <NewsCard post={post} mediaBase={NEWS_DIR} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  )
}
