'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/books', label: 'Books' },
    { href: '/bio', label: 'Bio' },
    { href: '/news', label: 'News & Events' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-sky-200 bg-white/95 backdrop-blur-xl text-slate-900">
      {/* subtle top glow line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + site name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-10">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400 via-cyan-400 to-blue-500 opacity-80 blur-[2px] group-hover:blur-[4px] group-hover:opacity-100 transition-all duration-300" />
              <div className="relative h-full w-full rounded-full bg-white flex items-center justify-center text-lg font-bold text-sky-700 shadow-[0_0_16px_rgba(56,189,248,0.45)]">
                📚
              </div>
            </div>
            <span className="hidden sm:inline-block text-sm sm:text-base font-semibold text-slate-900 group-hover:text-sky-700 transition-colors">
              Learn Through Stories
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-xs sm:text-sm font-medium text-slate-800 hover:text-sky-700 transition-colors"
              >
                <span className="relative">
                  {link.label}
                  <span className="absolute inset-x-0 -bottom-0.5 h-[2px] bg-gradient-to-r from-sky-400 to-cyan-300 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                </span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-sky-200 bg-white/90 text-slate-800 hover:bg-sky-50 hover:border-sky-300 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-sky-100 animate-fade-in-up">
            <div className="pt-2 space-y-1">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-800 hover:text-sky-700 hover:bg-sky-50 border border-transparent hover:border-sky-200 transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}