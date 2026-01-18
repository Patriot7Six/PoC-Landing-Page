import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  FileSearch,
  Languages,
  FileText,
  Target,
  Briefcase,
  TrendingUp,
  BookOpen,
  CheckCircle,
} from 'lucide-react'

const features = [
  {
    icon: FileSearch,
    title: 'DD214 Vision Parsing',
    description:
      'Upload your DD214 and our AI extracts your service information, rank, MOS, skills, and decorations automatically.',
    highlight: 'Claude AI Vision',
    status: 'live',
  },
  {
    icon: Languages,
    title: 'MOS Translation',
    description:
      'Your Military Occupational Specialty translated into 10-15+ diverse civilian career equivalents across multiple industries.',
    highlight: 'AI-Powered',
    status: 'live',
  },
  {
    icon: FileText,
    title: 'AI Resume Builder',
    description:
      'Generate ATS-optimized professional resumes that translate your military experience into civilian terminology.',
    highlight: 'Download PDF',
    status: 'live',
  },
  {
    icon: Target,
    title: 'Smart Job Matching',
    description:
      'Multi-factor AI scoring based on skills, experience, career trajectory, culture fit, location, and salary expectations.',
    highlight: 'Personalized',
    status: 'live',
  },
  {
    icon: Briefcase,
    title: 'USAJOBS Integration',
    description:
      'Real-time federal job syncing with direct matches to your military profile and preferences.',
    highlight: 'Federal Jobs',
    status: 'live',
  },
  {
    icon: TrendingUp,
    title: 'Skill Gap Analysis',
    description:
      'Identify the skills you need for your target roles and get recommendations for closing the gap.',
    highlight: 'Career Growth',
    status: 'live',
  },
  {
    icon: BookOpen,
    title: 'Training Tracker',
    description:
      'Track your certifications, courses, and continuing education as you build your civilian credentials.',
    highlight: 'Progress',
    status: 'live',
  },
  {
    icon: CheckCircle,
    title: 'Application Tracking',
    description:
      'Manage all your job applications in one place with status updates and follow-up reminders.',
    highlight: 'Organized',
    status: 'live',
  },
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="features" ref={ref} className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Everything You Need to <span className="text-gradient">Transition Successfully</span>
          </h2>
          <p className="text-navy-300 text-lg max-w-2xl mx-auto">
            A complete suite of AI-powered tools designed specifically for military-to-civilian
            career transitions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative h-full p-6 bg-navy-900/60 rounded-2xl border border-navy-800 hover:border-gold-500/30 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-500/20 to-gold-600/10 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <span className="px-2 py-1 bg-tactical-600/30 text-tactical-300 text-xs font-medium rounded-full">
                    {feature.highlight}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-navy-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
