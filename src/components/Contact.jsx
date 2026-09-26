export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-950 text-white px-6 text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Mari Bekerja Sama</h2>
        <p className="text-slate-400 mb-8">
          Saya selalu terbuka untuk diskusi proyek, kolaborasi, atau peluang kerja.
        </p>
        <a 
          href="mailto:zakimirzavictory@gmail.com" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition"
        >
          Kirim Email
        </a>
      </div>
    </section>
  );
}