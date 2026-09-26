export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-white tracking-wide">
          Zakim<span className="text-blue-500">.dev</span>
        </a>
        <div className="flex gap-6 text-slate-300 font-medium text-sm">
          <a href="#about" className="hover:text-blue-400 transition">Tentang</a>
          <a href="#projects" className="hover:text-blue-400 transition">Proyek</a>
          <a href="#contact" className="hover:text-blue-400 transition">Kontak</a>
        </div>
      </div>
    </nav>
  );
}