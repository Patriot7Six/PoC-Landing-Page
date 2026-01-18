import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

export default function WaitlistCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) return

    setStatus('loading')

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage("You're on the list! We'll notify you when we launch.")
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setMessage('Network error. Please try again.')
    }
  }

  return (
    <section id="waitlist" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gold-500/10 via-transparent to-gold-500/10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-500/20 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center mb-8">
            <img src="/logo.png" alt="Patriot Ops Center" className="h-20 w-auto" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Be First in Line for <span className="text-gradient">Launch</span>
          </h2>

          <p className="text-xl text-navy-300 mb-10 max-w-2xl mx-auto">
            Join the waitlist and be among the first veterans to access our AI-powered career
            transition platform. We'll notify you the moment we go live.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="max-w-md mx-auto"
          >
            {status === 'success' ? (
              <div className="flex items-center gap-3 p-4 bg-tactical-900/50 border border-tactical-600/50 rounded-xl">
                <CheckCircle className="w-6 h-6 text-tactical-400 flex-shrink-0" />
                <p className="text-tactical-300">{message}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-500" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    disabled={status === 'loading'}
                    className="w-full pl-12 pr-4 py-4 bg-navy-900/80 border border-navy-700 rounded-xl text-white placeholder-navy-500 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-all disabled:opacity-50"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading' || !email}
                  className="w-full py-4 bg-gold-500 hover:bg-gold-400 disabled:bg-gold-500/50 text-navy-950 font-bold text-lg rounded-xl transition-all shadow-lg shadow-gold-500/25 hover:shadow-gold-400/40 disabled:shadow-none flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Joining...
                    </>
                  ) : (
                    'Join the Waitlist'
                  )}
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-navy-400 text-sm"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-tactical-400 rounded-full" />
              Free to join
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-tactical-400 rounded-full" />
              No spam, ever
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-tactical-400 rounded-full" />
              Early access benefits
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
