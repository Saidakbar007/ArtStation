import { Link, Navigate, useParams } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { useNewsPosts, NEWS_DIR } from '../hooks/useNewsPosts'
import { formatNewsDate } from '../utils/date'
import { parseCaption } from '../utils/news'
import { Reveal } from '../components/Reveal'
import { NewsMediaCarousel } from '../components/NewsMediaCarousel'
import styles from './NewsDetailPage.module.css'

export function NewsDetailPage() {
  const { shortcode } = useParams<{ shortcode: string }>()
  const { language, t } = useLanguage()
  const { posts, error } = useNewsPosts()

  if (error) {
    return (
      <div className="container">
        <Link to="/news" className={styles.back}>
          ← {t.news.back[language]}
        </Link>
        <p className={styles.empty}>{t.news.error[language]}</p>
      </div>
    )
  }

  if (posts === null) {
    return (
      <div className="container">
        <Link to="/news" className={styles.back}>
          ← {t.news.back[language]}
        </Link>
        <p className={styles.empty}>{t.news.loading[language]}</p>
      </div>
    )
  }

  const post = posts.find((p) => p.shortcode === shortcode)
  if (!post) {
    return <Navigate to="/news" replace />
  }

  const { title, body } = parseCaption(post.caption)
  const media = post.media.map((item) => ({ ...item, src: `${NEWS_DIR}${item.src}` }))

  return (
    <div className="container">
      <Link to="/news" className={styles.back}>
        ← {t.news.back[language]}
      </Link>

      <Reveal>
        <div className={styles.layout}>
          <NewsMediaCarousel media={media} />

          <div className={styles.body}>
            <span className={styles.date}>{formatNewsDate(post.date)}</span>
            <h1 className={styles.title}>{title}</h1>
            {body && <p className={styles.text}>{body}</p>}

            <a href={post.instagram_url} target="_blank" rel="noreferrer" className={styles.source}>
              {t.news.source[language]}
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  )
}
