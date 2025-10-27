"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const letterText =
  "Happiest, brightest, and most magical birthday to the most adorable yet annoying, sweetest yet shaitaan person of my life 🌎💫 Tum literally meri life ka chaos bhi ho aur peace bhi 😭 From the moment I wake up till I crash at night, you’re there — in every thought, every playlist, every mood swing. 🌸 Ab bata bhyii koi kaise na pighle itni masoomiyat dekh ke 😭… matlab ye koi fair game nahi hai bhyii 🫠 Tum meri dullest days ko Diwali lights se bhi zyada bright bana deti ho 🪔✨ Wishing you unlimited success, unshakable confidence, and the biggest victories this year 🎯Tum jitni strong ho na — honestly, duniya hila dogi ek din 💪😌 Kabhi kabhi lagta hai tum insaan nahi kisi angel ka hybrid version ho 😇Aur haan… muh jyada mat suja lena birthday pe 😤 warna cake nahi milega 🎂😂Aaj full enjoy karna — dance, chill, laugh loud, aur thoda ucchal kud bhi kar lena 🩷Zyada shaant reh gayi toh mai aake cheer karwa dunga khud 😎Bas ek baat yaad rakhna — duniya kitni bhi badal jaye, *mai hoon tumhare saath, har ek phase mein.*🫶Ho sakta hai kabhi na samjhu poori tarah, par kabhi chhodu bhi nahi 💌Tum mere liye sirf ek person nahi, poori feeling ho bhyii. 🌼And omg that smile 😭❤️ still my all-time fav — literally jaise hi dekhta hoon, mood 0 se 100 pe chala jaata hai instantly 💫Aur woh bholi si eyes 👀 uff… matlab itni pyari kaise ho sakti hai koi 😭Forehead bada, nose chhoti — cherry on the damn cake 🍒😂Bas esi hi rehna… cute, sweet, thodi rude, thodi pagal, aur meri sabse khaas insan 💖Mujhe pata hai tum har mushkil cheez asaan bana logi — because that’s what you do best: turn storms into sunshine. ☀️Mai shayad perfect nahi hoon, par tum mere liye sabse perfect chapter ho meri zindagi ka 📖💗Aur haan… agle saal May ke pehle Sunday ki shaam ko kaju katli ready rakhna 🫡😋Honestly, you are the most beautiful creation of the entire universe.Tum jese heart milna toh literally ek blessing hai bhyii 🕊️Agar mai novel likhta, tum hi meri main character hoti — the one that makes every reader fall in love 💞Thank you for being you — for existing, for smiling, for handling me 😭😂Bas yehi dua hai — khush rehna, hasi kabhi fade na ho, aur apne upar vishwas kabhi mat khona 🌷Happiest birthday again, meri sunshine, meri motivation, meri sabse pyaari insan 💫Tum jiyo 1000 saal, har saal ke din ho 50000 — itna hi pyaar hai tumse ❤️🧿Love you infinitely (aur thoda zyada bhi 😚)– Tumhara pagal aadmi 💞";

export default function LoveLetterSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 10%"],
  });

  const words = letterText.split(" ");
  const totalWords = words.length;

  return (
    <section className="relative min-h-screen flex flex-col items-center  bg-gradient-to-b from-rose-100 via-white to-pink-50 px-6 py-24 overflow-hidden">
      <motion.h2
        className="text-5xl font-[Great_Vibes] text-pink-700 mb-12"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        A Letter from My Heart 💌
      </motion.h2>
      <div
        ref={ref}
        className="max-w-2xl mx-auto text-[#5b0218] text-[1.25rem] leading-relaxed font-[Poppins] flex flex-wrap justify-center items-center gap-x-2 gap-y-3 text-center"
        style={{ wordBreak: "break-word", lineHeight: "2rem" }}
      >
        {words.map((word, i) => {
          // Each word starts faded, then animates in as scrollYProgress grows
          const start = (i / totalWords) * 0.7; // tuning: when this word should start
          const end = start + 0.17; // how long the reveal lasts
          const opacity = useTransform(
            scrollYProgress,
            [start, end],
            [0.25, 1]
          );
          const y = useTransform(scrollYProgress, [start, end], [18, 0]);
          return (
            <motion.span
              key={i}
              style={{ opacity, y, display: "inline-block" }}
              transition={{ duration: 0.45 }}
            >
              {word + " "}
            </motion.span>
          );
        })}
      </div>
      {/* Ambient glow */}
      <div className="absolute top-[40%] left-[-120px] w-[250px] h-[250px] bg-pink-300/30 blur-[110px]" />
      <div className="absolute bottom-[20%] right-[-120px] w-[250px] h-[230px] bg-rose-200/40 blur-[120px]" />
    </section>
  );
}
