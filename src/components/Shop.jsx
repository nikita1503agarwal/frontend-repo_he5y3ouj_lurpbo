import { useEffect, useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import { Search, SlidersHorizontal, ShoppingCart } from "lucide-react";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/products`);
        const data = await res.json();
        setProducts(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    const loadCats = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/categories`);
        const data = await res.json();
        setCategories(data);
      } catch {}
    };
    load();
    loadCats();
  }, []);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCat = category ? p.category?.toLowerCase() === category.toLowerCase() : true;
      const q = query.trim().toLowerCase();
      const matchesQ = q
        ? p.title.toLowerCase().includes(q) ||
          (p.description || "").toLowerCase().includes(q) ||
          (p.tags || []).some((t) => t.toLowerCase().includes(q))
        : true;
      return matchesCat && matchesQ;
    });
  }, [products, query, category]);

  const addToCart = (product) => {
    setCart((prev) => {
      const idx = prev.findIndex((i) => i.product_id === product.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx].quantity += 1;
        return copy;
      }
      return [
        ...prev,
        {
          product_id: product.id,
          title: product.title,
          price: product.price,
          quantity: 1,
        },
      ];
    });
  };

  const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);

  const checkout = async () => {
    if (cart.length === 0) return;
    const name = prompt("Your name");
    const email = prompt("Your email");
    const address = prompt("Shipping address");
    if (!name || !email || !address) return;
    const res = await fetch(`${API_BASE}/api/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, address, items: cart }),
    });
    const data = await res.json();
    alert(`Order received! Total: €${data.total}`);
    setCart([]);
  };

  return (
    <section id="shop" className="relative py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="text-2xl font-bold text-white">Shop</div>
          <div className="inline-flex items-center gap-2 text-white/80">
            <ShoppingCart className="w-5 h-5" />
            <span>
              {cart.length} items • <span className="font-semibold">€{total.toFixed(2)}</span>
            </span>
            <button
              onClick={checkout}
              className="ml-3 px-4 py-2 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-600"
            >
              Checkout
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="md:col-span-3 flex items-center gap-3 bg-slate-800/60 ring-1 ring-white/10 rounded-xl px-4 py-3">
            <Search className="w-5 h-5 text-white/60" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search protein, syrups, vitamins…"
              className="w-full bg-transparent text-white placeholder-white/40 outline-none"
            />
          </div>
          <div className="flex items-center gap-3 bg-slate-800/60 ring-1 ring-white/10 rounded-xl px-4">
            <SlidersHorizontal className="w-5 h-5 text-white/60" />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-transparent text-white outline-none py-3"
            >
              <option className="bg-slate-800" value="">All Categories</option>
              {categories.map((c) => (
                <option className="bg-slate-800" key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        {loading ? (
          <div className="text-white/80">Loading products…</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} onAdd={addToCart} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
