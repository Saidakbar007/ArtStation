import type { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { OpenCallBanner } from './OpenCallBanner'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <OpenCallBanner />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
