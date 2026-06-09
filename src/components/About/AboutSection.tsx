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
          Computer Science Engineering student and Founder & Developer of StackVerse Labs. I build educational technology products, immersive web experiences, and full-stack applications that make learning more engaging and accessible. Currently developing StackVerse, a gamified DSA learning platform featuring six interactive learning worlds, authentication, XP progression, achievements, missions, and visual algorithm demonstrations.
        </p>

        <div className="max-w-fit mx-auto mb-12 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-cyan-500/20 text-center">
          <span className="text-zinc-200 font-medium">
            🎓 Dayananda Sagar University • B.Tech CSE • <span className="text-cyan-300">2028</span>
          </span>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto perspective-[1200px]">
          <div className="bg-white/5 backdrop-blur-sm border border-emerald-500/20 rounded-3xl p-10 text-center hover:-translate-y-6 hover:scale-[1.06] hover:rotate-[1deg] hover:border-white/30 hover:shadow-[0_0_60px_rgba(16,185,129,0.25)] transition-all duration-500">
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-3xl font-bold">6</h3>
            <p className="text-zinc-400 mt-2">Learning Worlds</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-10 text-center hover:-translate-y-6 hover:scale-[1.06] hover:rotate-[1deg] hover:border-white/30 hover:shadow-[0_0_60px_rgba(34,211,238,0.25)] transition-all duration-500">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-3xl font-bold">StackVerse Labs</h3>
            <p className="text-zinc-400 mt-2">Founder & Developer</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-10 text-center hover:-translate-y-6 hover:scale-[1.06] hover:rotate-[1deg] hover:border-white/30 hover:shadow-[0_0_60px_rgba(59,130,246,0.25)] transition-all duration-500">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-3xl font-bold">Full Stack</h3>
            <p className="text-zinc-400 mt-2">Builder</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-violet-500/20 rounded-3xl p-10 text-center hover:-translate-y-6 hover:scale-[1.06] hover:rotate-[1deg] hover:border-white/30 hover:shadow-[0_0_60px_rgba(139,92,246,0.25)] transition-all duration-500">
            <div className="text-5xl mb-4">👑</div>
            <h3 className="text-3xl font-bold">StackVerse</h3>
            <p className="text-zinc-400 mt-2">Flagship Product</p>
          </div>
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10 text-white">
            Journey Timeline
          </h3>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <span className="text-emerald-400 font-bold">2025</span>
              <p className="mt-2 text-zinc-300">🚀 Started learning modern web development and React.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <span className="text-cyan-400 font-bold">2025</span>
              <p className="mt-2 text-zinc-300">🤖 Built AI and analytics projects while exploring full-stack development.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <span className="text-violet-400 font-bold">2026</span>
              <p className="mt-2 text-zinc-300">👑 Founded StackVerse Labs and created StackVerse.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <span className="text-amber-400 font-bold">2026</span>
              <p className="mt-2 text-zinc-300">🌐 Launched an immersive portfolio using Next.js, Three.js and GSAP.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}