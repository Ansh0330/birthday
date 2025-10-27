"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaPause } from "react-icons/fa";
import { BsArrowDownCircle } from "react-icons/bs";

const HeroSection = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current
        .play()
        .catch((err) => console.warn("Autoplay blocked:", err));
    }
    setIsPlaying(!isPlaying);
  };

  // Optional: auto-play softly after a short delay to give cinematic feel
  useEffect(() => {
    const timer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.volume = 0.4;
        audioRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
      >
        <source src="https://github.com/Ansh0330/birthday/releases/download/v1.0/bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80"></div>

      {/* Text Animation */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute text-white text-5xl md:text-7xl lg:text-9xl
        top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-[50%] w-full text-center z-10 drop-shadow-2xl"
        style={{ fontFamily: "My font" }}
      >
        Happy Birthday
      </motion.h1>

      {/* Sub Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ delay: 1.5, duration: 1.2 }}
        className="absolute text-white/80 text-lg md:text-2xl text-center top-[58%] left-1/2 transform -translate-x-1/2 w-3/4 md:w-1/2 z-10 mt-10 font-semibold"
      >
        You make every moment so magical ✨
      </motion.p>

      {/* Music Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleAudio}
        className="absolute top-6 right-6 z-20 p-4 bg-white/20 hover:bg-white/40
        backdrop-blur-md rounded-full text-white transition shadow-lg"
        aria-label="Toggle background music"
      >
        {isPlaying ? <FaPause size={22} /> : <FaPlay size={22} />}
      </motion.button>

      {/* Scroll Down Icon */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() =>
          window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 cursor-pointer z-20"
      >
        <BsArrowDownCircle
          size={40}
          className="hover:text-pink-300 transition-colors"
        />
      </motion.div>

      {/* Background Audio */}
      <audio ref={audioRef} src="/bg.mp3" loop preload="auto" />
    </div>
  );
};

export default HeroSection;
