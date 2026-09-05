import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import type { Language } from '../types'
import { ui } from './translations'

const STORAGE_KEY = 'artstation-lang'

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'ru'
  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved === 'ru' || saved === 'uz' || saved === 'en') return saved
  return 'ru'
}

interface LanguageContextValue {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof ui
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage)

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // localStorage может быть недоступен (приватный режим) — не критично
    }
  }

  const value = useMemo(() => ({ language, setLanguage, t: ui }), [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
