export default function Projects() {
  const projects = [
    {
      title: "Motorcycle Wash POS System",
      desc: "Aplikasi POS (Point of Sales) dan manajemen operasional pencucian motor berbasis web.",
      tech: ["React", "Tailwind CSS", "Laravel"],
    },
    {
      title: "Early Disease Detection App",
      desc: "Sistem deteksi dini penyakit berbasis nyamuk menggunakan framework Laravel.",
      tech: ["Laravel", "PHP", "MySQL"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900 text-white px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Proyek Pilihan</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl hover:border-blue-500/50 transition">
              <h3 className="text-xl font-bold mb-2 text-blue-400">{proj.title}</h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">{proj.desc}</p>
              <div className="flex flex-wrap gap-2">
                {proj.tech.map((t, i) => (
                  <span key={i} className="text-xs bg-slate-900 text-slate-300 px-2.5 py-1 rounded">
                    {t}
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