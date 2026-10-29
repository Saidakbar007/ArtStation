import { Link } from 'react-router-dom'
import type { NewsPost } from '../types'
import { formatNewsDate } from '../utils/date'
import { parseCaption } from '../utils/news'
import styles from './NewsCard.module.css'

export function NewsCard({ post, mediaBase }: { post: NewsPost; mediaBase: string }) {
  const { title, excerpt } = parseCaption(post.caption)
  const cover = post.media[0]
  const coverSrc = cover ? `${mediaBase}${cover.src}` : undefined

  return (
    <Link to={`/news/${post.shortcode}`} className={styles.card}>
      <div className={styles.imageWrap}>
        {cover ? (
          cover.type === 'video' ? (
            <video className={styles.media} src={coverSrc} preload="metadata" muted playsInline />
          ) : (
            <img className={styles.media} src={coverSrc} alt="" loading="lazy" />
          )
        ) : null}
      </div>
      <div className={styles.body}>
        <span className={styles.date}>{formatNewsDate(post.date)}</span>
        <h3 className={styles.title}>{title}</h3>
        {excerpt && <p className={styles.excerpt}>{excerpt}</p>}
      </div>
    </Link>
  )
}
