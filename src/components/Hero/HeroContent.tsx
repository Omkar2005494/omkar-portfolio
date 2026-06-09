"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroContent() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(titleRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
    })
      .from(
        subtitleRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      );
  }, []);
  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
      <div className="text-center -translate-y-6 md:-translate-y-10 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl px-6 md:px-10 py-8 md:py-10 w-[92%] max-w-4xl shadow-2xl shadow-black/20">
        <h1 ref={titleRef} className="text-4xl md:text-6xl font-extrabold tracking-wider text-white drop-shadow-2xl">
          OMKAR BHANDARI
        </h1>

        <div className="mt-4 inline-flex px-6 py-3 rounded-full bg-emerald-500/25 border border-emerald-400/40 text-emerald-300 text-base font-bold shadow-[0_0_30px_rgba(16,185,129,0.35)]">
          🚀 Founder & Developer of StackVerse Labs
        </div>

        <p ref={subtitleRef} className="mt-5 text-base md:text-2xl text-white/90 font-medium">
          Full Stack Developer • Building Interactive Learning Experiences
        </p>

        <p className="mt-3 text-white/80 text-base md:text-lg mb-6">
          Building Interactive Learning Experiences, AI-Powered Applications, and Immersive 3D Products
        </p>

        <button
          ref={buttonRef}
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="mt-5 inline-flex px-8 md:px-10 py-3 md:py-4 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-bold hover:scale-110 hover:shadow-2xl transition-all duration-300 pointer-events-auto opacity-100"
        >
          Explore My Work
        </button>
      </div>

      <div className="absolute bottom-6 md:bottom-10 animate-bounce text-white/90 text-xs md:text-sm tracking-widest uppercase">
        ↓ Scroll
      </div>
    </div>
  );
}