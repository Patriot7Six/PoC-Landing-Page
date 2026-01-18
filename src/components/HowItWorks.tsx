import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Upload, Cpu, FileText, Send, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: Upload,
    step: '01',
    title: 'Upload Your DD214',
    description: 'Securely upload your DD214 or manually enter your military service information.',
    detail: 'Our AI Vision technology reads and extracts all relevant information automatically.',
  },
  {
    icon: Cpu,
    step: '02',
    title: 'AI Analyzes Your Experience',
    description:
      'Claude AI parses your military experience, identifying skills, specializations, and achievements.',
    detail:
      'We extract 15-25+ skills across leadership, operations, technical, and communication categories.',
  },
  {
    icon: FileText,
    step: '03',
    title: 'Get Matched & Build Resume',
    description: 'See personalized career matches and generate an ATS-optimized civilian resume.',
    detail:
      'Your MOS translates to 10-15+ diverse civilian career paths across multiple industries.',
  },
  {
    icon: Send,
    step: '04',
    title: 'Apply With Confidence',
    description: 'Apply to matched jobs with your new resume and track your applications.',
    detail: 'Federal jobs from USAJOBS synced in real-time, matched specifically to your profile.',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="how-it-works" ref={ref} className="py-24 relative bg-navy-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-navy-300 text-lg max-w-2xl mx-auto">
            From DD214 to dream job in four simple steps. Our AI handles the heavy lifting.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full z-10">
                  <ArrowRight className="w-6 h-6 text-gold-500/30 -translate-x-3" />
                </div>
              )}

              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl flex items-center justify-center border border-navy-700 mx-auto">
                    <step.icon className="w-10 h-10 text-gold-400" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-gold-500 text-navy-950 text-sm font-bold rounded-full flex items-center justify-center">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-white font-semibold text-xl mb-3">{step.title}</h3>
                <p className="text-navy-300 mb-3">{step.description}</p>
                <p className="text-navy-500 text-sm">{step.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-lg rounded-xl transition-all shadow-lg shadow-gold-500/25"
          >
            Get Early Access
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
