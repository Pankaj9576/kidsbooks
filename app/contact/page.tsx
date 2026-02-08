'use client'

import React, { useState } from "react"
import emailjs from "@emailjs/browser"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString()
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )

      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })

      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error("Email send error:", error)
      alert("Failed to send message")
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-sky-100 to-sky-50 text-slate-900 flex items-center justify-center px-4 py-10 relative overflow-hidden">
      {/* Background gradients / blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-sky-200/70 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 h-80 w-80 rounded-full bg-sky-300/60 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(191,219,254,0.9),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(191,219,254,0.7),_transparent_55%)]" />
      </div>

      <div className="max-w-6xl w-full relative">
        {/* Outer glass card */}
        <div className="bg-white border border-sky-100 rounded-3xl shadow-[0_18px_70px_rgba(15,23,42,0.12)] backdrop-blur-2xl px-5 py-7 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-stretch">
            
            {/* LEFT: Direct contact + info */}
            <div className="flex flex-col justify-between gap-8 animate-fade-in-left">
              {/* Heading */}
              <div className="space-y-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 border border-sky-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700">
                  Let&apos;s connect
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                </span>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-slate-900">
                  Let&apos;s Talk About<br />
                  <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-sky-700 bg-clip-text text-transparent">
                    Books &amp; More
                  </span>
                </h1>

                <p className="text-slate-600 text-sm sm:text-base max-w-md">
                  Have questions, ideas, or want to invite me for a school visit or event?
                  You can reach out directly or use the contact form on the right.
                </p>
              </div>

              {/* Direct contact card */}
              <div className="rounded-2xl border border-sky-100 bg-sky-50 shadow-[0_14px_50px_rgba(15,23,42,0.08)] p-5 sm:p-6 floating-card">
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center text-sm font-bold text-white shadow-lg shadow-sky-200">
                      RB
                    </div>
                    <div>
                      <p className="font-semibold text-base sm:text-lg text-slate-900">Ross Bonacci</p>
                      <p className="text-xs text-slate-500">Author &amp; Educator</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-50 border border-emerald-300 px-3 py-1 text-[11px] text-emerald-700 font-medium">
                    Typically replies in 24h
                  </span>
                </div>

                <div className="space-y-4 text-sm sm:text-[15px]">
                  <div className="flex gap-3">
                    <div className="mt-0.5 h-8 w-8 rounded-full bg-sky-100 flex items-center justify-center text-lg">
                      📍
                    </div>
                    <div>
                      <p className="text-slate-900 font-semibold">Location</p>
                      <p className="text-slate-600">Sydney, Australia</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="mt-0.5 h-8 w-8 rounded-full bg-sky-100 flex items-center justify-center text-lg">
                      ✉️
                    </div>
                    <div className="min-w-0">
                      <p className="text-slate-900 font-semibold">Email</p>
                      <a
                        href="mailto:rossbonacci@gmail.com"
                        className="text-sky-700 hover:text-sky-800 break-all underline-offset-4 hover:underline transition-colors"
                      >
                        rossbonacci@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="mt-0.5 h-8 w-8 rounded-full bg-sky-100 flex items-center justify-center text-lg">
                      📱
                    </div>
                    <div>
                      <p className="text-slate-900 font-semibold">Phone</p>
                      <a
                        href="tel:+610408155232"
                        className="text-sky-700 hover:text-sky-800 underline-offset-4 hover:underline transition-colors"
                      >
                        +61 0408 155 232
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="rounded-xl border border-sky-100 bg-white p-3">
                    <div className="text-lg mb-1.5">💼</div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Schools &amp; Bulk Orders
                    </h4>
                    <p className="text-slate-600">
                      Special pricing for schools, libraries, and large orders.
                    </p>
                  </div>
                  <div className="rounded-xl border border-sky-100 bg-white p-3">
                    <div className="text-lg mb-1.5">🎤</div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Speaking &amp; Events
                    </h4>
                    <p className="text-slate-600">
                      Author talks, school visits, and community events.
                    </p>
                  </div>
                </div>

                {/* Social links */}
                <div className="mt-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-3">
                    Connect
                  </p>
                  <div className="flex gap-3">
                    {['📘', '🐦', '📷'].map((icon, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-sky-200 flex items-center justify-center text-lg text-sky-700 hover:bg-sky-50 hover:border-sky-300 transition-colors"
                      >
                        {icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Contact form */}
            <div className="animate-fade-in-right">
              <div className="h-full rounded-2xl bg-white border border-sky-100 shadow-[0_18px_70px_rgba(15,23,42,0.12)] p-5 sm:p-6 lg:p-7 relative overflow-hidden">
                {/* top gradient line */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300 to-transparent" />

                {submitted && (
                  <div className="mb-5 rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 flex items-center gap-2 success-badge">
                    <span className="text-base">✓</span>
                    <p>Message sent successfully! I&apos;ll get back to you soon.</p>
                  </div>
                )}

                <div className="mb-5">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-1 text-slate-900">
                    Send a quick message
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Fill out the form and I&apos;ll respond as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-slate-700 tracking-wide"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Alex from Sydney"
                      className="w-full rounded-xl bg-sky-50 border border-sky-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-300 transition-all shadow-inner"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-slate-700 tracking-wide"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl bg-sky-50 border border-sky-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-300 transition-all shadow-inner"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="block text-xs font-medium text-slate-700 tracking-wide"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me a bit about what you’re looking for..."
                      className="w-full rounded-xl bg-sky-50 border border-sky-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-300 transition-all resize-none shadow-inner"
                    />
                  </div>

                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={loading}
                      className="group relative w-full inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-sky-600 via-sky-500 to-sky-700 px-5 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-sky-200 transition-all hover:shadow-[0_20px_60px_rgba(56,189,248,0.65)] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-sky-300/0 via-white/30 to-sky-300/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-[-120%] group-hover:translate-x-[120%]" />
                      <span className="relative flex items-center gap-2">
                        {loading ? (
                          <>
                            <span className="h-4 w-4 border-2 border-white/60 border-t-transparent rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <span className="text-lg group-hover:translate-x-0.5 transition-transform">
                              ✉️
                            </span>
                          </>
                        )}
                      </span>
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-500 pt-1">
                    Your details are safe and will only be used to respond to your message.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}