import Link from 'next/link'
import Image from 'next/image'
import { Star } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-sky-100 to-sky-50 text-slate-900">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-sky-200/70 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 h-80 w-80 rounded-full bg-sky-300/60 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(191,219,254,0.9),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(191,219,254,0.7),_transparent_55%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* LEFT */}
          <div className="space-y-6 animate-fade-in-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 border border-sky-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700">
              Sydney-based children&apos;s author
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              Inspiring stories that teach{' '}
              <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-sky-700 bg-clip-text text-transparent">
                courage
              </span>{' '}
              &amp;{' '}
              <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-sky-700 bg-clip-text text-transparent">
                kindness
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-xl">
              Children learn best through example. Ross Bonacci&apos;s engaging
              picture books help children witness positive ways of being in the world.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="https://amazon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-7 sm:px-9 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-sky-200 hover:bg-sky-700 transition-all"
              >
                <span>→</span>
                <span>Shop books on Amazon</span>
              </Link>

              <Link
                href="/books"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-300 bg-white/80 px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-medium text-sky-700 hover:bg-sky-50 transition-all"
              >
                Browse full collection
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-200 mt-4">
              <div className="flex items-center gap-1.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-current text-amber-400"
                  />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-500">
                Loved by parents &amp; children across Australia
              </p>
            </div>
          </div>

          {/* RIGHT: author image */}
          <div className="animate-fade-in-right">
            <div className="relative aspect-[4/3] sm:aspect-[5/3] rounded-3xl overflow-hidden border border-sky-100 bg-white shadow-[0_18px_70px_rgba(15,23,42,0.12)]">
              <Image
                src="/ross-bonacci-author.jpg"
                alt="Ross Bonacci - Children's Book Author"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/30 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 text-xs sm:text-sm">
                <div>
                  <p className="font-semibold text-slate-900">Ross Bonacci</p>
                  <p className="text-slate-600 text-[11px]">
                    Author of heartwarming children&apos;s stories
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 rounded-full bg-white/90 border border-sky-200 px-3 py-1 text-[11px] text-sky-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                  Positive values in every story
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}