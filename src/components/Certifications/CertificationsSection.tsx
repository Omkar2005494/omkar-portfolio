"use client";

const certifications = [
  {
    icon: "🚀",
    badge: "FLAGSHIP ACHIEVEMENT",
    year: "2026",
    title: "Founder & Developer, StackVerse Labs",
    accent: "border-t-cyan-400",
    description:
      "Gamified DSA platform with 6 learning worlds, authentication, achievements, XP progression, and live deployment.",
  },
  {
    icon: "☁️",
    badge: "CERTIFICATION",
    year: "2026",
    title: "AWS Cloud Practitioner Training",
    accent: "border-t-orange-400",
    description:
      "Learned AWS cloud fundamentals, core services, security concepts, and deployment models.",
  },
  {
    icon: "📊",
    badge: "CERTIFICATION",
    year: "2026",
    title: "Power BI Analytics",
    accent: "border-t-blue-400",
    description:
      "Built interactive dashboards, reports, and data visualizations for business insights.",
  },
  {
    icon: "🤖",
    badge: "CERTIFICATION",
    year: "2026",
    title: "Machine Learning with RapidMiner",
    accent: "border-t-purple-400",
    description:
      "Applied machine learning workflows and predictive analytics to real datasets.",
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Credentials & Milestones
          </h2>
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
            Certifications, achievements, and key milestones that reflect my growth as a developer, builder, and founder.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {certifications.map((item) => (
            <div
              key={item.title}
              className={`group bg-white/5 backdrop-blur-sm border border-white/10 ${item.accent} border-t-4 rounded-3xl p-8 hover:-translate-y-4 hover:scale-[1.03] hover:shadow-[0_20px_80px_rgba(34,211,238,0.18)] transition-all duration-500 ${item.badge === "FLAGSHIP ACHIEVEMENT" ? "xl:col-span-1 ring-2 ring-cyan-400/40 shadow-[0_20px_80px_rgba(34,211,238,0.22)]" : ""}`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs tracking-widest text-cyan-300 font-semibold">
                  {item.badge}
                </span>
                <span className="text-xs text-zinc-500">{item.year}</span>
              </div>

              <div className="text-5xl mb-6">{item.icon}</div>

              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>

              {item.badge === "FLAGSHIP ACHIEVEMENT" && (
                <p className="text-cyan-300 text-sm font-medium mb-4">
                  6 Learning Worlds • Live Product
                </p>
              )}

              <p className="text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}