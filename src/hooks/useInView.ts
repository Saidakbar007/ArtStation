import { useEffect, useRef, useState } from 'react'

/**
 * true, пока элемент виден во вьюпорте — переключается в обе стороны
 * (не "once"), поэтому анимация на основе этого хука проигрывает
 * fade-in при появлении и fade-out при уходе из вьюпорта.
 */
export function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}
