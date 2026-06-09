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
          Let's Build the Future Together
        </h2>

        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 mb-8">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for Internships & Collaborations
        </div>

        <p className="text-zinc-300 text-lg max-w-2xl mx-auto mb-16">
          Open to internships, collaborations, educational technology projects, and full-stack development opportunities.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          <a
            href="https://github.com/Omkar2005494"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 min-h-[220px] hover:-translate-y-3 hover:shadow-[0_0_60px_rgba(16,185,129,0.25)] transition-all duration-500"
          >
            <div className="mb-4 flex justify-center">
              <svg width="52" height="52" viewBox="0 0 24 24" fill="currentColor" className="text-emerald-300">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.699-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.481A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold">GitHub</h3>
            <p className="text-zinc-400 mt-2">View my projects</p>
          </a>

          <a
            href="mailto:omakrbahndari431@gmail.com"
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 min-h-[220px] hover:-translate-y-3 hover:shadow-[0_0_60px_rgba(34,211,238,0.25)] transition-all duration-500"
          >
            <div className="mb-4 flex justify-center text-cyan-300 text-5xl">✉️</div>
            <h3 className="text-2xl font-bold">Email</h3>
            <p className="text-zinc-400 mt-2">Get in touch</p>
          </a>

          <a
            href="https://www.linkedin.com/in/omkarbhandari-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 min-h-[220px] hover:-translate-y-3 hover:shadow-[0_0_60px_rgba(139,92,246,0.25)] transition-all duration-500"
          >
            <div className="mb-4 flex justify-center">
              <svg width="52" height="52" viewBox="0 0 24 24" fill="currentColor" className="text-violet-300">
                <path d="M19 3A2 2 0 0121 5V19A2 2 0 0119 21H5A2 2 0 013 19V5A2 2 0 015 3H19ZM8.34 17V10.5H6.18V17H8.34ZM7.26 9.61A1.25 1.25 0 107.26 7.11 1.25 1.25 0 007.26 9.61ZM17.82 17V13.43C17.82 11.52 16.8 10.35 15.05 10.35C14.21 10.35 13.55 10.81 13.14 11.46V10.5H10.98V17H13.14V13.79C13.14 12.94 13.3 12.12 14.35 12.12C15.38 12.12 15.39 13.08 15.39 13.84V17H17.82Z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold">LinkedIn</h3>
            <p className="text-zinc-400 mt-2">Connect professionally</p>
          </a>

          <a
            href="/resume/Omkar_Bhandari_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 min-h-[220px] hover:-translate-y-3 hover:shadow-[0_0_60px_rgba(251,191,36,0.25)] transition-all duration-500"
          >
            <div className="mb-4 flex justify-center text-amber-300 text-5xl">📄</div>
            <h3 className="text-2xl font-bold">Resume</h3>
            <p className="text-zinc-400 mt-2">Download CV</p>
          </a>
        </div>

        <div className="mt-20 pt-10 border-t border-white/10 text-center">
          <p className="text-zinc-400 mb-3">
            Built with Next.js • Three.js • GSAP
          </p>

          <p className="text-white font-semibold">
            © 2026 Omkar Bhandari
          </p>

          <p className="text-zinc-500 mt-2">
            Founder & Developer, StackVerse Labs
          </p>
        </div>
      </div>
    </section>
  );
}