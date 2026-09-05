import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="container" style={{ paddingBlock: 'var(--space-7)', textAlign: 'center' }}>
      <h1 style={{ fontSize: 'var(--font-size-hero)' }}>404</h1>
      <p style={{ marginBottom: 'var(--space-3)' }}>Страница не найдена</p>
      <Link to="/" style={{ borderBottom: '2px solid var(--color-yellow)', fontWeight: 600 }}>
        На главную
      </Link>
    </div>
  )
}
