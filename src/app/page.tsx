import Link from "next/link";
import {
  Truck,
  ShieldCheck,
  BadgePercent,
  Clock,
  ArrowRight,
  Star,
} from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { categories, getFeaturedProducts } from "@/data/products";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sefalana-blue via-sefalana-blue-dark to-sefalana-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-sefalana-gold rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-sefalana-gold rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block bg-sefalana-gold/20 text-sefalana-gold px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                🛒 Lesotho&apos;s Largest Cash &amp; Carry
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                Quality Products at
                <span className="text-sefalana-gold"> Wholesale Prices</span>
              </h2>
              <p className="mt-4 text-white/70 text-lg leading-relaxed max-w-lg">
                Shop from the comfort of your home. Fresh produce, groceries,
                household items and more — delivered right to your door across
                Maseru and Lesotho.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/shop"
                  className="bg-sefalana-gold hover:bg-sefalana-gold-dark text-sefalana-blue px-8 py-3.5 rounded-lg font-bold transition-colors inline-flex items-center gap-2 text-lg"
                >
                  Shop Now
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/shop?specials=true"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 rounded-lg font-bold transition-colors inline-flex items-center gap-2"
                >
                  <BadgePercent size={20} />
                  View Specials
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img
                  src="https://images.pexels.com/photos/32449831/pexels-photo-32449831.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=700"
                  alt="Fresh produce at Sefalana"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-5 py-3 flex items-center gap-3">
                <div className="bg-sefalana-green/10 p-2 rounded-full">
                  <Truck size={24} className="text-sefalana-green" />
                </div>
                <div>
                  <p className="font-bold text-sm">Free Delivery</p>
                  <p className="text-xs text-gray-500">On orders over M500</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg px-5 py-3 flex items-center gap-3">
                <div className="bg-sefalana-gold/10 p-2 rounded-full">
                  <Star size={24} className="text-sefalana-gold" />
                </div>
                <div>
                  <p className="font-bold text-sm">Trusted Brand</p>
                  <p className="text-xs text-gray-500">Since 1974</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Strip */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              icon: <Truck size={28} />,
              title: "Free Delivery",
              desc: "On orders over M500",
            },
            {
              icon: <BadgePercent size={28} />,
              title: "Wholesale Prices",
              desc: "Best deals guaranteed",
            },
            {
              icon: <ShieldCheck size={28} />,
              title: "Quality Assured",
              desc: "Fresh & verified products",
            },
            {
              icon: <Clock size={28} />,
              title: "Quick Delivery",
              desc: "Same-day in Maseru",
            },
          ].map((b) => (
            <div key={b.title} className="flex items-center gap-3 p-3">
              <div className="text-sefalana-blue shrink-0">{b.icon}</div>
              <div>
                <p className="font-bold text-sm">{b.title}</p>
                <p className="text-xs text-gray-500">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Shop by Category
            </h2>
            <p className="text-gray-500 mt-1">Browse our wide range of products</p>
          </div>
          <Link
            href="/shop"
            className="hidden md:flex items-center gap-1 text-sefalana-blue font-semibold hover:underline"
          >
            View All <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/shop?category=${cat.slug}`}
              className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-44 md:h-52 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-lg">{cat.name}</h3>
                <p className="text-white/70 text-xs mt-0.5 line-clamp-1">
                  {cat.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-sefalana-gray">
        <div className="max-w-7xl mx-auto px-4 py-14">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Featured Products
              </h2>
              <p className="text-gray-500 mt-1">
                Hand-picked deals and bestsellers
              </p>
            </div>
            <Link
              href="/shop"
              className="hidden md:flex items-center gap-1 text-sefalana-blue font-semibold hover:underline"
            >
              View All <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredProducts.map((p) => (
              <ProductCard
                key={p.id}
                id={p.id}
                name={p.name}
                slug={p.slug}
                price={p.price}
                comparePrice={p.comparePrice}
                image={p.image}
                unit={p.unit}
                inStock={p.inStock}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="bg-sefalana-gold">
        <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-sefalana-blue">
              Weekly Specials Are Here!
            </h2>
            <p className="text-sefalana-blue/70 mt-1">
              Save big on selected grocery items every week. Don&apos;t miss out on
              amazing deals!
            </p>
          </div>
          <Link
            href="/shop?specials=true"
            className="bg-sefalana-blue hover:bg-sefalana-blue-dark text-white px-8 py-3.5 rounded-lg font-bold transition-colors inline-flex items-center gap-2 whitespace-nowrap"
          >
            Shop Specials
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Why Choose Sefalana */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            Why Shop at Sefalana?
          </h2>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
            With over 51 years of experience, Sefalana is a trusted name in
            Southern Africa. We bring the same quality and value to Lesotho.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Wholesale Prices, Retail Convenience",
              desc: "Get the best prices on bulk and individual purchases. Our cash & carry model means you save more on every visit.",
              icon: "💰",
            },
            {
              title: "Quality You Can Trust",
              desc: "From our own brands like Maatla Maize Meal, Delta Fresh Milk, and Marang Soaps to leading international brands.",
              icon: "✅",
            },
            {
              title: "Supporting Lesotho Communities",
              desc: "With over 300 employees across 6 stores in Lesotho, we're committed to job creation and community development.",
              icon: "🤝",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white border border-gray-100 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-4xl">{item.icon}</span>
              <h3 className="mt-4 font-bold text-lg">{item.title}</h3>
              <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Brief */}
      <section className="bg-sefalana-blue text-white">
        <div className="max-w-7xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              About Sefalana in Lesotho
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              In November 2016, Sefalana entered the Lesotho market through the
              takeover of TFS Wholesalers, Distribution and Logistics in Maseru
              — the country&apos;s largest distribution and logistics company at the
              time.
            </p>
            <p className="mt-3 text-white/70 leading-relaxed">
              Since then, we have expanded to 6 stores across Lesotho including
              Maseru, Maputsoe, Mohale&apos;s Hoek, and Lithabaneng — employing over
              300 people and serving the growing population of nearly 2 million
              Basotho.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-6 bg-sefalana-gold hover:bg-sefalana-gold-dark text-sefalana-blue px-6 py-3 rounded-lg font-bold transition-colors"
            >
              Learn More
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "51+", label: "Years of Excellence" },
              { num: "6", label: "Stores in Lesotho" },
              { num: "300+", label: "Employees" },
              { num: "8,100+", label: "Group Staff" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 rounded-xl p-6 text-center"
              >
                <p className="text-3xl font-black text-sefalana-gold">
                  {stat.num}
                </p>
                <p className="text-sm text-white/70 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
