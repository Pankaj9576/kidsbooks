import { Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import HeroSection from '@/components/home/HeroSection'
import FeaturedBook from '@/components/home/FeaturedBook'
import WhyParentsLoveIt from '@/components/home/WhyParentsLoveIt'
import Testimonials from '@/components/home/Testimonials'
import FinalCTA from '@/components/home/FinalCTA'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedBook />
      <WhyParentsLoveIt />
      <Testimonials />
      <FinalCTA />
    </div>
  )
}
