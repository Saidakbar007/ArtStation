import { useRef } from 'react'
import type { Event } from '../types'
import { EventCard } from './EventCard'
import styles from './EventSlider.module.css'

export function EventSlider({
  events,
  onOpenShort,
}: {
  events: Event[]
  onOpenShort?: (event: Event) => void
}) {
  const trackRef = useRef<HTMLDivElement>(null)

  const scrollByStep = (direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const slide = track.querySelector<HTMLElement>(`.${styles.slide}`)
    const gap = parseFloat(getComputedStyle(track).columnGap || '0')
    const step = (slide?.offsetWidth ?? track.clientWidth * 0.8) + gap
    track.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.track} ref={trackRef}>
        {events.map((event) => (
          <div className={styles.slide} key={event.id}>
            <EventCard event={event} onOpenShort={onOpenShort} />
          </div>
        ))}
      </div>

      <button type="button" className={`${styles.arrow} ${styles.arrowPrev}`} onClick={() => scrollByStep(-1)} aria-label="Previous">
        ‹
      </button>
      <button type="button" className={`${styles.arrow} ${styles.arrowNext}`} onClick={() => scrollByStep(1)} aria-label="Next">
        ›
      </button>
    </div>
  )
}
