

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[80vh] bg-gradient-to-b from-slate-900 to-black text-white px-8 py-24 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-20 h-96 w-96 rounded-full bg-emerald-500 blur-3xl" />
        <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-cyan-500 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-300 via-cyan-300 to-violet-300 bg-clip-text text-transparent">
          Let's Build Something Amazing
        </h2>

        <p className="text-zinc-300 text-lg max-w-2xl mx-auto mb-16">
          Interested in collaborating, discussing ideas, or building innovative projects? Feel free to reach out.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <a
            href="https://github.com/Omkar2005494"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:-translate-y-3 hover:shadow-[0_0_60px_rgba(16,185,129,0.25)] transition-all duration-500"
          >
            <div className="text-5xl mb-4">🐙</div>
            <h3 className="text-2xl font-bold">GitHub</h3>
            <p className="text-zinc-400 mt-2">View my projects</p>
          </a>

          <a
            href="mailto:omakrbahndari431@gmail.com"
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:-translate-y-3 hover:shadow-[0_0_60px_rgba(34,211,238,0.25)] transition-all duration-500"
          >
            <div className="text-5xl mb-4">📧</div>
            <h3 className="text-2xl font-bold">Email</h3>
            <p className="text-zinc-400 mt-2">Get in touch</p>
          </a>

          <a
            href="https://www.linkedin.com/in/omkarbhandari-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:-translate-y-3 hover:shadow-[0_0_60px_rgba(139,92,246,0.25)] transition-all duration-500"
          >
            <div className="text-5xl mb-4">💼</div>
            <h3 className="text-2xl font-bold">LinkedIn</h3>
            <p className="text-zinc-400 mt-2">Connect professionally</p>
          </a>
        </div>
      </div>
    </section>
  );
}