import { useRef, useState } from 'react'
import type { InstagramMedia } from '../types'
import styles from './InstagramMediaCarousel.module.css'

function MediaItem({ item }: { item: InstagramMedia }) {
  if (item.type === 'video') {
    return <video className={styles.media} src={item.src} controls playsInline preload="metadata" />
  }
  return <img className={styles.media} src={item.src} alt="" loading="lazy" />
}

export function InstagramMediaCarousel({ media }: { media: InstagramMedia[] }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  if (media.length === 0) return null

  if (media.length === 1) {
    return (
      <div className={styles.single}>
        <MediaItem item={media[0]} />
      </div>
    )
  }

  const scrollTo = (index: number) => {
    const track = trackRef.current
    const slide = track?.children[index] as HTMLElement | undefined
    slide?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
  }

  const handleScroll = () => {
    const track = trackRef.current
    if (!track) return
    const index = Math.round(track.scrollLeft / track.clientWidth)
    setActive(Math.min(Math.max(index, 0), media.length - 1))
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.track} ref={trackRef} onScroll={handleScroll}>
        {media.map((item, i) => (
          <div className={styles.slide} key={i}>
            <MediaItem item={item} />
          </div>
        ))}
      </div>

      {active > 0 && (
        <button type="button" className={`${styles.arrow} ${styles.arrowPrev}`} onClick={() => scrollTo(active - 1)} aria-label="Previous">
          ‹
        </button>
      )}
      {active < media.length - 1 && (
        <button type="button" className={`${styles.arrow} ${styles.arrowNext}`} onClick={() => scrollTo(active + 1)} aria-label="Next">
          ›
        </button>
      )}

      <div className={styles.dots}>
        {media.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`${styles.dot} ${active === i ? styles.dotActive : ''}`}
            onClick={() => scrollTo(i)}
            aria-label={`${i + 1}/${media.length}`}
          />
        ))}
      </div>
    </div>
  )
}
