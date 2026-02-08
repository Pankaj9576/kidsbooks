import Link from 'next/link'
import Image from 'next/image'
import { BookOpen, Heart, Sparkles } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Teaching Through Stories',
    description:
      'Children absorb lessons naturally when woven into engaging narratives with relatable characters.',
  },
  {
    icon: Sparkles,
    title: 'Positive Role Models',
    description:
      'Each character demonstrates courage, kindness, and resilience—qualities every child can develop.',
  },
  {
    icon: BookOpen,
    title: 'Beautiful Illustrations',
    description:
      'Vibrant, captivating artwork that brings stories to life and sparks imagination in young minds.',
  },
]

export default function BioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-sky-100 to-sky-50 text-slate-900 relative overflow-hidden">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-sky-200/70 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 h-80 w-80 rounded-full bg-sky-300/60 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(191,219,254,0.9),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(191,219,254,0.7),_transparent_55%)]" />
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-4 sm:pt-6 lg:pt-8">
        {/* HERO SECTION */}
        <section className="relative mt-6 h-[360px] sm:h-[420px] lg:h-[460px] overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-[0_18px_70px_rgba(15,23,42,0.12)] backdrop-blur-2xl animate-fade-in-up">
          <Image
            src="/castle-background.jpg"
            alt="Magical castle background"
            fill
            className="object-cover opacity-90 animate-slow-zoom"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/92 via-white/88 to-sky-50/92" />

          <div className="relative h-full flex flex-col justify-center px-5 sm:px-8 lg:px-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 border border-sky-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700 mb-4">
              About the Author
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-3 text-slate-900">
              Meet{' '}
              <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-sky-700 bg-clip-text text-transparent">
                Ross Bonacci
              </span>
            </h1>

            <p className="max-w-2xl text-sm sm:text-base lg:text-lg text-slate-600">
              Sydney-based children&apos;s book author creating stories that inspire
              courage, kindness, and self-love—one magical adventure at a time.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/85 px-3 py-1 text-[11px] text-slate-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.9)]" />
                Inspiring young minds through stories
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[11px] text-amber-700">
                ✨ Positive affirmations &amp; life lessons
              </div>
            </div>
          </div>

          {/* Small floating info card */}
          <div className="absolute bottom-5 right-5">
            <div className="floating-card rounded-2xl bg-white/95 border border-sky-100 px-4 py-3 text-xs sm:text-sm text-slate-700 shadow-[0_14px_50px_rgba(15,23,42,0.12)]">
              <p className="font-semibold text-slate-900">Ross Bonacci</p>
              <p className="text-slate-500 text-[11px]">
                Sydney, Australia • Children&apos;s Author
              </p>
            </div>
          </div>
        </section>

        {/* AUTHOR IMAGE + ABOUT TEXT */}
        <section className="mt-10 sm:mt-12 lg:mt-14 grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Portrait */}
          <div
            className="relative animate-fade-in-up"
            style={{ animationDelay: '0.08s' }}
          >
            <div className="relative aspect-[4/5] sm:aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-[0_18px_70px_rgba(15,23,42,0.12)]">
              <Image
                src="/ross-bonacci-author.jpg"
                alt="Ross Bonacci - Children's Book Author"
                fill
                className="object-contain object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/92 via-white/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 text-xs sm:text-sm">
                <div>
                  <p className="font-semibold text-slate-900">Ross Bonacci</p>
                  <p className="text-slate-600 text-[11px]">
                    Author of the Rossi &amp; Lucy stories
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 rounded-full bg-white/90 border border-sky-200 px-2.5 py-1 text-[11px] text-sky-700">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Storyteller &amp; Mentor</span>
                </div>
              </div>
            </div>
          </div>

          {/* About text + button */}
          <div
            className="flex flex-col justify-center animate-fade-in-up"
            style={{ animationDelay: '0.16s' }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-slate-900">
              About <span className="text-sky-600">Ross</span>
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                Ross Bonacci is the author of the Rossi and Lucy story books for
                children. These educational stories are designed to teach young
                children beneficial thinking and behavioural patterns at a young age.
              </p>
              <p>
                Children learn best through examples and models. These beautifully
                illustrated stories with strong and positive affirmations, morals, and
                examples allow children to witness positive ways of being in the world.
              </p>
              <p>
                Ross believes the growth towards a brighter, healthier, and more
                peace-filled world depends on what we teach our children. When
                children learn they have the power to impact the world simply by
                loving themselves and respecting others, they become truly empowered.
              </p>
            </div>

            <div className="mt-6">
              <Link
                href="/books"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-600 via-sky-500 to-sky-700 px-6 sm:px-7 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-sky-200 transition-all hover:bg-sky-700 hover:shadow-[0_20px_60px_rgba(56,189,248,0.65)]"
              >
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Explore my books</span>
                <span className="text-lg group-hover:translate-x-0.5 transition-transform">
                  ➜
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* WRITING PHILOSOPHY */}
        <section
          className="mt-12 sm:mt-16 lg:mt-20 animate-fade-in-up"
          style={{ animationDelay: '0.24s' }}
        >
          <div className="rounded-3xl border border-sky-100 bg-white shadow-[0_18px_70px_rgba(15,23,42,0.1)] backdrop-blur-2xl px-5 py-7 sm:px-8 sm:py-9">
            <div className="text-center mb-8 sm:mb-9">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-slate-900">
                My Writing{' '}
                <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-sky-700 bg-clip-text text-transparent">
                  Philosophy
                </span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
                Every story is crafted with purpose—to plant seeds of positive values in
                young minds through magical adventures and memorable characters.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
              {values.map((value, idx) => {
                const IconComponent = value.icon
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-sky-100 bg-sky-50 px-4 py-5 sm:px-5 sm:py-6 shadow-[0_14px_50px_rgba(15,23,42,0.08)] hover:-translate-y-1.5 hover:border-sky-300 hover:shadow-[0_18px_70px_rgba(56,189,248,0.35)] transition-all duration-300"
                  >
                    <div className="flex items-center justify-center mb-4">
                      <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center shadow-lg shadow-sky-200">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 text-center mb-2.5">
                      {value.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 text-center leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          className="mt-12 sm:mt-16 lg:mt-20 mb-4 animate-fade-in-up"
          style={{ animationDelay: '0.32s' }}
        >
          <div className="rounded-3xl border border-sky-100 bg-gradient-to-br from-white via-sky-50 to-white shadow-[0_18px_70px_rgba(15,23,42,0.1)] px-5 py-8 sm:px-8 sm:py-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-slate-900">
              Ready to inspire your child?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mb-7">
              Discover stories that teach valuable life lessons through adventure,
              friendship, and fun—perfect for reading together or exploring independently.
            </p>
            <Link
              href="/books"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 text-white px-7 sm:px-9 py-3 sm:py-3.5 text-sm sm:text-base font-semibold shadow-lg shadow-sky-200 hover:bg-sky-700 transition-all"
            >
              Browse all books
              <span className="text-lg group-hover:translate-x-0.5 transition-transform">
                ✨
              </span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}