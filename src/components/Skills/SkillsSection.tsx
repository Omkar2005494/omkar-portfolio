

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Three.js", "React Three Fiber", "GSAP", "Tailwind CSS"],
    color: "emerald",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Firebase", "MongoDB"],
    color: "cyan",
  },
  {
    title: "Programming",
    skills: ["JavaScript", "TypeScript", "Python", "Java"],
    color: "violet",
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Figma"],
    color: "amber",
  },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

        <p className="text-center text-zinc-300 mb-16 max-w-2xl mx-auto">
          Technologies and tools I use to build immersive experiences, full-stack applications and AI-powered products.
        </p>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:-translate-y-4 hover:scale-[1.02] transition-all duration-500"
            >
              <h3 className="text-3xl font-bold mb-6">{group.title}</h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 hover:scale-110 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}