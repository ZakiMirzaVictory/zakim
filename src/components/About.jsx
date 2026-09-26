export default function About() {
  const skills = ["JavaScript", "React", "PHP", "Laravel", "Tailwind CSS", "MySQL", "Git"];

  return (
    <section id="about" className="py-20 bg-slate-950 text-white px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Tentang Saya</h2>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-10 leading-relaxed">
          Saya adalah mahasiswa Teknik Rekayasa Perangkat Lunak yang senang mempelajari teknologi web modern, perancangan sistem, dan manajemen basis data.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <span key={index} className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-lg text-sm text-slate-200 font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}