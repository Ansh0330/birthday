"use client";
import React from "react";
import { motion } from "framer-motion";
import { Heart, Play } from "lucide-react";

export default function VideoMessageSection() {
  return (
    <section className="min-h-screen mt-20 flex items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-fuchsia-50 py-20 px-4">
      <div className="max-w-5xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <Heart className="w-7 h-7 text-pink-500 fill-pink-500 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
              A Special Message for You
            </h2>
            <Heart className="w-7 h-7 text-pink-500 fill-pink-500 ml-3" />
          </div>
          <p className="text-pink-600 text-lg font-light mt-4 max-w-2xl mx-auto">
            Words from hearts, captured just for you.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-10 border border-pink-100"
        >
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-pink-300/30 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-fuchsia-300/30 rounded-full blur-3xl -z-10" />

          {/* Video Player */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-pink-100 to-fuchsia-100">
            <video
              controls
              className="w-full h-full object-cover"
              poster="/path-to-your-thumbnail.jpg" // Optional: Add a beautiful thumbnail
            >
              <source src="https://github.com/Ansh0330/birthday/releases/download/v1.0/bg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Bottom decorative text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-8 text-pink-400 italic text-sm"
          >
            Made with all my love, just for you 💕
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
