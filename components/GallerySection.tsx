import React from "react";
import { ParallaxScrollSecond } from "../components/ui/parallax-scroll";

const images = [
  "https://i.ibb.co/SDbrcBtf/12.jpg",
  "https://i.ibb.co/YF7WK8dc/11.jpg",
  "https://i.ibb.co/wh0Y8PqM/28.jpg",
  "https://i.ibb.co/5Xx2LWVV/2.jpg",
  "https://i.ibb.co/wrgFTW5C/8.jpg",
  "https://i.ibb.co/0VWHMZPH/7.jpg",
  "https://i.ibb.co/1G8k9xcP/6.jpg",
  "https://i.ibb.co/Q3BzYZY4/3.jpg",
  "https://i.ibb.co/PGQFC3jX/5.jpg",
  "https://i.ibb.co/qMGnvQx8/4.jpg",
  "https://i.ibb.co/LDHxNYh3/21.jpg",
  "https://i.ibb.co/XrDm7cZn/19.jpg",
  "https://i.ibb.co/d0r7hWh3/18.jpg",
  "https://i.ibb.co/Q7CjKkvT/17.jpg",
  "https://i.ibb.co/9HDZjtnB/16.jpg",
  "https://i.ibb.co/TxBcgMYt/15.jpg",
  "https://i.ibb.co/fzT6zLWH/13.jpg",
  "https://i.ibb.co/5Xx2LWVV/2.jpg",
  "https://i.ibb.co/cKwzPmyx/27.jpg",
  "https://i.ibb.co/h1K2QKZt/26.jpg",
  "https://i.ibb.co/20jDGMhS/25.jpg",
  "https://i.ibb.co/fYDnnw8V/1.jpg",
  "https://i.ibb.co/d0t3w5gr/29.jpg",
  "https://i.ibb.co/Q3BzYZY4/3.jpg",
];

const GallerySection = () => {
  return (
    <section className="mt-20 py-34 bg-gradient-to-br from-white via-pink-100 to-rose-50">
      <div className="text-center mb-12">
        <h2 className="font-[Great_Vibes] text-5xl text-pink-700">
          Our Beautiful Memories
        </h2>
        <p className="text-gray-600 mt-2">
          Every photo is a heartbeat we shared ❤️
        </p>
      </div>

      <div>
        <ParallaxScrollSecond images={images} />
      </div>
    </section>
  );
};

export default GallerySection;
