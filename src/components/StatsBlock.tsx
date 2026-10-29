import { useEffect, useRef, useState } from 'react'
import { stats } from '../data/stats'
import { useLanguage } from '../i18n/LanguageContext'
import { useInView } from '../hooks/useInView'
import styles from './StatsBlock.module.css'

function parseStatValue(raw: string): { target: number; suffix: string; grouped: boolean } {
  const match = raw.match(/^([\d\s]+)(.*)$/)
  if (!match) return { target: 0, suffix: raw, grouped: false }
  let [, numPart, suffix] = match
  // пробел перед суффиксом (например "3300 м²") — это разделитель перед
  // единицей измерения, а не разрядный пробел числа; переносим его в
  // суффикс, иначе формат числа после анимации не совпадёт с исходным
  const trailingSpace = numPart.match(/\s+$/)
  if (trailingSpace) {
    suffix = trailingSpace[0] + suffix
    numPart = numPart.slice(0, -trailingSpace[0].length)
  }
  return { target: Number(numPart.replace(/\s/g, '')), suffix, grouped: numPart.includes(' ') }
}

function formatCount(value: number, grouped: boolean, suffix: string): string {
  const digits = String(value)
  const formatted = grouped ? digits.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : digits
  return `${formatted}${suffix}`
}

/** Отматывает число от 0 до целевого значения один раз, когда попадает в зону видимости. */
function AnimatedStatValue({ value }: { value: string }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4)
  const [display, setDisplay] = useState(value)
  const playedRef = useRef(false)

  useEffect(() => {
    if (!inView || playedRef.current) return
    playedRef.current = true

    const { target, suffix, grouped } = parseStatValue(value)
    if (target === 0 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const duration = 1100
    const startTime = performance.now()
    let raf = requestAnimationFrame(tick)

    function tick(now: number) {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(formatCount(Math.round(target * eased), grouped, suffix))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <div ref={ref} className={styles.value}>
      {display}
    </div>
  )
}

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
              <AnimatedStatValue value={stat.value} />
              <div className={styles.label}>{stat.label[language]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
