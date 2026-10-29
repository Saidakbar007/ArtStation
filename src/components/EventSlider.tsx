import { useEffect, useRef } from 'react'
import type { Event } from '../types'
import { EventCard } from './EventCard'
import styles from './EventSlider.module.css'

const AUTOPLAY_SPEED = 0.035 // px/ms — лёгкий неторопливый ход
const RESUME_DELAY = 900 // мс после ручного взаимодействия (стрелка/тач), пока не навели курсор

export function EventSlider({
  events,
  onOpenShort,
}: {
  events: Event[]
  onOpenShort?: (event: Event) => void
}) {
  const trackRef = useRef<HTMLDivElement>(null)
  const hoveredRef = useRef(false)
  const interactingRef = useRef(false)
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout>>()

  const pauseForInteraction = () => {
    interactingRef.current = true
    clearTimeout(resumeTimeoutRef.current)
    resumeTimeoutRef.current = setTimeout(() => {
      interactingRef.current = false
    }, RESUME_DELAY)
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let direction: 1 | -1 = 1
    let last = performance.now()
    let raf = requestAnimationFrame(step)

    function step(now: number) {
      const dt = now - last
      last = now

      const maxScroll = track!.scrollWidth - track!.clientWidth
      if (maxScroll > 0 && !hoveredRef.current && !interactingRef.current) {
        let next = track!.scrollLeft + direction * AUTOPLAY_SPEED * dt
        if (next >= maxScroll) {
          next = maxScroll
          direction = -1
        } else if (next <= 0) {
          next = 0
          direction = 1
        }
        track!.scrollLeft = next
      }

      raf = requestAnimationFrame(step)
    }

    return () => cancelAnimationFrame(raf)
  }, [events.length])

  const scrollByStep = (direction: 1 | -1) => {
    pauseForInteraction()
    const track = trackRef.current
    if (!track) return
    const slide = track.querySelector<HTMLElement>(`.${styles.slide}`)
    const gap = parseFloat(getComputedStyle(track).columnGap || '0')
    const step = (slide?.offsetWidth ?? track.clientWidth * 0.8) + gap
    track.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  return (
    <div
      className={styles.wrap}
      onMouseEnter={() => {
        hoveredRef.current = true
      }}
      onMouseLeave={() => {
        hoveredRef.current = false
      }}
    >
      <div
        className={styles.track}
        ref={trackRef}
        onTouchStart={pauseForInteraction}
        onTouchEnd={pauseForInteraction}
      >
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
