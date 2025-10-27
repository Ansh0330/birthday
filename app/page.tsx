import React from 'react'
import HeroSection from '../components/HeroSection'
import GallerySection from '../components/GallerySection'
import VideosSection from '@/components/VideosSection'
import LoveLetterSection from '@/components/LetterSection'
import DomeSection from '@/components/DomeSection'
import ReasonsSection from '@/components/ReasonsSection'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
      <HeroSection />
      <GallerySection />
      <VideosSection/>
      <LoveLetterSection/>
      <DomeSection/>
      <ReasonsSection/>
      <Footer/>
    </div>
  )
}

export default page