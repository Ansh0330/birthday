"use client";
import React from "react";
import { Heart, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-pink-100 via-fuchsia-100 to-rose-100 py-12 px-6 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-pink-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-fuchsia-300/20 rounded-full blur-3xl" />
      
      <div className="relative max-w-4xl mx-auto text-center">
        {/* Top decorative hearts */}
        <div className="flex justify-center gap-4 mb-6">
          <Heart className="w-6 h-6 text-pink-400 fill-pink-400 animate-pulse" />
          <Sparkles className="w-6 h-6 text-fuchsia-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
          <Heart className="w-6 h-6 text-pink-400 fill-pink-400 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Main message */}
        <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent mb-4">
          Happy Birthday, My Love
        </h3>
        
        <p className="text-pink-600 text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
          This entire page was created with all my love, just for you. 
          Here's to many more beautiful memories together. 💖
        </p>

        {/* Divider */}
        <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent mx-auto mb-6" />

        {/* Footer credits */}
        <p className="text-pink-500 text-sm font-medium">
          Made with endless love by your dumbo(Ansh).
        </p>
        
        <p className="text-pink-400 text-xs mt-2">
          {new Date().getFullYear()} • Forever & Always
        </p>
      </div>
    </footer>
  );
}
