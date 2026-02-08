import { Star, ExternalLink } from 'lucide-react'
import Image from 'next/image'

const books = [
  {
    id: 1,
    storyType: 'A DAYTIME STORY',
    title: 'Rossi and Lucy Go to the Beach',
    description:
      'Accompany Rossi and Lucy on their adventure as they head for a day out on the beach and learn about safety in the sun.',
    lesson: 'Teaches sun safety and outdoor awareness',
    status: 'available',
    coverImage: '/books/rossi-lucy-beach.jpg',
  },
  {
    id: 2,
    storyType: 'A BEDTIME STORY',
    title: 'The King, the Queen and the Mouse',
    description:
      "This story takes readers into a magical fairy tale world of a royal family, just like any other, except one thing. The king and queen's daughter is a mouse! As the mouse princess learns to come to terms with her difference, children not only learn that it's okay to be different, but also the important lesson of being true to oneself.",
    lesson: 'Teaches self-acceptance and celebrating differences',
    status: 'available',
    coverImage: '/books/king-queen-mouse.jpg',
  },
  {
    id: 3,
    storyType: 'A BEDTIME STORY',
    title: 'Eddie the Dragon',
    description:
      "The most unlikely of friends become the best of friends. This book is part of Rossi & Lucy's Bedtime Stories.",
    lesson: 'Celebrates friendship and acceptance',
    status: 'available',
    coverImage: '/books/eddie-dragon.jpg',
  },
  {
    id: 4,
    storyType: 'A DAYTIME STORY',
    title: 'Show and Tell with Rossi & Lucy',
    description:
      "Accompany Rossi and Lucy on their adventure as they head to their school's Show and Tell to talk about their animals.",
    lesson: 'Encourages confidence in public speaking',
    status: 'available',
    coverImage: '/books/show-tell.jpg',
  },
]

export default function BooksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-sky-100 to-sky-50 text-slate-900 relative overflow-hidden">
      {/* Background blobs / gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-sky-200/70 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 h-80 w-80 rounded-full bg-sky-300/60 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(191,219,254,0.9),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(191,219,254,0.7),_transparent_55%)]" />
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 space-y-10 sm:space-y-14">
        {/* HERO */}
        <section className="animate-fade-in-up">
          <div className="rounded-3xl border border-sky-100 bg-white shadow-[0_18px_70px_rgba(15,23,42,0.12)] backdrop-blur-2xl px-5 py-7 sm:px-8 sm:py-9 text-center space-y-4 sm:space-y-5">
            <span className="inline-flex items-center justify-center rounded-full bg-sky-100 border border-sky-200 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700">
              Children&apos;s Book Collection
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-slate-900">
              Stories That Inspire{' '}
              <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-sky-700 bg-clip-text text-transparent">
                Young Hearts
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto">
              Children learn best through example. These beautifully illustrated
              stories with strong positive affirmations and morals help them
              witness positive ways of being in the world.
            </p>
          </div>
        </section>

        {/* FROM THE AUTHOR */}
        <section
          className="animate-fade-in-up"
          style={{ animationDelay: '0.08s' }}
        >
          <div className="rounded-3xl border border-sky-100 bg-white shadow-[0_18px_70px_rgba(15,23,42,0.12)] backdrop-blur-2xl px-5 py-7 sm:px-8 sm:py-9 text-center">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center text-3xl sm:text-4xl mb-4 shadow-lg shadow-sky-200">
                📚
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-3">
                From the Author
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-3xl italic">
                &quot;The growth towards a brighter, healthier, and more
                peace-filled world depends upon what we teach our children. If
                this generation learns they have the power to impact the world
                simply by loving themselves and respecting others, they will be
                truly empowered.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* BOOKS GRID */}
        <section
          className="animate-fade-in-up"
          style={{ animationDelay: '0.16s' }}
        >
          <div className="flex items-end justify-between gap-3 mb-5 sm:mb-6">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                All Stories
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Perfect for daytime adventures and bedtime magic.
              </p>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-500">
              {books.length} book{books.length !== 1 ? 's' : ''} available now
            </p>
          </div>

          {/* Responsive grid */}
          <div className="grid gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
            {books.map((book, index) => (
              <article
                key={book.id}
                className="group relative flex flex-col rounded-2xl border border-sky-100 bg-white backdrop-blur-xl shadow-[0_14px_50px_rgba(15,23,42,0.08)] hover:-translate-y-1.5 hover:border-sky-300 hover:shadow-[0_18px_70px_rgba(56,189,248,0.35)] transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${0.16 + index * 0.03}s` }}
              >
                {/* Cover */}
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={book.coverImage || '/placeholder.svg'}
                    alt={book.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

                  {/* Story type */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-sky-50/95 border border-sky-300 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-sky-700">
                      {book.storyType}
                    </span>
                  </div>

                  {/* Status */}
                  <div className="absolute top-3 right-3">
                    {book.status === 'available' ? (
                      <span className="rounded-full bg-emerald-50 border border-emerald-300 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">
                        Available Now
                      </span>
                    ) : (
                      <span className="rounded-full bg-amber-50 border border-amber-300 px-2.5 py-1 text-[10px] font-semibold text-amber-700">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col px-4 pt-4 pb-4 sm:px-5 sm:pt-5 sm:pb-5">
                  {/* Title + stars */}
                  <div className="mb-2.5">
                    <h3 className="text-sm sm:text-base lg:text-[15px] font-semibold text-slate-900 mb-1.5">
                      {book.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-amber-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 fill-current text-amber-400"
                        />
                      ))}
                      <span className="ml-1 text-[10px] text-slate-500">
                        Loved by kids &amp; parents
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3 line-clamp-4">
                    {book.description}
                  </p>

                  {/* Lesson */}
                  <div className="mt-auto">
                    <div className="rounded-xl border border-sky-100 bg-sky-50 px-3 py-2.5 sm:px-3.5 sm:py-3 flex gap-2.5 items-start mb-3">
                      <span className="text-lg sm:text-xl flex-shrink-0">✨</span>
                      <p className="text-[11px] sm:text-xs text-sky-700 font-medium">
                        {book.lesson}
                      </p>
                    </div>

                    {/* Amazon button */}
                    <a
                      href="https://amazon.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/button inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-600 via-sky-500 to-sky-700 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-sky-200 hover:shadow-[0_18px_55px_rgba(56,189,248,0.7)] transition-all"
                    >
                      <span>Get it on Amazon</span>
                      <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          className="animate-fade-in-up"
          style={{ animationDelay: '0.24s' }}
        >
          <div className="rounded-3xl border border-sky-100 bg-gradient-to-br from-white via-sky-50 to-white shadow-[0_18px_70px_rgba(15,23,42,0.12)] px-5 py-8 sm:px-8 sm:py-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-slate-900">
              Start your child&apos;s journey today
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mb-7">
              Give your little ones stories that teach courage, kindness, and
              self-love. All books are available now on Amazon.
            </p>
            <a
              href="https://amazon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 text-white px-7 sm:px-9 py-3 sm:py-3.5 text-sm sm:text-base font-semibold shadow-lg shadow-sky-200 hover:bg-sky-700 transition-all"
            >
              <span>Browse all books on Amazon</span>
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}