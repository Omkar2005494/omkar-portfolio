"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const skillGroups = [
  {
    title: "⚛️ Frontend",
    skills: ["React", "Next.js", "Three.js", "React Three Fiber", "GSAP", "Tailwind CSS"],
    color: "emerald",
  },
  {
    title: "☁️ Backend & Cloud",
    skills: ["Node.js", "Express.js", "Firebase", "Firestore", "MongoDB", "Vercel"],
    color: "cyan",
  },
  {
    title: "💻 Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java"],
    color: "violet",
  },
  {
    title: "📊 Analytics & Data",
    skills: ["Power BI", "RapidMiner", "SQL", "Machine Learning", "Data Analytics"],
    color: "blue",
  },
  {
    title: "🧠 Core CS",
    skills: ["Data Structures", "Algorithms", "DBMS", "OOP"],
    color: "pink",
  },
  {
    title: "🛠️ Tools",
    skills: ["Git", "GitHub", "VS Code", "Figma"],
    color: "amber",
  },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const accentColors = {
    emerald: "bg-emerald-400",
    cyan: "bg-cyan-400",
    violet: "bg-violet-400",
    blue: "bg-blue-400",
    pink: "bg-pink-400",
    amber: "bg-amber-400",
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      cardsRef.current?.children || [],
      {
        opacity: 0,
        y: 120,
        scale: 0.8,
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
      className="relative min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white px-8 py-24 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-20 h-96 w-96 rounded-full bg-emerald-500 blur-3xl" />
        <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-cyan-500 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-emerald-300 via-cyan-300 to-violet-300 bg-clip-text text-transparent">
          Skills Grove
        </h2>

        <div className="text-center mb-6">
          <div className="text-6xl font-bold bg-gradient-to-r from-emerald-300 via-cyan-300 to-violet-300 bg-clip-text text-transparent">
            20+
          </div>
          <p className="text-zinc-400">Technologies • Frameworks • Tools</p>
        </div>

        <p className="text-center text-zinc-300 mb-16 max-w-3xl mx-auto">
          Technologies, frameworks and tools I use to build educational products, immersive experiences, analytics solutions and full-stack applications.
        </p>

        <div ref={cardsRef} className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {skillGroups.map((group) => {
            const glowStyles = {
              emerald: "hover:shadow-[0_20px_80px_rgba(16,185,129,0.25)] hover:border-emerald-400/40",
              cyan: "hover:shadow-[0_20px_80px_rgba(34,211,238,0.25)] hover:border-cyan-400/40",
              violet: "hover:shadow-[0_20px_80px_rgba(167,139,250,0.25)] hover:border-violet-400/40",
              blue: "hover:shadow-[0_20px_80px_rgba(96,165,250,0.25)] hover:border-blue-400/40",
              pink: "hover:shadow-[0_20px_80px_rgba(236,72,153,0.25)] hover:border-pink-400/40",
              amber: "hover:shadow-[0_20px_80px_rgba(251,191,36,0.25)] hover:border-amber-400/40",
            };
            return (
              <div
                key={group.title}
                className={`group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 min-h-[280px] hover:-translate-y-6 hover:scale-[1.05] hover:rotate-[1deg] transition-all duration-500 ${glowStyles[group.color as keyof typeof glowStyles]}`}
              >
                <div
                  className={`absolute top-0 left-0 w-full h-1 rounded-t-3xl opacity-70 ${accentColors[group.color as keyof typeof accentColors]}`}
                />
                <h3 className="text-2xl font-bold mb-6">{group.title}</h3>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-5 py-3 text-sm font-medium rounded-full bg-white/10 border border-white/10 hover:bg-white/20 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}