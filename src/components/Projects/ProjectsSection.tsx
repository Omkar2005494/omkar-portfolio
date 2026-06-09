"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 120, scale: 0.7, filter: "blur(20px)" },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );

    gsap.fromTo(
      cardsRef.current?.children || [],
      {
        opacity: 0,
        y: 150,
        scale: 0.7,
        rotateX: 25,
        filter: "blur(20px)",
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        filter: "blur(0px)",
        duration: 1.2,
        stagger: 0.2,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-slate-900 via-emerald-950 to-slate-900 text-white px-8 py-24 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-400/5 via-transparent to-cyan-400/5" />
        <div className="absolute top-20 left-20 h-96 w-96 rounded-full bg-emerald-500 blur-3xl" />
        <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-cyan-500 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto">
        <h2 ref={headingRef} className="text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <p className="text-center text-zinc-300 mb-16 max-w-2xl mx-auto">
          A collection of projects focused on immersive web experiences, AI,
          and software engineering.
        </p>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 perspective-[1000px]">
          <div
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
              const y = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
              setTilt({ x, y });
            }}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
            style={{
              transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            }}
            className="group relative overflow-hidden bg-white/5 shadow-[0_0_50px_rgba(16,185,129,0.15)] backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:-translate-y-6 hover:scale-[1.04] hover:rotate-[0.5deg] hover:border-emerald-400/50 hover:shadow-[0_20px_100px_rgba(16,185,129,0.45)] transition-all duration-500 md:col-span-2 min-h-[420px]"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%]" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-8 left-10 w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
              <div className="absolute top-16 right-16 w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
              <div className="absolute bottom-16 left-20 w-2 h-2 rounded-full bg-violet-300 animate-pulse" />
              <div className="absolute bottom-10 right-10 w-1.5 h-1.5 rounded-full bg-emerald-200 animate-pulse" />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden border border-white/10 mb-6 bg-white p-2 shadow-xl">
              <img
                src="/projects/stackverse-banner.png"
                alt="StackVerse"
                className="w-full h-full object-contain rounded-xl transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-1"
              />
            </div>
            <div className="inline-flex px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold mb-4">
              FLAGSHIP PROJECT
            </div>
            <div className="mt-3 mb-3">
              <span className="inline-flex px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs">
                🚀 Active Development
              </span>
            </div>
            <h3 className="relative text-3xl font-bold mb-4">StackVerse</h3>
            <p className="text-zinc-400 mb-6">
              3D Gamified Data Structures & Algorithms learning platform with
              interactive worlds and missions.
            </p>
            <span className="text-sm text-emerald-400">React • Three.js • R3F</span>
            <div className="relative z-20 flex gap-3 mt-6 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs">
                🎮 6 Worlds
              </span>
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs">
                ⚡ XP System
              </span>
              <span className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-400 text-xs">
                🧠 DSA Learning
              </span>
            </div>
            <div className="relative z-20 flex gap-3 mt-6">
              <a
                href="https://stackverse-nu.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-500 text-black font-semibold"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/Omkar2005494/-stackverse"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl border border-white/20"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:-translate-y-6 hover:scale-[1.04] hover:rotate-[-0.5deg] hover:border-cyan-400/50 hover:shadow-[0_20px_80px_rgba(34,211,238,0.35)] transition-all duration-500 min-h-[420px]">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative text-5xl mb-6">🤖</div>
            <h3 className="relative text-3xl font-bold mb-4">AI Interview Coach</h3>
            <p className="text-zinc-400 mb-6">
              AI-powered interview preparation platform with feedback and mock
              interview simulations.
            </p>
            <span className="text-sm text-blue-400">AI • NLP • Full Stack</span>
            <div className="relative z-20 flex gap-3 mt-6">
              <a
                href="https://github.com/Omkar2005494"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-500 text-black font-semibold"
              >
                View Project
              </a>
              <a
                href="https://github.com/Omkar2005494"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl border border-white/20"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:-translate-y-6 hover:scale-[1.04] hover:rotate-[0.5deg] hover:border-violet-400/50 hover:shadow-[0_20px_80px_rgba(167,139,250,0.35)] transition-all duration-500 min-h-[420px]">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative text-5xl mb-6">🌐</div>
            <h3 className="relative text-3xl font-bold mb-4">3D Portfolio</h3>
            <div className="mb-4">
              <span className="inline-flex px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs">
                🌐 Live
              </span>
            </div>
            <p className="text-zinc-400 mb-6">
              Interactive portfolio featuring cinematic camera movement,
              parallax effects, and immersive 3D environments.
            </p>
            <span className="text-sm text-purple-400">Next.js • GSAP • Three.js</span>
            <div className="relative z-20 flex gap-3 mt-6">
              <a
                href="https://github.com/Omkar2005494/omkar-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-500 text-black font-semibold"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/Omkar2005494/omkar-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl border border-white/20"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}