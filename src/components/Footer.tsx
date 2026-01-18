export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Join Waitlist', href: '#waitlist' },
    ],
    resources: [
      { label: 'Veteran Research', href: 'https://vetresearch.patriot7six.com' },
      { label: 'VA Benefits', href: 'https://www.va.gov/benefits/' },
      { label: 'USAJOBS', href: 'https://www.usajobs.gov/' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  }

  return (
    <footer className="bg-navy-950 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Patriot Ops Center" className="h-10 w-auto" />
              <div>
                <span className="font-bold text-white">Patriot Ops</span>
                <span className="text-gold-400 font-semibold ml-1">Center</span>
              </div>
            </div>
            <p className="text-navy-400 text-sm mb-4">
              AI-powered career transition platform built by veterans, for veterans.
            </p>
            <p className="text-navy-500 text-sm italic">
              "This We'll Defend" — Your mission does not end with service, it evolves.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {links.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-navy-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {links.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-navy-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-navy-500 text-sm">
            &copy; {currentYear} Patriot Ops Center. All rights reserved.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-navy-900/60 rounded-full border border-navy-800">
            <div className="flex gap-0.5">
              <div className="w-1 h-4 bg-red-600 rounded-sm" />
              <div className="w-1 h-4 bg-white rounded-sm" />
              <div className="w-1 h-4 bg-red-600 rounded-sm" />
            </div>
            <span className="text-navy-400 text-sm">Proudly built in the USA</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
