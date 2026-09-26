export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-slate-900 text-white px-6 pt-20">
      <div className="text-center max-w-3xl">
        <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20">
          Software Engineering Technology Student
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold mt-6 mb-4 tracking-tight">
          Halo, Saya <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Zaki Mirza Victory</span>
        </h1>
        <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed">
          Berfokus pada pengembangan aplikasi web, perekayasaan perangkat lunak, dan pembuatan solusi digital yang modern.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition shadow-lg shadow-blue-500/20">
            Lihat Proyek
          </a>
          <a href="#contact" className="border border-slate-700 hover:bg-slate-800 text-slate-300 font-medium px-6 py-3 rounded-lg transition">
            Hubungi Saya
          </a>
        </div>
      </div>
    </section>
  );
}