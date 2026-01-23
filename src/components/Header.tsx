import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#faq', label: 'FAQ' },
    { href: '#about', label: 'About' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-950/80 backdrop-blur-lg border-b border-navy-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a href="#" className="flex items-center gap-3" whileHover={{ scale: 1.02 }}>
            <img src="/logo.png" alt="Patriot Ops Center" className="h-10 w-auto" />
            <div className="hidden sm:block">
              <span className="font-bold text-white text-lg">Patriot Ops</span>
              <span className="text-gold-400 font-semibold text-lg ml-1">Center</span>
            </div>
          </motion.a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-navy-200 hover:text-white transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <motion.a
              href="#waitlist"
              className="inline-flex items-center px-4 py-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold text-sm rounded-lg transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Join Waitlist
            </motion.a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-navy-200 hover:text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-900 border-t border-navy-800"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-navy-200 hover:text-white transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#waitlist"
                onClick={() => setIsMenuOpen(false)}
                className="block text-gold-400 hover:text-gold-300 transition-colors py-2 font-medium"
              >
                Join Waitlist
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
