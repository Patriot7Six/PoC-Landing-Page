import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import AIShowcase from './components/AIShowcase'
import Founder from './components/Founder'
import WaitlistCTA from './components/WaitlistCTA'
import Footer from './components/Footer'

function App() {
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
          <Founder />
          <WaitlistCTA />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
