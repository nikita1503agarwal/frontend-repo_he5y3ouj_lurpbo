export default function Categories({ items }) {
  return (
    <section id="categories" className="py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-white text-2xl font-bold mb-6">Popular categories</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((c) => (
            <div key={c.title} className="group bg-slate-800/60 ring-1 ring-white/10 rounded-2xl p-5 hover:ring-emerald-400/30 transition">
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
              </div>
              <div className="mt-4">
                <div className="text-white font-semibold">{c.title}</div>
                <div className="text-sm text-white/60">{c.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
