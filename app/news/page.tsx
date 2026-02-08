import Link from 'next/link'

const updates = [
  {
    id: 1,
    title: 'The Farting Elephant',
    status: 'coming',
    description:
      "Mr. Elephant loves eating chocolate ice cream but can't stop farting and has an upset tummy. Join Mr. Elephant as he learns the importance of healthy eating after seeing Doctor Rhinoceros.",
    lesson: 'Teaches children about healthy eating habits',
  },
  {
    id: 2,
    title: 'Dorothy the Dancing Hippopotamus',
    status: 'available',
    description:
      'Join Dorothy as she learns how to dance and overcomes her fear of dancing on the big stage with the help of Libby the Dancing Giraffe.',
    lesson: 'Builds confidence and courage to follow dreams',
  },
  {
    id: 3,
    title: 'Red Cat Homework (aged for 5+)',
    status: 'coming',
    description:
      'Completing your homework can be very challenging for children in their early years. Red Cat is a loveable cat that loves studying, assisting and encouraging others.',
    lesson: 'Teaches children to embrace challenges and find joy in learning',
  },
]

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-sky-100 to-sky-50 text-slate-900 relative overflow-hidden flex items-start justify-center px-4 py-12 sm:px-6 lg:px-8">
      {/* Background gradients / blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-sky-200/70 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 h-80 w-80 rounded-full bg-sky-300/60 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(191,219,254,0.9),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(191,219,254,0.7),_transparent_55%)]" />
      </div>

      <div className="max-w-5xl w-full space-y-10 sm:space-y-12">
        {/* HERO CARD */}
        <section className="bg-white border border-sky-100 rounded-3xl shadow-[0_18px_70px_rgba(15,23,42,0.12)] backdrop-blur-2xl px-5 py-7 sm:px-8 sm:py-9 animate-fade-in-up">
          <div className="flex flex-col items-center text-center gap-5 sm:gap-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 border border-sky-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700">
              🗓 News &amp; Events
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-slate-900">
              Exciting New Stories{' '}
              <span className="block bg-gradient-to-r from-sky-600 via-sky-500 to-sky-700 bg-clip-text text-transparent">
                Coming to Life Soon
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
              Each story is crafted to help children learn important values through fun,
              engaging characters and heartwarming adventures.
            </p>
          </div>
        </section>

        {/* UPDATES LIST */}
        <section className="space-y-6 sm:space-y-7">
          {updates.map((update, index) => (
            <article
              key={update.id}
              className="group relative overflow-hidden rounded-2xl border border-sky-100 bg-white backdrop-blur-xl px-5 py-6 sm:px-7 sm:py-7 shadow-[0_14px_50px_rgba(15,23,42,0.08)] hover:-translate-y-1.5 hover:border-sky-300 hover:shadow-[0_18px_70px_rgba(56,189,248,0.35)] transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${0.1 + index * 0.12}s` }}
            >
              {/* subtle shine on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute -inset-x-16 -top-20 h-28 bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-[-2deg]" />
              </div>

              <div className="relative space-y-4 sm:space-y-5">
                {/* TOP ROW: status + small meta */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2">
                    {update.status === 'coming' ? (
                      <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-semibold text-amber-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(252,211,77,0.9)]" />
                        Coming Soon
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-semibold text-emerald-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                        Available Now
                      </span>
                    )}

                    <span className="hidden sm:inline-flex text-[11px] uppercase tracking-[0.18em] text-slate-500">
                      Story #{update.id.toString().padStart(2, '0')}
                    </span>
                  </div>

                  <span className="text-[11px] text-slate-500">
                    {update.status === 'coming'
                      ? 'In production'
                      : 'Ready to order / explore'}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                  {update.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {update.description}
                </p>

                {/* LESSON HIGHLIGHT */}
                <div className="relative mt-3 sm:mt-4 rounded-xl border border-sky-100 bg-sky-50 px-4 py-3.5 sm:px-5 sm:py-4 flex gap-3">
                  <div className="flex-shrink-0 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center text-lg text-white shadow-lg shadow-sky-200">
                    ✨
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Core Lesson
                    </p>
                    <p className="text-sm sm:text-[15px] text-sky-800 font-medium">
                      {update.lesson}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* CONTACT CTA */}
        <section className="bg-gradient-to-br from-white via-sky-50 to-white border border-sky-100 rounded-3xl shadow-[0_18px_70px_rgba(15,23,42,0.12)] backdrop-blur-2xl px-5 py-8 sm:px-8 sm:py-9 animate-fade-in-up">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <span className="inline-flex items-center justify-center rounded-full bg-sky-100 border border-sky-200 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700">
              Get in touch
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900">
              Let&apos;s Talk About{' '}
              <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-sky-700 bg-clip-text text-transparent">
                Books &amp; More
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Questions about books, bulk orders for schools, or speaking events?
              I&apos;d love to hear from you and help bring these stories to your readers.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-600 via-sky-500 to-sky-700 px-8 sm:px-10 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-sky-200 transition-all hover:shadow-[0_20px_60px_rgba(56,189,248,0.65)]"
              >
                <span className="relative">
                  Get in touch
                  <span className="absolute inset-x-0 -bottom-px h-px bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
                <span className="text-lg group-hover:translate-x-0.5 transition-transform">
                  ➜
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}