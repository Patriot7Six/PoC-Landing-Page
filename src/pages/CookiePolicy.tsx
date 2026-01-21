import { ArrowLeft } from 'lucide-react'

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-navy-950">
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-br from-navy-950 via-navy-900/50 to-tactical-900/30 pointer-events-none" />

      <div className="relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>

          <h1 className="text-4xl font-bold text-white mb-2">Cookie Policy</h1>
          <p className="text-gray-400 mb-12">Last Updated: January 21, 2026</p>

          <div className="prose prose-invert prose-gold max-w-none">
            <div className="space-y-8 text-gray-300">

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
                <p>
                  This Cookie Policy explains how Patriot 7Six LLC, doing business as Patriot Ops Center
                  ("Company," "we," "us," or "our"), uses cookies and similar tracking technologies when
                  you visit our website at patriot-ops.com and use our services (collectively, the "Service").
                </p>
                <p className="mt-4">
                  This policy should be read together with our Privacy Policy, which provides more information
                  about how we collect and use personal data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. What Are Cookies?</h2>
                <p>
                  Cookies are small text files that are stored on your device (computer, tablet, or mobile phone)
                  when you visit a website. They are widely used to make websites work more efficiently, provide
                  a better user experience, and give website owners information about how their site is being used.
                </p>
                <p className="mt-4">
                  Cookies can be "persistent" or "session" cookies:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>
                    <strong className="text-white">Persistent cookies</strong> remain on your device for a set
                    period or until you delete them.
                  </li>
                  <li>
                    <strong className="text-white">Session cookies</strong> are temporary and are deleted when
                    you close your browser.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. Types of Cookies We Use</h2>

                <h3 className="text-xl font-medium text-gold-500 mt-6 mb-3">3.1 Essential Cookies</h3>
                <p>
                  These cookies are necessary for the Service to function properly. They enable core functionality
                  such as security, authentication, and accessibility. You cannot opt out of these cookies as the
                  Service would not work without them.
                </p>
                <div className="mt-4 overflow-x-auto">
                  <table className="min-w-full border border-navy-700 rounded-lg overflow-hidden">
                    <thead className="bg-navy-800">
                      <tr>
                        <th className="px-4 py-3 text-left text-white font-medium">Cookie Name</th>
                        <th className="px-4 py-3 text-left text-white font-medium">Purpose</th>
                        <th className="px-4 py-3 text-left text-white font-medium">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-navy-700">
                      <tr>
                        <td className="px-4 py-3">session_id</td>
                        <td className="px-4 py-3">Maintains your login session</td>
                        <td className="px-4 py-3">Session</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">csrf_token</td>
                        <td className="px-4 py-3">Security - prevents cross-site request forgery</td>
                        <td className="px-4 py-3">Session</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">cookie_consent</td>
                        <td className="px-4 py-3">Remembers your cookie preferences</td>
                        <td className="px-4 py-3">1 year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-medium text-gold-500 mt-6 mb-3">3.2 Functional Cookies</h3>
                <p>
                  These cookies enable enhanced functionality and personalization, such as remembering your
                  preferences and settings. If you disable these cookies, some features may not work properly.
                </p>
                <div className="mt-4 overflow-x-auto">
                  <table className="min-w-full border border-navy-700 rounded-lg overflow-hidden">
                    <thead className="bg-navy-800">
                      <tr>
                        <th className="px-4 py-3 text-left text-white font-medium">Cookie Name</th>
                        <th className="px-4 py-3 text-left text-white font-medium">Purpose</th>
                        <th className="px-4 py-3 text-left text-white font-medium">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-navy-700">
                      <tr>
                        <td className="px-4 py-3">user_preferences</td>
                        <td className="px-4 py-3">Stores display and accessibility preferences</td>
                        <td className="px-4 py-3">1 year</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">recent_searches</td>
                        <td className="px-4 py-3">Remembers recent job searches</td>
                        <td className="px-4 py-3">30 days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-medium text-gold-500 mt-6 mb-3">3.3 Analytics Cookies</h3>
                <p>
                  These cookies help us understand how visitors interact with our Service by collecting and
                  reporting information anonymously. This helps us improve our Service.
                </p>
                <div className="mt-4 overflow-x-auto">
                  <table className="min-w-full border border-navy-700 rounded-lg overflow-hidden">
                    <thead className="bg-navy-800">
                      <tr>
                        <th className="px-4 py-3 text-left text-white font-medium">Cookie Name</th>
                        <th className="px-4 py-3 text-left text-white font-medium">Purpose</th>
                        <th className="px-4 py-3 text-left text-white font-medium">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-navy-700">
                      <tr>
                        <td className="px-4 py-3">_ga</td>
                        <td className="px-4 py-3">Google Analytics - distinguishes users</td>
                        <td className="px-4 py-3">2 years</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">_ga_*</td>
                        <td className="px-4 py-3">Google Analytics - maintains session state</td>
                        <td className="px-4 py-3">2 years</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">_gid</td>
                        <td className="px-4 py-3">Google Analytics - distinguishes users</td>
                        <td className="px-4 py-3">24 hours</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-medium text-gold-500 mt-6 mb-3">3.4 Marketing Cookies</h3>
                <p>
                  These cookies may be set through our site by advertising partners. They may be used to build
                  a profile of your interests and show you relevant advertisements on other sites. We currently
                  use minimal marketing cookies, but this may change as we grow.
                </p>
                <div className="mt-4 overflow-x-auto">
                  <table className="min-w-full border border-navy-700 rounded-lg overflow-hidden">
                    <thead className="bg-navy-800">
                      <tr>
                        <th className="px-4 py-3 text-left text-white font-medium">Cookie Name</th>
                        <th className="px-4 py-3 text-left text-white font-medium">Purpose</th>
                        <th className="px-4 py-3 text-left text-white font-medium">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-navy-700">
                      <tr>
                        <td className="px-4 py-3">_fbp</td>
                        <td className="px-4 py-3">Facebook Pixel - tracks conversions</td>
                        <td className="px-4 py-3">3 months</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Other Tracking Technologies</h2>
                <p>
                  In addition to cookies, we may use other tracking technologies:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>
                    <strong className="text-white">Web Beacons (Pixel Tags):</strong> Small graphic images
                    embedded in emails or web pages that help us track email opens and website visits.
                  </li>
                  <li>
                    <strong className="text-white">Local Storage:</strong> Similar to cookies, but with larger
                    storage capacity. Used to store preferences and cached data to improve performance.
                  </li>
                  <li>
                    <strong className="text-white">Session Storage:</strong> Temporary storage that is cleared
                    when you close your browser.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Third-Party Cookies</h2>
                <p>
                  Some cookies are placed by third-party services that appear on our pages. We do not control
                  these third-party cookies and recommend you check the third party's website for more information
                  about their cookies and how to manage them.
                </p>
                <p className="mt-4">Third parties that may set cookies on our Service include:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>
                    <strong className="text-white">Google Analytics:</strong>{' '}
                    <a href="https://policies.google.com/privacy" className="text-gold-500 hover:text-gold-400" target="_blank" rel="noopener noreferrer">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <strong className="text-white">Vercel (Hosting):</strong>{' '}
                    <a href="https://vercel.com/legal/privacy-policy" className="text-gold-500 hover:text-gold-400" target="_blank" rel="noopener noreferrer">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <strong className="text-white">Stripe (Payments):</strong>{' '}
                    <a href="https://stripe.com/privacy" className="text-gold-500 hover:text-gold-400" target="_blank" rel="noopener noreferrer">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Managing Cookies</h2>

                <h3 className="text-xl font-medium text-gold-500 mt-6 mb-3">6.1 Browser Settings</h3>
                <p>
                  Most web browsers allow you to control cookies through their settings. You can typically:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>View what cookies are stored on your device</li>
                  <li>Delete all or specific cookies</li>
                  <li>Block cookies from all or specific websites</li>
                  <li>Block third-party cookies</li>
                  <li>Accept or decline cookies on a case-by-case basis</li>
                </ul>
                <p className="mt-4">
                  For more information on how to manage cookies in your browser, visit:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>
                    <a href="https://support.google.com/chrome/answer/95647" className="text-gold-500 hover:text-gold-400" target="_blank" rel="noopener noreferrer">
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" className="text-gold-500 hover:text-gold-400" target="_blank" rel="noopener noreferrer">
                      Mozilla Firefox
                    </a>
                  </li>
                  <li>
                    <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-gold-500 hover:text-gold-400" target="_blank" rel="noopener noreferrer">
                      Safari
                    </a>
                  </li>
                  <li>
                    <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-gold-500 hover:text-gold-400" target="_blank" rel="noopener noreferrer">
                      Microsoft Edge
                    </a>
                  </li>
                </ul>

                <h3 className="text-xl font-medium text-gold-500 mt-6 mb-3">6.2 Opt-Out Tools</h3>
                <p>You can also opt out of certain cookies using these tools:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>
                    <strong className="text-white">Google Analytics:</strong>{' '}
                    <a href="https://tools.google.com/dlpage/gaoptout" className="text-gold-500 hover:text-gold-400" target="_blank" rel="noopener noreferrer">
                      Google Analytics Opt-out Browser Add-on
                    </a>
                  </li>
                  <li>
                    <strong className="text-white">Network Advertising Initiative:</strong>{' '}
                    <a href="https://optout.networkadvertising.org/" className="text-gold-500 hover:text-gold-400" target="_blank" rel="noopener noreferrer">
                      NAI Opt-out Tool
                    </a>
                  </li>
                  <li>
                    <strong className="text-white">Digital Advertising Alliance:</strong>{' '}
                    <a href="https://optout.aboutads.info/" className="text-gold-500 hover:text-gold-400" target="_blank" rel="noopener noreferrer">
                      DAA Opt-out Tool
                    </a>
                  </li>
                </ul>

                <h3 className="text-xl font-medium text-gold-500 mt-6 mb-3">6.3 Impact of Disabling Cookies</h3>
                <p>
                  Please note that if you choose to disable cookies, some parts of our Service may not function
                  properly. Essential cookies cannot be disabled as they are required for the Service to work.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Do Not Track Signals</h2>
                <p>
                  Some browsers have a "Do Not Track" feature that signals to websites that you do not want
                  your online activity tracked. Our Service does not currently respond to "Do Not Track" signals
                  because there is no consistent industry standard for compliance.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">8. Updates to This Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in technology, regulation,
                  or our business practices. When we make changes, we will update the "Last Updated" date at the
                  top of this page. We encourage you to review this policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">9. Contact Us</h2>
                <p>
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
                </p>
                <div className="mt-4 p-6 bg-navy-900/50 border border-navy-700 rounded-lg">
                  <p className="font-semibold text-white">Patriot 7Six LLC</p>
                  <p className="text-gray-400">d/b/a Patriot Ops Center</p>
                  <p className="mt-2">5900 Balcones Drive #28228</p>
                  <p>Austin, TX 78731</p>
                  <p>United States</p>
                  <p className="mt-2">
                    Email:{' '}
                    <a href="mailto:support@patriot-ops.com" className="text-gold-500 hover:text-gold-400">
                      support@patriot-ops.com
                    </a>
                  </p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
