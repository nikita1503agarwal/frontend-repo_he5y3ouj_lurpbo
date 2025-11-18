import { ShoppingCart, Star } from "lucide-react";

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="group bg-slate-800/60 backdrop-blur rounded-2xl ring-1 ring-white/10 overflow-hidden hover:ring-emerald-400/30 transition">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={product.image_url}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-white font-semibold leading-tight">{product.title}</h3>
            <div className="text-xs text-emerald-300/80 mt-1">{product.category}</div>
          </div>
          <div className="text-white font-bold">€{product.price.toFixed(2)}</div>
        </div>
        {product.sugar_free && (
          <div className="mt-2 inline-flex items-center gap-1 text-emerald-300 text-xs">
            <Star className="w-3 h-3" /> Sugar free
          </div>
        )}
        <p className="mt-3 text-sm text-white/70 line-clamp-2">{product.description}</p>
        <button
          onClick={() => onAdd(product)}
          className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition"
        >
          <ShoppingCart className="w-4 h-4" /> Add to cart
        </button>
      </div>
    </div>
  );
}
