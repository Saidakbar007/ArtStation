import type { InstagramPost } from '../types'
import { useLanguage } from '../i18n/LanguageContext'
import { formatPostDate } from '../utils/date'
import { InstagramMediaCarousel } from './InstagramMediaCarousel'
import styles from './InstagramPostCard.module.css'

export function InstagramPostCard({ post, mediaBase }: { post: InstagramPost; mediaBase: string }) {
  const { language, t } = useLanguage()
  const media = post.media.map((item) => ({ ...item, src: `${mediaBase}${item.src}` }))

  return (
    <article className={styles.card}>
      <InstagramMediaCarousel media={media} />
      <div className={styles.body}>
        <span className={styles.date}>{formatPostDate(post.date, language)}</span>
        <p className={styles.caption}>{post.caption}</p>
        <a href={post.instagram_url} target="_blank" rel="noreferrer" className={styles.link}>
          {t.instagram.viewOnInstagram[language]} →
        </a>
      </div>
    </article>
  )
}
