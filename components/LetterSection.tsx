"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const letterText =
  `Happiest, brightest, and most magical birthday to the most adorable, sweetest, and thodi si badmaash 😼 person of my life 💫🌎. Bhyii tum literally meri life ki sabse badi peace ho. From the moment I wake up till I crash at night, you’re always there... har thought mai, har moment mai. Tum mere mind mai morning walk krti rehti ho😭😂 ...Ab batao bhyii koi kaise na pighle itni masoomiyat dekh ke 🫠 ...Ye toh bilkul fair game hi nahi hai 😭 ...Tum mere dullest days ko Diwali lights se bhi zyada bright bana deti ho🪔✨....Wishing you unlimited success, unshakable confidence, and the biggest victories ahead 🎯.  Kabhi kisi baat ki tension ya self-doubt mat lena ..tum jitni strong ho na, duniya hila dogi ek din 💪😌..Orr haan, birthday par muh mtt banana bilkul bhi 😤 vrna cake cancel 🎂😂. Aaj full enjoy karna... dance kro, chill kro, aunty ke sang birthday vlog bnao🩷...Bas ek baat yaad rakhna ki duniya chahe kitni bhi badal jaye, mai hoon tumhare sang, har phase mai 🫶...Kabhi kabhi shayad naa samjhu poori tarah, par kabhi akele nahi chrdunga.Tum mere liye sirf ek person nahi, poori feeling ho ❤️...Orr uper se that smile omgg 😭💫 still my all-time fav hai...Vo bholi si popped-out eyes 👀, cute nosy, big forehead aur itte pyare daant 😝 ...matlab itni pyari kaise ho sakti hai koi 😭...Bas esi hi rehna tum ...cute, sweet, thodi gusse wali, thodi chntuu, aur meri sabse khaas insan 💖...Mai shayad perfect nahi hoon, par tum mere liye sabse perfect ho 📖💗...Honestly, you’re the most beautiful soul I’ve ever known. Tum jaisa heart milna literally ek blessing hai 🕊️...Agar mai novel likhta, tum meri main character hoti the one who makes everyone fall in love just with her vibes💞....Thank you for being you for existing, for smiling, for handling me 😭😂..Tum best ho yaar. Saare ups and downs saath mein paar kar lenge ..bas khudpe aur thoda sa merpe bhi vishwas rakhna ..Orr ek baat, tum bahut real ho. Jo dil mai hai, wahi muh par. No sugar coating, no fake mask and that’s what makes you truly special ✨...Chahe messy mood ho ya saj-dhaj ke ready look tumse zyada beautiful, elegant, aur natural koi nahi 💫...Unlimited pappis and hugs to you baby 🤍..Love you a lot (aur usse bhi zyada 😚)..Hamesha happy raho, smile fade na ho, aur apne upar vishwas kabhi mat khona 🌷 Happiest birthday again, meri sunshine, meri motivation, meri sabse pyaari insan 💫 I Love you so so soooo much ❤️ `;

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
