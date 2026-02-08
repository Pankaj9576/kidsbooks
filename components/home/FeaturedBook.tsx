import Image from 'next/image'

export default function FeaturedBook() {
  const reasons = [
    {
      icon: '💙',
      title: 'Embracing individuality',
      description:
        "Teaches children that it's okay to be different and to follow their own unique passions.",
    },
    {
      icon: '⭐',
      title: 'Conquering fear',
      description:
        'A heartwarming lesson on overcoming stage fright and building the courage to shine.',
    },
    {
      icon: '🤝',
      title: 'The power of friendship',
      description:
        'Libby the Dancing Giraffe helps Dorothy achieve her dreams as an amazing friend.',
    },
  ]

  return (
    <section className="bg-white text-slate-900 py-14 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
        <div className="rounded-3xl border border-sky-100 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10 grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-8 lg:gap-10 items-center">
          {/* LEFT: text */}
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 border border-sky-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700">
              Featured book
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.9)]" />
            </span>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-1">
                Dorothy the Dancing Hippopotamus
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                A story of dreaming big and finding courage.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <h3 className="text-sm sm:text-base font-semibold text-slate-800 uppercase tracking-[0.18em]">
                Why parents &amp; children love this book
              </h3>

              <div className="space-y-4">
                {reasons.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-3 items-start rounded-2xl border border-sky-100 bg-sky-50 px-3.5 py-3 sm:px-4 sm:py-3.5"
                  >
                    <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-sky-100 flex items-center justify-center text-lg sm:text-xl">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-[15px] font-semibold text-slate-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-1">
              <a
                href="https://amazon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-7 sm:px-8 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-sky-200 hover:bg-sky-700 transition-all"
              >
                <span>📖</span>
                <span>Buy it now on Amazon</span>
              </a>
            </div>
          </div>

          {/* RIGHT: cover image */}
          <div className="relative">
            <div className="relative aspect-[3/4] w-full max-w-sm mx-auto rounded-3xl overflow-hidden border border-sky-100 bg-sky-50 shadow-[0_18px_70px_rgba(15,23,42,0.08)]">
              <Image
                src="/dorothy-hippopotamus-cover.png"
                alt="Dorothy the Dancing Hippopotamus"
                fill
                className="object-contain"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/10 to-transparent" />

              <div className="absolute top-3 left-3">
                <span className="rounded-full bg-sky-100 border border-sky-200 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-700">
                  New favourite
                </span>
              </div>

              <div className="absolute bottom-3 right-3 rounded-2xl bg-white/95 border border-sky-100 px-3 py-2 text-[10px] text-slate-700">
                Perfect for bedtime &amp; classroom story time
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}