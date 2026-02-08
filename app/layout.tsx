import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: 'Learn Through Stories - Inspiring Children\'s Books',
  description: 'Discover heartwarming children\'s books by Ross Bonacci that teach courage, kindness, and important life lessons through engaging stories.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased bg-gradient-to-b from-sky-50 to-white`}>
        <ScrollToTop />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
