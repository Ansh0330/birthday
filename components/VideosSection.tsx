"use client";
import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";

const videoList = [
  { src: "https://github.com/Ansh0330/birthday/releases/download/v1.0/9.oct.mp4", caption: "Your smile = my peace 💖" },
  { src: "https://github.com/Ansh0330/birthday/releases/download/v1.0/10.oct.mp4", caption: "You glow, I melt ☀️" },
  { src: "https://github.com/Ansh0330/birthday/releases/download/v1.0/11.oct.mp4", caption: "My heart skips 🩷" },
  { src: "https://github.com/Ansh0330/birthday/releases/download/v1.0/12.oct.mp4", caption: "You make it all soft 🌸" },
  { src: "https://github.com/Ansh0330/birthday/releases/download/v1.0/13.oct.mp4", caption: "My favorite view 😍" },
  { src: "https://github.com/Ansh0330/birthday/releases/download/v1.0/14th.oct.mp4", caption: "Your laugh > everything 💕" },
  { src: "https://github.com/Ansh0330/birthday/releases/download/v1.0/15.oct.mp4", caption: "My calm, my chaos 🌷" },
  { src: "https://github.com/Ansh0330/birthday/releases/download/v1.0/16.oct.mp4", caption: "That smile tho 🌟" },
  { src: "https://github.com/Ansh0330/birthday/releases/download/v1.0/17.oct.mp4", caption: "You’re my lucky day 🍀" },
  { src: "https://github.com/Ansh0330/birthday/releases/download/v1.0/18.oct.MP4", caption: "Eyes that feel like home 🫶" },
  { src: "https://github.com/Ansh0330/birthday/releases/download/v1.0/19.oct.mp4", caption: "You, always you 💫" },
  { src: "https://github.com/Ansh0330/birthday/releases/download/v1.0/20.oct.mp4", caption: "Pure sunshine ☀️" },
  { src: "https://github.com/Ansh0330/birthday/releases/download/v1.0/21.oct.mp4", caption: "Heart goes boom 💓" },
  { src: "https://github.com/Ansh0330/birthday/releases/download/v1.0/22.Oct.mp4", caption: "Soft moments only 🌿" },
  { src: "https://github.com/Ansh0330/birthday/releases/download/v1.0/24.oct.mp4", caption: "You make life glow ✨" },
  { src: "https://github.com/Ansh0330/birthday/releases/download/v1.0/25.oct.mp4", caption: "My fav human 💞" },
  { src: "https://github.com/Ansh0330/birthday/releases/download/v1.0/26.oct.mp4", caption: "Still falling for you 🌹" },
  { src: "https://github.com/Ansh0330/birthday/releases/download/v1.0/27.oct.mp4", caption: "Endless crush 💘" },
  { src: "https://github.com/Ansh0330/birthday/releases/download/v1.0/28th.oct.mp4", caption: "You’re my calm 💗" },
  { src: "https://github.com/Ansh0330/birthday/releases/download/v1.0/29.oct.mp4", caption: "Always, you 💖" },
];

export default function InfiniteVideoCarousel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(1); // 1 for left→right, -1 for right→left
  const containerRef = useRef<HTMLDivElement | null>(null);
  const speed = 40; // pixels per second

  const cardWidth = 260;
  const gap = 24;

  // Smooth looping animation logic
  const [offset, setOffset] = useState(0);
  useAnimationFrame((t, delta) => {
    setOffset(
      (prev) =>
        (prev + (direction * delta * speed) / 1000) %
        ((cardWidth + gap) * videoList.length)
    );
  });

  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-b from-rose-50 via-white to-pink-100">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-[Great_Vibes] text-pink-700 mb-2">
          Reels of My Heart
        </h2>
        <p className="text-gray-600">
          Every edit tells a story that only my heart knows. ❤️
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setDirection(0)} // pause on section hover
        onMouseLeave={() => setDirection(direction === 0 ? 1 : direction)}
      >
        <motion.div
          style={{ x: -offset }}
          className="flex gap-6"
          onMouseEnter={() => setDirection(0)} // pause when hover container
          onMouseLeave={() => setDirection((prev) => (prev === 0 ? 1 : prev))}
        >
          {[...videoList, ...videoList].map((video, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-[260px] md:w-[350px] rounded-3xl overflow-hidden bg-black shadow-lg group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <video
                src={video.src}
                loop
                playsInline
                ref={(el) => {
                  if (hoveredIndex === i && el) el.play();
                  else if (el) el.pause();
                }}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
              />

              {/* Caption overlay */}
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 via-black/40 to-transparent text-center text-white py-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {video.caption}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Soft ambient glow */}
      <div className="absolute top-[40%] left-[-100px] w-[250px] h-[250px] bg-pink-300/30 blur-[100px]" />
      <div className="absolute bottom-[20%] right-[-120px] w-[280px] h-[250px] bg-rose-200/30 blur-[120px]" />
    </section>
  );
}
