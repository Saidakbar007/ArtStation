import { useEffect, useState } from 'react'
import type { InstagramPost } from '../types'
import { useLanguage } from '../i18n/LanguageContext'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { InstagramPostCard } from '../components/InstagramPostCard'
import styles from './InstagramPage.module.css'

const INSTAGRAM_DIR = `${import.meta.env.BASE_URL}instagram/`

export function InstagramPage() {
  const { language, t } = useLanguage()
  const [posts, setPosts] = useState<InstagramPost[] | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false

    fetch(`${INSTAGRAM_DIR}posts.json`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((data) => {
        if (!cancelled) setPosts(Array.isArray(data) ? data : [])
      })
      .catch(() => {
        if (!cancelled) setError(true)
      })

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="container">
      <Reveal>
        <div className={styles.header}>
          <SectionHeading eyebrow="Art Station" title={t.instagram.title[language]} subtitle={t.instagram.subtitle[language]} />
        </div>
      </Reveal>

      {error ? (
        <p className={styles.empty}>{t.instagram.error[language]}</p>
      ) : posts === null ? (
        <p className={styles.empty}>{t.instagram.loading[language]}</p>
      ) : posts.length === 0 ? (
        <p className={styles.empty}>{t.instagram.empty[language]}</p>
      ) : (
        <div className={styles.grid}>
          {posts.map((post) => (
            <Reveal key={post.shortcode}>
              <InstagramPostCard post={post} mediaBase={INSTAGRAM_DIR} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  )
}
