import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, Brain, FileCheck, Briefcase } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: '200K+',
    label: 'Veterans Transition Annually',
    description: 'Service members entering civilian workforce each year',
  },
  {
    icon: Brain,
    value: 'AI-Powered',
    label: 'Smart Career Matching',
    description: 'Claude AI analyzes your experience for best fits',
  },
  {
    icon: FileCheck,
    value: 'DD214',
    label: 'Vision Parsing',
    description: 'Upload once, extract everything automatically',
  },
  {
    icon: Briefcase,
    value: 'USAJOBS',
    label: 'Federal Job Sync',
    description: 'Real-time federal opportunities matched to you',
  },
]

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-6 bg-navy-900/80 rounded-2xl border border-navy-800 hover:border-gold-500/30 transition-colors">
                <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-gold-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gold-400 font-semibold text-sm mb-2">{stat.label}</div>
                <div className="text-navy-400 text-sm">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
