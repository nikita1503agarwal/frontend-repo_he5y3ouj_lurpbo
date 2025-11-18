import { useRef } from "react";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Shop from "./components/Shop";

function App() {
  const shopRef = useRef(null);
  const scrollToShop = () => shopRef.current?.scrollIntoView({ behavior: "smooth" });

  const cats = [
    {
      title: "Protein",
      subtitle: "Whey, vegan & clear",
      image:
        "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Vitamins",
      subtitle: "Daily essentials",
      image:
        "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Syrups",
      subtitle: "Zero sugar toppings",
      image:
        "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Flavor Drops",
      subtitle: "Calorie‑free taste",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Hero onShopClick={scrollToShop} />
      <Categories items={cats} />
      <div ref={shopRef}>
        <Shop />
      </div>
      <footer className="py-12 text-center text-white/60">
        © {new Date().getFullYear()} MoreNutrition Shop • Health & sugar‑free products
      </footer>
    </div>
  );
}

export default App
