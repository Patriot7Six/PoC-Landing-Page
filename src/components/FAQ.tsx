import { motion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'How does Patriot Ops Center help with military to civilian transition?',
    answer:
      'Patriot Ops Center uses advanced AI to analyze your DD214 and military service record, automatically translating your MOS (Military Occupational Specialty) into civilian job titles and skills. We create ATS-optimized resumes, provide personalized job matches, and guide you through every step of your career transition from military to civilian life.',
  },
  {
    question: 'What is MOS translation and why is it important?',
    answer:
      'MOS translation converts your Military Occupational Specialty code into civilian-friendly job titles and transferable skills that employers understand. This is crucial because civilian hiring managers may not recognize military terminology. Our AI automatically identifies equivalent civilian roles, helping you communicate your value to potential employers.',
  },
  {
    question: 'Is my DD214 and personal information secure?',
    answer:
      'Yes, absolutely. We take security seriously and use enterprise-grade encryption to protect your DD214 and all personal information. Your data is stored securely, never shared with third parties without your consent, and you maintain full control over your information at all times.',
  },
  {
    question: 'What makes Patriot Ops Center different from other job boards?',
    answer:
      'Unlike generic job boards, Patriot Ops Center is built specifically for veterans by veterans. We understand military culture, terminology, and the unique challenges of transitioning to civilian careers. Our AI-powered platform automatically translates military experience, creates tailored resumes, and matches you with employers who value veteran talent.',
  },
  {
    question: 'How long does it take to get matched with jobs?',
    answer:
      'Once you upload your DD214, our AI analyzes your service record within minutes. You\'ll immediately receive your MOS translation, civilian job recommendations, and can start building your resume. Job matches are personalized and updated in real-time as new opportunities arise.',
  },
  {
    question: 'Do I need to pay to use Patriot Ops Center?',
    answer:
      'We offer a free tier that includes DD214 analysis, basic MOS translation, and limited job matches. Premium features include unlimited job applications, advanced resume optimization, interview coaching, and priority matching with veteran-friendly employers. Join our waitlist to be notified when we launch and receive early access pricing.',
  },
  {
    question: 'What types of jobs can veterans find through Patriot Ops Center?',
    answer:
      'Our platform covers all industries and career levels, from entry-level positions to executive roles. We partner with companies actively seeking veteran talent in fields like technology, healthcare, logistics, cybersecurity, project management, operations, and more. Your military skills are valuable across virtually every civilian sector.',
  },
  {
    question: 'Can Patriot Ops Center help with resume writing?',
    answer:
      'Yes! Our AI-powered resume builder automatically translates your military experience into civilian terminology, creates ATS-optimized formats that pass applicant tracking systems, and tailors your resume for specific job applications. We also provide templates designed specifically for veterans transitioning to civilian careers.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Generate FAQ Schema for SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <section id="faq" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-navy-300 max-w-2xl mx-auto">
            Everything you need to know about transitioning from military to civilian careers with
            Patriot Ops Center
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-navy-900/50 border border-navy-800 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-navy-800/30 transition-colors"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-white pr-8">{faq.question}</h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-gold-400" />
                  ) : (
                    <Plus className="w-5 h-5 text-gold-400" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <p className="text-navy-300 leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-navy-300 mb-4">Still have questions?</p>
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-lg transition-all"
          >
            Join Waitlist and Get Updates
          </a>
        </motion.div>
      </div>

      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  )
}
