import styles from './LiveDot.module.css'

export function LiveDot({ label }: { label: string }) {
  return (
    <span className={styles.wrap}>
      <span className={styles.dot} />
      {label}
    </span>
  )
}
