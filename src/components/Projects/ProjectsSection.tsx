export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative min-h-screen bg-gradient-to-b from-slate-900 via-emerald-950 to-slate-900 text-white px-8 py-24 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-20 h-96 w-96 rounded-full bg-emerald-500 blur-3xl" />
        <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-cyan-500 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4">
          Featured Projects
        </h2>

        <p className="text-center text-zinc-400 mb-16 max-w-2xl mx-auto">
          A collection of projects focused on immersive web experiences, AI,
          and software engineering.
        </p>

        <div className="grid md:grid-cols-3 gap-8 perspective-[1000px]">
          <div className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 md:col-span-2 min-h-[320px]">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-40 rounded-2xl overflow-hidden border border-white/10 mb-6 bg-black/20">
              <img
                src="/projects/stackverse-banner.png"
                alt="StackVerse"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="relative text-3xl font-bold mb-4">StackVerse</h3>
            <p className="text-zinc-400 mb-6">
              3D Gamified Data Structures & Algorithms learning platform with
              interactive worlds and missions.
            </p>
            <span className="text-sm text-emerald-400">React • Three.js • R3F</span>
            <div className="flex gap-3 mt-6">
              <button className="px-4 py-2 rounded-xl bg-emerald-500 text-black font-semibold">
                View Project
              </button>
              <button className="px-4 py-2 rounded-xl border border-white/20">
                GitHub
              </button>
            </div>
          </div>

          <div className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative text-5xl mb-6">🤖</div>
            <h3 className="relative text-3xl font-bold mb-4">AI Interview Coach</h3>
            <p className="text-zinc-400 mb-6">
              AI-powered interview preparation platform with feedback and mock
              interview simulations.
            </p>
            <span className="text-sm text-blue-400">AI • NLP • Full Stack</span>
            <div className="flex gap-3 mt-6">
              <button className="px-4 py-2 rounded-xl bg-emerald-500 text-black font-semibold">
                View Project
              </button>
              <button className="px-4 py-2 rounded-xl border border-white/20">
                GitHub
              </button>
            </div>
          </div>

          <div className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative text-5xl mb-6">🌐</div>
            <h3 className="relative text-3xl font-bold mb-4">3D Portfolio</h3>
            <p className="text-zinc-400 mb-6">
              Interactive portfolio featuring cinematic camera movement,
              parallax effects, and immersive 3D environments.
            </p>
            <span className="text-sm text-purple-400">Next.js • GSAP • Three.js</span>
            <div className="flex gap-3 mt-6">
              <button className="px-4 py-2 rounded-xl bg-emerald-500 text-black font-semibold">
                View Project
              </button>
              <button className="px-4 py-2 rounded-xl border border-white/20">
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}