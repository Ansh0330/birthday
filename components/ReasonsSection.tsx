"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

const reasons = [
  "Your smile makes my world brighter. 😊✨",
  "The way your eyes speak when words fail. 👀💖",
  "Your voice feels like home. 🏡🎶",
  "You understand my silence. 🤐💞",
  "You make even the ordinary feel special. 🌸🌟",
  "The warmth of your hug is my safe place. 🤗❤️",
  "Your laughter is my favorite melody. 😂🎵",
  "You never judge me, even at my worst. 🫂💛",
  "You complete my incomplete thoughts. 🧩💓",
  "You love me in ways I never knew I needed. 💌💖",
  "Your presence turns my bad days good. ☀️🌈",
  "The way you hold my hand makes me feel secure. 🤝💗",
  "You remember the little things about me. 📝💝",
  "You know my fears yet never make me feel weak. 😌🛡️",
  "Your love feels effortless, yet so deep. 🌊❤️",
  "The way you listen, even when I ramble. 👂💛",
  "Your heart is as beautiful as your face. 💖😊",
  "You bring out the best in me. 🌟💛",
  "Your patience with me, even when I’m difficult. ⏳💓",
  "The way you wipe away my tears. 😢🫂",
  "You never let me feel alone. 🌍💞",
  "Your love makes me believe in forever. ♾️💖",
  "You make me feel important without trying. 💌🌸",
  "Your kindness makes the world better. 🌎💛",
  "The way you say my name sounds different. 🗣️❤️",
  "You are my peace in this chaotic world. ☮️💖",
  "The way you trust me without conditions. 🤝💞",
  "You see beauty in my flaws. 🌸💓",
  "You remind me to love myself too. 💖🌈",
  "The way you laugh at my stupid jokes. 😆💛",
  "You bring meaning to my existence. 🌟💖",
  "You make love feel like poetry. ✍️❤️",
  "The way you support my dreams. 🌙✨",
  "Your heartbeat is my favorite sound. 💓🎶",
  "You make me believe in magic. 🪄💖",
  "The way you look at me with love. 👁️❤️",
  "You love me even when I’m unlovable. 💛🫂",
  "The way you remember our special moments. 📸💞",
  "You feel like my missing piece. 🧩❤️",
  "Your touch calms my storms. 🌧️💖",
  "You never give up on me. 💪💛",
  "You make the nights feel less lonely. 🌙✨",
  "You inspire me to be a better person. 🌟💓",
  "Your love is my greatest strength. 💖🛡️",
  "You don’t need words to make me feel loved. 🤍💫",
  "You make my dreams sweeter. 🍬💞",
  "Every song reminds me of you. 🎵❤️",
  "Your love is my safe haven. 🏡💛",
  "You make even silence feel comforting. 🤫💖",
  "You never let me fight my battles alone. ⚔️🤝",
  "Your presence is the best gift. 🎁💓",
  "You never let me feel invisible. 👀💖",
  "You bring color to my dull days. 🌈💛",
  "Your love is my greatest adventure. 🗺️❤️",
  "You know my unspoken words. 🫥💞",
  "You love me, not just my happiness. 💖🌸",
  "You never make me feel less. 💛✨",
  "Your love makes life worth it. 🌟❤️",
  "You make distance feel smaller. 🌍💓",
  "Your love is louder than any fear. 📢💖",
  "You are my constant in an uncertain world. 🌌💛",
  "You believe in me when I don’t. 🌟💞",
  "Your love makes my heart race. 💓🏃‍♂️",
  "You make pain feel temporary. ⏳💖",
  "You hold my heart gently. 💖🤲",
  "You see my scars and love me more. 💔💛",
  "Your love is a forever kind of thing. ♾️💞",
  "You love me on my worst days. 💖🫂",
  "The way you fit perfectly in my arms. 🤗❤️",
  "You never make love feel heavy. 🌸💛",
  "You turn ordinary moments into magic. ✨💖",
  "You make even the stars jealous. 🌟💞",
  "You bring warmth to my cold heart. 🔥💛",
  "Your love feels like a soft whisper. 🤍💫",
  "You are my reason to believe in love. ❤️🌈",
  "The way your love never fades. ♾️💖",
  "You are my always and forever. 🌟💞",
  "Your love is my favorite feeling. 💛❤️",
  "The way your presence feels like home. 🏡💖",
  "You make even my demons quiet. 😈🤍",
  "Your love is my favorite memory. 💭💞",
  "The way you make every goodbye hard. 😢💖",
  "You make life a little more beautiful. 🌸💛",
  "You bring hope to my darkest days. 🌅💖",
  "Your love is my greatest treasure. 💎❤️",
  "The way you make me feel alive. 🌟💛",
  "You make forever feel too short. ⏳💞",
  "Your love is my sweetest addiction. 🍯💖",
  "You never let me feel replaceable. 💛🤝",
  "You make every heartbeat count. 💓✨",
  "Your love is my strongest prayer. 🙏❤️",
  "You make me believe in soulmates. 💞🌌",
  "The way you make me crave more of you. 😘💖",
  "You are my heart’s favorite place. ❤️🏡",
  "You make love feel effortless. 🌸💛",
  "You never let go, even when I push away. 🫂💖",
  "Your love is my quiet miracle. ✨💞",
  "You make every second with you precious. ⏰❤️",
  "You are the love story I always wanted. 📖💖",
  "I love you because you are you. 💛🌟"
];


export default function ReasonsCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const delay = 5000; // 5 seconds auto slide

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setDirection(1);
      setCurrent((prevIndex) =>
        prevIndex === reasons.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [current]);

  const prevReason = () => {
    setDirection(-1);
    setCurrent(current === 0 ? reasons.length - 1 : current - 1);
  };

  const nextReason = () => {
    setDirection(1);
    setCurrent(current === reasons.length - 1 ? 0 : current + 1);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 py-16 px-4 mt-20">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center justify-center mb-4"
          >
            <Heart className="w-8 h-8 text-pink-500 fill-pink-500 mr-2" />
            <h2 className="text-5xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
              100 Reasons , Why I Love You
            </h2>
            <Heart className="w-8 h-8 text-pink-500 fill-pink-500 ml-2" />
          </motion.div>
          <p className="text-pink-600 text-lg font-light">
            Every reason, a piece of my heart
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 md:p-16 border border-pink-100">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-pink-200/30 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-fuchsia-200/30 rounded-full blur-3xl -z-10" />

          {/* Reason Display */}
          <div className="relative h-48 md:h-40 flex items-center justify-center overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full text-center"
              >
                <p className="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed px-4">
                  {reasons[current]}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-8 mt-12">
            <button
              onClick={prevReason}
              className="group relative p-4 bg-gradient-to-br from-pink-400 to-fuchsia-400 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="Previous reason"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
                {current + 1}
              </span>
              <span className="text-sm text-pink-400 font-medium">
                of {reasons.length}
              </span>
            </div>

            <button
              onClick={nextReason}
              className="group relative p-4 bg-gradient-to-br from-pink-400 to-fuchsia-400 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="Next reason"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {reasons.slice(0, Math.min(reasons.length, 10)).map((_, idx) => (
              <div
                key={idx}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === current % 10
                    ? "w-8 bg-gradient-to-r from-pink-400 to-fuchsia-400"
                    : "w-2 bg-pink-200"
                }`}
              />
            ))}
          </div>

          {/* "And infinite more..." line */}
          <div className="absolute bottom-6 right-8 text-pink-400 text-lg italic font-medium">
            and infinite more...
          </div>
        </div>
      </div>
    </section>
  );
}
