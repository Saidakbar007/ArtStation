import { useEffect, useState } from 'react'
import type { NewsPost } from '../types'

/** Папка, которую бот наполняет коммитами (posts.json + media/<shortcode>/...). */
export const NEWS_DIR = `${import.meta.env.BASE_URL}news/`

export interface NewsFetchState {
  /** null — ещё загружается */
  posts: NewsPost[] | null
  error: boolean
}

export function useNewsPosts(): NewsFetchState {
  const [posts, setPosts] = useState<NewsPost[] | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false

    fetch(`${NEWS_DIR}posts.json`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((data: unknown) => {
        if (cancelled) return
        const list = Array.isArray(data) ? (data as NewsPost[]) : []
        list.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        setPosts(list)
      })
      .catch(() => {
        if (!cancelled) setError(true)
      })

    return () => {
      cancelled = true
    }
  }, [])

  return { posts, error }
}
