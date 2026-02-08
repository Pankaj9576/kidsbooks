import Link from 'next/link'
import { BookOpen, ExternalLink } from 'lucide-react'

export default function Footer() {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/books', label: 'Books' },
    { href: '/bio', label: 'Bio' },
    { href: '/news', label: 'News & Events' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <footer className="mt-10 bg-slate-950 border-t border-sky-500/30 relative overflow-hidden">
      {/* top glow line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/70 to-transparent" />

      {/* subtle bg blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
        <div className="absolute -bottom-24 -left-10 h-40 w-40 rounded-full bg-sky-500/15 blur-3xl" />
        <div className="absolute -top-24 -right-10 h-40 w-40 rounded-full bg-blue-500/15 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16 animate-fade-in-up">
        <div className="grid gap-10 lg:gap-12 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1.1fr)]">
          {/* Brand + description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-10 w-10">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-sky-400 via-cyan-400 to-blue-500 opacity-80 blur-[2px]" />
                <div className="relative h-full w-full rounded-xl bg-slate-950 flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.6)]">
                  <BookOpen className="w-5 h-5 text-sky-100" />
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-50">
                  Ross Bonacci
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Children&apos;s book author
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
              Children learn best through example. These engaging books allow
              children to witness positive ways of being in the world, teaching
              courage, kindness, and the power of dreams.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-100 mb-4">
              Quick links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-slate-400 hover:text-sky-100 transition-colors"
                  >
                    <span className="h-[3px] w-[3px] rounded-full bg-slate-600 group-hover:bg-sky-400 transition-colors" />
                    <span className="relative">
                      {link.label}
                      <span className="absolute inset-x-0 -bottom-0.5 h-px bg-gradient-to-r from-sky-400 to-cyan-300 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / external */}
          <div>
            <h4 className="text-sm font-semibold text-slate-100 mb-4">
              Stay connected
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <p>
                For school visits, bulk orders, or speaking events, reach out
                anytime.
              </p>

              <div className="space-y-1.5">
                <p className="text-slate-400 text-[11px] uppercase tracking-[0.16em]">
                  Email
                </p>
                <a
                  href="mailto:rossbonacci@gmail.com"
                  className="text-sky-200 hover:text-sky-100 underline-offset-4 hover:underline transition-colors break-all"
                >
                  rossbonacci@gmail.com
                </a>
              </div>

              <div className="space-y-1.5">
                <p className="text-slate-400 text-[11px] uppercase tracking-[0.16em]">
                  Featured on
                </p>
                <a
                  href="https://amazon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/50 bg-slate-950/60 px-3 py-1.5 text-[11px] font-medium text-sky-100 hover:border-sky-300 hover:bg-slate-900 transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>View books on Amazon</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Learn Through Stories. All rights
            reserved.
          </p>
          <p className="text-slate-600">
            Crafted with care to inspire courage, kindness &amp; self-love.
          </p>
        </div>
      </div>
    </footer>
  )
}