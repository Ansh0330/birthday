"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, RefreshCw } from "lucide-react";


const reasons = [
  "Your smile makes my world brighter. 😊✨",
  "The way your popped out eyes looks at me. 👀💖",
  "Your voice feels like home. 🏡🎶",
  "You understand my weaknesses and still love me.🤐💞",
  "You make even the ordinary feel special. 🌸🌟",
  "Just your presence is my safe place. 🤗❤️",
  "Your laughter is my favorite melody. 😂🎵",
  "You never judge me, even at my worst. 🫂💛",
  "You complete my incomplete thoughts. 🧩💓",
  "You love me in ways I never knew I needed. 💌💖",
  "Your presence turns my bad days good. ☀️🌈",
  "You handle my bakwaas baatein like a pro. 🤝💗",
  "You don't get bored of me. 📝💝",
  "You talk to me even when conditions are tough. 😌🛡️",
  "Your love feels effortless, yet so deep. 🌊❤️",
  "The way you listen, even when I ramble. 👂💛",
  "Your heart is as beautiful as your face. 💖😊",
  "You bring out the best in me. 🌟💛",
  "Your love makes pain feel temporary. ⏳💓",
  "The way your voice heals everything. 😢🫂",
  "You always keep it real. 🌍💞",
  "Your love makes me believe in forever. ♾️💖",
  "You make me feel important without trying. 💌🌸",
  "Your kindness makes the world better. 🌎💛",
  "The way you say my name sounds different. 🗣️❤️",
  "You are my peace in this chaotic world. ☮️💖",
  "The way you trust me. 🤝💞",
  "You see beauty in my flaws. 🌸💓",
  "You always forgive me for my mistakes. 💖🌈",
  "The way you laugh at my stupid jokes. 😆💛",
  "You bring meaning to my existence. 🌟💖",
  "You make love feel like poetry. ✍️❤️",
  "The way you support my dreams. 🌙✨",
  "Your heartbeat is my favorite sound. 💓🎶",
  "You make me believe in magic. 🪄💖",
  "The way you laugh and giggle. 👁️❤️",
  "You make my day better. 💛🫂",
  "The way you inspire me to try new things. 📸💞",
  "You feel like my missing piece. 🧩❤️",
  "Your touch calms my storms. 🌧️💖",
  "You never give up on me even when I fail. 💪💛",
  "You make the nights feel less lonely. 🌙✨",
  "You inspire me to be a better person. 🌟💓",
  "Your love is my greatest strength. 💖🛡️",
  "You don't need words to make me feel loved. 🤍💫",
  "You make my dreams sweeter. 🍬💞",
  "Every song reminds me of you. 🎵❤️",
  "Your love is my safe haven. 🏡💛",
  "You make even silence feel comforting. 🤫💖",
  "You always support me in hardtimes. ⚔️🤝",
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
  "You believe in me when I don't. 🌟💞",
  "Your love makes my heart race. 💓🏃‍♂️",
  "You make pain feel temporary. ⏳💖",
  "You hold my heart gently. 💖🤲",
  "You see my scars and love me more. 💔💛",
  "Your love is a forever kind of thing. ♾️💞",
  "You love me on my worst days. 💖🫂",
  "The way you scold me for my mistakes. 🤗❤️",
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
  "You never replace me. 💛🤝",
  "You make every heartbeat count. 💓✨",
  "Your love is my strongest prayer. 🙏❤️",
  "You make me believe in soulmates. 💞🌌",
  "The way you make me crave more of you. 😘💖",
  "You are my heart's favorite place. ❤️🏡",
  "You make love feel effortless. 🌸💛",
  "You always keep it real. 🫂💖",
  "Your love is my quiet miracle. ✨💞",
  "You make every second with you precious. ⏰❤️",
  "You are the love story I always wanted. 📖💖",
  "I love you because you are you. 💛🌟",
];


export default function ReasonsFlipCards() {
  const [currentReasons, setCurrentReasons] = useState<string[]>([]);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [usedReasons, setUsedReasons] = useState<Set<string>>(new Set());


  // Get 12 random unique reasons
  const getRandomReasons = () => {
    const availableReasons = reasons.filter((r) => !usedReasons.has(r));


    // If all reasons used, reset
    if (availableReasons.length < 12) {
      setUsedReasons(new Set());
      return shuffleArray([...reasons]).slice(0, 12);
    }


    const selected = shuffleArray(availableReasons).slice(0, 12);
    setUsedReasons((prev) => new Set([...prev, ...selected]));
    return selected;
  };


  // Shuffle array helper
  const shuffleArray = (array: string[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };


  // Initialize on mount
  useEffect(() => {
    setCurrentReasons(getRandomReasons());
  }, []);


  // Handle card flip
  const handleFlip = (index: number) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };


  // Handle refresh
  const handleRefresh = () => {
    setFlippedCards(new Set());
    setCurrentReasons(getRandomReasons());
  };


  // Auto-refresh when all cards flipped
  useEffect(() => {
    if (flippedCards.size === 12 && currentReasons.length === 12) {
      const timer = setTimeout(() => {
        handleRefresh();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [flippedCards.size]);


  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 py-16 px-4">
      <div className="max-w-5xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center justify-center mb-4"
          >
            <Heart className="w-7 h-7 text-pink-500 fill-pink-500 mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
              Some Reasons Why I Love You
            </h2>
            <Heart className="w-7 h-7 text-pink-500 fill-pink-500 ml-2" />
          </motion.div>
          <p className="text-pink-600 text-base md:text-lg font-light mb-4">
            Click each card to reveal a reason
          </p>


          {/* Refresh Button */}
          <button
            onClick={handleRefresh}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-pink-400 to-fuchsia-400 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm md:text-base"
          >
            <RefreshCw className="w-4 h-4 md:w-5 md:h-5" />
            <span className="font-medium">New Reasons</span>
          </button>
        </div>


        {/* Cards Grid */}
        <div className="relative max-w-4xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
            {currentReasons.map((reason, index) => (
              <motion.div
                key={`${reason}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="perspective-1000"
              >
                <div
                  onClick={() => handleFlip(index)}
                  className={`relative w-full aspect-square cursor-pointer transition-transform duration-700 transform-style-3d ${
                    flippedCards.has(index) ? "rotate-y-180" : ""
                  }`}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: flippedCards.has(index)
                      ? "rotateY(180deg)"
                      : "rotateY(0deg)",
                  }}
                >
                  {/* Front of card */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-pink-400 to-fuchsia-400 rounded-xl md:rounded-2xl shadow-lg flex items-center justify-center backface-hidden"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <Heart className="w-8 h-8 md:w-10 md:h-10 text-white fill-white opacity-50" />
                  </div>


                  {/* Back of card */}
                  <div
                    className="absolute inset-0 bg-white rounded-xl md:rounded-2xl shadow-lg p-2 md:p-3 flex items-center justify-center backface-hidden"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <p className="text-xs md:text-sm text-gray-800 text-center leading-tight md:leading-relaxed">
                      {reason}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>


          {/* "And infinite more..." line */}
          <div className="absolute -bottom-10 right-2 md:right-4 text-pink-400 text-base md:text-lg italic font-medium">
            and infinite more...
          </div>
        </div>


        {/* Progress indicator */}
        <div className="text-center mt-14">
          <p className="text-pink-500 font-medium text-sm md:text-base">
            {flippedCards.size} / 12 reasons revealed
          </p>
        </div>
      </div>


      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
