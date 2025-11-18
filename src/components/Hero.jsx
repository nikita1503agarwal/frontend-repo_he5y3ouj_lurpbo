import { ShoppingBag } from "lucide-react";

export default function Hero({ onShopClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,197,94,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.15),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-sm font-medium ring-1 ring-emerald-400/20">
              100% sugar free • Health-first
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              Health & Sugar‑Free Goodness by MoreNutrition
            </h1>
            <p className="mt-5 text-lg text-emerald-100/90 leading-relaxed">
              Discover protein powders, vitamins, syrups and flavor drops designed to fuel your day without added sugar. Clean ingredients, great taste.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button onClick={onShopClick} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 text-white font-semibold shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 transition">
                <ShoppingBag className="w-5 h-5" /> Shop products
              </button>
              <a href="#categories" className="px-5 py-3 rounded-xl bg-white/5 text-white/90 font-semibold hover:bg-white/10 transition ring-1 ring-white/10">
                Browse categories
              </a>
            </div>
            <div className="mt-6 text-emerald-200/70 text-sm">
              Free shipping from €40 • 30‑day happiness guarantee
            </div>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1200&auto=format&fit=crop" alt="Healthy sugar-free products" className="rounded-3xl ring-1 ring-white/10 shadow-2xl shadow-emerald-500/10" />
            <div className="absolute -bottom-6 -left-6 bg-slate-900/80 backdrop-blur rounded-2xl p-4 ring-1 ring-white/10">
              <div className="text-2xl font-bold text-white">Sugar Free</div>
              <div className="text-emerald-300 text-sm">Great taste, zero compromise</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
