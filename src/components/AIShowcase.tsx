import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles, ArrowRight, Check } from 'lucide-react'

export default function AIShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const mosExample = {
    input: '11B - Infantry',
    outputs: [
      'Security Manager',
      'Operations Coordinator',
      'Emergency Response Lead',
      'Logistics Supervisor',
      'Training Specialist',
      'Risk Analyst',
      'Project Manager',
      'Physical Security Director',
    ],
  }

  const skillCategories = [
    { name: 'Leadership', skills: ['Team Leadership', 'Decision Making', 'Crisis Management'] },
    {
      name: 'Operations',
      skills: ['Logistics Planning', 'Resource Management', 'Process Optimization'],
    },
    {
      name: 'Technical',
      skills: ['Equipment Operation', 'Systems Analysis', 'Technical Training'],
    },
    {
      name: 'Communication',
      skills: ['Briefing & Reporting', 'Cross-functional Coordination', 'Documentation'],
    },
  ]

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="text-gold-400 text-sm font-medium">Powered by Claude AI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            See the AI in <span className="text-gradient">Action</span>
          </h2>
          <p className="text-navy-300 text-lg max-w-2xl mx-auto">
            Watch how we translate your military experience into civilian opportunities in
            real-time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-navy-900/80 rounded-2xl border border-navy-800 p-6 lg:p-8"
          >
            <h3 className="text-white font-semibold text-xl mb-6">MOS Translation Example</h3>

            <div className="mb-6">
              <div className="text-sm text-navy-400 mb-2">YOUR MOS</div>
              <div className="inline-flex items-center gap-3 px-4 py-3 bg-navy-800 rounded-lg border border-navy-700">
                <div className="w-8 h-8 bg-tactical-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">11B</span>
                </div>
                <span className="text-white font-medium">{mosExample.input}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <ArrowRight className="w-5 h-5 text-gold-400" />
              <span className="text-gold-400 font-medium">Translates to 8+ civilian careers</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {mosExample.outputs.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  className="flex items-center gap-2 px-3 py-2 bg-navy-800/50 rounded-lg border border-navy-700/50"
                >
                  <Check className="w-4 h-4 text-tactical-400 flex-shrink-0" />
                  <span className="text-navy-200 text-sm">{job}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-navy-900/80 rounded-2xl border border-navy-800 p-6 lg:p-8"
          >
            <h3 className="text-white font-semibold text-xl mb-6">Skill Extraction from DD214</h3>

            <div className="space-y-4">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-gold-400 rounded-full" />
                    <span className="text-gold-400 font-medium text-sm">{category.name}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 pl-4">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-navy-800/50 text-navy-200 text-sm rounded-full border border-navy-700/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-tactical-900/30 rounded-lg border border-tactical-700/30">
              <p className="text-tactical-300 text-sm">
                AI extracts <strong className="text-tactical-200">15-25+ skills</strong> from your
                service record, categorized and ready for your civilian resume.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
