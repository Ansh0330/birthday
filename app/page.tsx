import React from "react";
import HeroSection from "../components/HeroSection";
import GallerySection from "../components/GallerySection";
import VideosSection from "@/components/VideosSection";
import LoveLetterSection from "@/components/LetterSection";
import DomeSection from "@/components/DomeSection";
import ReasonsSection from "@/components/ReasonsSection";
import Footer from "@/components/Footer";
import { CardScroll } from "@/components/CardScroll";
import { TextScroll } from "@/components/TextScroll";
import { TextScroll2 } from "@/components/TextScroll2";
import VideoMessageSection from "@/components/VideoMessageSection";

const page = () => {
  return (
    <div>
      <HeroSection />
      <TextScroll/>
      <CardScroll />
      <div className="h-screen bg-transparent "></div>
      <div className="h-screen bg-transparent "></div>
      <GallerySection />
      <VideosSection />
      <LoveLetterSection />
      <DomeSection />
      <VideoMessageSection/>
      <ReasonsSection />
      <TextScroll2 />
      <Footer />
    </div>
  );
};

export default page;
