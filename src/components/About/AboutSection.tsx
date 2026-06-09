

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      cardsRef.current?.children || [],
      {
        opacity: 0,
        y: 100,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.15,
        duration: 1,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-black via-slate-950 to-slate-900 text-white px-8 py-24 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-20 h-96 w-96 rounded-full bg-emerald-500 blur-3xl" />
        <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-cyan-500 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-emerald-300 via-cyan-300 to-violet-300 bg-clip-text text-transparent">
          About Me
        </h2>

        <p className="text-center text-zinc-300 max-w-3xl mx-auto text-lg leading-8 mb-16">
          I'm an Engineering Student passionate about building immersive web
          experiences, AI-powered applications, and educational technology.
          Currently developing StackVerse, a 3D gamified DSA learning platform
          that transforms data structures and algorithms into interactive worlds.
        </p>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-emerald-500/20 rounded-3xl p-10 text-center hover:-translate-y-4 hover:scale-[1.04] hover:shadow-[0_0_60px_rgba(16,185,129,0.25)] transition-all duration-500">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-3xl font-bold">5+</h3>
            <p className="text-zinc-400 mt-2">Projects Built</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-10 text-center hover:-translate-y-4 hover:scale-[1.04] hover:shadow-[0_0_60px_rgba(34,211,238,0.25)] transition-all duration-500">
            <div className="text-5xl mb-4">💻</div>
            <h3 className="text-3xl font-bold">15+</h3>
            <p className="text-zinc-400 mt-2">Technologies</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-10 text-center hover:-translate-y-4 hover:scale-[1.04] hover:shadow-[0_0_60px_rgba(59,130,246,0.25)] transition-all duration-500">
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-3xl font-bold">3+</h3>
            <p className="text-zinc-400 mt-2">Live Deployments</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-violet-500/20 rounded-3xl p-10 text-center hover:-translate-y-4 hover:scale-[1.04] hover:shadow-[0_0_60px_rgba(139,92,246,0.25)] transition-all duration-500">
            <div className="text-5xl mb-4">🎮</div>
            <h3 className="text-3xl font-bold">StackVerse</h3>
            <p className="text-zinc-400 mt-2">Flagship Project</p>
          </div>
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10 text-white">
            My Journey
          </h3>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <span className="text-emerald-400 font-bold">2025</span>
              <p className="mt-2 text-zinc-300">Started learning modern web development and React.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <span className="text-cyan-400 font-bold">2025</span>
              <p className="mt-2 text-zinc-300">Built AI projects and explored full-stack development.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <span className="text-violet-400 font-bold">2026</span>
              <p className="mt-2 text-zinc-300">Created StackVerse, a 3D gamified DSA learning platform.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <span className="text-amber-400 font-bold">2026</span>
              <p className="mt-2 text-zinc-300">Built an immersive portfolio using Next.js, Three.js and GSAP.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}