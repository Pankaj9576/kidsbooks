import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section className="bg-sky-50 text-slate-900 pb-16 pt-4 sm:pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
        <div className="rounded-3xl border border-sky-100 bg-gradient-to-br from-white via-sky-50 to-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] px-5 py-8 sm:px-8 sm:py-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
            Ready to inspire your little ones?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mb-7">
            Explore Ross Bonacci&apos;s collection of heartwarming children&apos;s
            books, designed to teach courage, kindness, and the power of dreams.
          </p>
          <Link
            href="/books"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 text-white px-7 sm:px-9 py-3 sm:py-3.5 text-sm sm:text-base font-semibold shadow-lg shadow-sky-200 hover:bg-sky-700 transition-all"
          >
            <span>Browse all books</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}