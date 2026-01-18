import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote } from 'lucide-react'

export default function Founder() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="py-24 relative bg-navy-900/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="relative"
        >
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center">
            <Quote className="w-8 h-8 text-gold-500/50" />
          </div>

          <div className="bg-navy-900/80 rounded-2xl border border-navy-800 p-8 lg:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gradient-to-br from-tactical-600 to-tactical-800 rounded-2xl flex items-center justify-center border-2 border-gold-500/30">
                  <span className="text-4xl font-bold text-white">BB</span>
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <blockquote className="text-xl lg:text-2xl text-white leading-relaxed mb-6">
                  "I built this because I lived it. The transition from military to civilian life
                  shouldn't mean starting from scratch. Your skills are valuable—you just need the
                  right tools to translate them into opportunities employers understand."
                </blockquote>

                <div>
                  <div className="text-white font-semibold text-lg">Bradley Baker</div>
                  <div className="text-gold-400 font-medium">U.S. Army Veteran</div>
                  <div className="text-navy-400 text-sm mt-1">Founder, Patriot Ops Center</div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-navy-800">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">Veteran-Built</div>
                  <div className="text-navy-400 text-sm">By those who've served</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">Mission-Driven</div>
                  <div className="text-navy-400 text-sm">Not just another job board</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">AI-Powered</div>
                  <div className="text-navy-400 text-sm">Cutting-edge technology</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
