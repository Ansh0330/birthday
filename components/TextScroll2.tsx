"use client";
import { useRef } from "react";
import { CharacterV1 } from "./ui/skiper-ui/skiper31";
import { useScroll } from "framer-motion";

export const TextScroll2 = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <div
      ref={targetRef}
      className="relative box-border flex h-[210vh] items-center justify-center gap-[2vw] overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 p-[2vw]"
    >
      <div
        className="font-geist w-full max-w-4xl text-center text-6xl font-bold uppercase tracking-tighter text-black"
        style={{
          perspective: "500px",
        }}
      >
        {[
          "A",
          "N",
          "D",
          " ",
          "E",
          "N",
          "D",
          "S",
          " ",
          "W",
          "I",
          "T",
          "H",
          " ",
          "Y",
          "O",
          "U",
        ].map((char, index) => (
          <CharacterV1
            key={index}
            char={char}
            index={index}
            centerIndex={5}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
};
