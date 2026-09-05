import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'
import styles from './Reveal.module.css'

/** Оборачивает секцию: fade-in + лёгкий подъём при входе во вьюпорт, fade-out при выходе. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${inView ? styles.inView : ''}${className ? ` ${className}` : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
