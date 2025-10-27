import React from 'react'
import HeroSection from '../components/HeroSection'
import GallerySection from '../components/GallerySection'
import VideosSection from '@/components/VideosSection'
import LoveLetterSection from '@/components/LetterSection'
import DomeSection from '@/components/DomeSection'

const page = () => {
  return (
    <div>
      <HeroSection />
      <GallerySection />
      <VideosSection/>
      <LoveLetterSection/>
      <DomeSection/>
    </div>
  )
}

export default page