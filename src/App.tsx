import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import AIShowcase from './components/AIShowcase'
import FAQ from './components/FAQ'
import Founder from './components/Founder'
import WaitlistCTA from './components/WaitlistCTA'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import CookiePolicy from './pages/CookiePolicy'

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // Handle navigation
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a')
      if (anchor && anchor.href.startsWith(window.location.origin)) {
        const path = new URL(anchor.href).pathname
        if (path !== currentPath) {
          e.preventDefault()
          window.history.pushState({}, '', path)
          setCurrentPath(path)
          window.scrollTo(0, 0)
        }
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [currentPath])

  // Render based on path
  if (currentPath === '/privacy') {
    return <PrivacyPolicy />
  }

  if (currentPath === '/terms') {
    return <TermsOfService />
  }

  if (currentPath === '/cookies') {
    return <CookiePolicy />
  }

  return (
    <div className="min-h-screen bg-navy-950">
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-br from-navy-950 via-navy-900/50 to-tactical-900/30 pointer-events-none" />

      <div className="relative">
        <Header />
        <main>
          <Hero />
          <Stats />
          <Features />
          <HowItWorks />
          <AIShowcase />
          <FAQ />
          <Founder />
          <WaitlistCTA />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
