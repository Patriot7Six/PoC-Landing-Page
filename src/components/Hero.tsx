import { motion } from 'framer-motion'
import { ArrowDown, FileText, Briefcase, Target, Clock } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tactical-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-tactical-600/20 border border-tactical-500/30 rounded-full mb-8"
          >
            <Clock className="w-4 h-4 text-tactical-400" />
            <span className="text-tactical-300 text-sm font-medium">
              Coming Soon - Join the Waitlist
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Your Military Skills. <span className="text-gradient">Civilian Opportunities.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-navy-300 mb-10 max-w-2xl mx-auto"
          >
            The career transition platform designed specifically for military veterans. Upload your
            DD214, and our AI translates your service into civilian success with personalized job
            matches and ATS-optimized resumes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="#waitlist"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-lg rounded-xl transition-all shadow-lg shadow-gold-500/25 hover:shadow-gold-400/40"
            >
              Join the Waitlist
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-8 py-4 bg-navy-800/50 hover:bg-navy-700/50 text-white font-semibold text-lg rounded-xl border border-navy-700 transition-all"
            >
              See How It Works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            {[
              { icon: FileText, text: 'Upload DD214', subtext: 'AI parses your service record' },
              { icon: Target, text: 'Get Matched', subtext: 'See civilian career equivalents' },
              { icon: Briefcase, text: 'Land Jobs', subtext: 'Apply with optimized resumes' },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-navy-900/50 rounded-xl border border-navy-800"
              >
                <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center mb-3">
                  <item.icon className="w-6 h-6 text-gold-400" />
                </div>
                <span className="text-white font-semibold">{item.text}</span>
                <span className="text-navy-400 text-sm">{item.subtext}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-navy-900/60 rounded-full border border-navy-700">
            <div className="flex gap-0.5">
              <div className="w-1.5 h-8 bg-red-600 rounded-sm" />
              <div className="w-1.5 h-8 bg-white rounded-sm" />
              <div className="w-1.5 h-8 bg-red-600 rounded-sm" />
              <div className="w-1.5 h-8 bg-white rounded-sm" />
              <div className="w-1.5 h-8 bg-red-600 rounded-sm" />
            </div>
            <div className="text-center">
              <p className="text-gold-400 font-semibold text-sm tracking-wider">
                BUILT BY VETERANS, FOR VETERANS
              </p>
              <p className="text-navy-400 text-xs">Supporting those who served</p>
            </div>
            <div className="flex gap-0.5">
              <div className="w-1.5 h-8 bg-red-600 rounded-sm" />
              <div className="w-1.5 h-8 bg-white rounded-sm" />
              <div className="w-1.5 h-8 bg-red-600 rounded-sm" />
              <div className="w-1.5 h-8 bg-white rounded-sm" />
              <div className="w-1.5 h-8 bg-red-600 rounded-sm" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
