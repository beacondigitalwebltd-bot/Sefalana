import Link from "next/link";
import {
  ArrowRight,
  Users,
  Store,
  Globe,
  Award,
  Heart,
  Target,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sefalana-blue text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
          <nav className="text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">About Us</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-black">About Sefalana</h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl leading-relaxed">
            Botswana&apos;s Bountiful Granary — serving Southern Africa with quality
            products at wholesale prices for over 51 years.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sefalana-gold font-bold text-sm uppercase tracking-wider">
              Our Story
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">
              From Botswana to the Region
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                Sefalana Holding Company Limited came into existence in 1974 and was
                the first company to list on the Botswana Stock Exchange in 1979. After over
                51 years of operation, our Group remains the only listed company without a
                controlling shareholder — a truly Botswana company, made for the people,
                by the people.
              </p>
              <p>
                The Sefalana Group first emerged as a result of a takeover of Bechmalt
                Holdings Limited, a South African company consisting of 6 wholesale units,
                1 maize mill and a staff complement of only 233 individuals.
              </p>
              <p>
                Through five decades of history, our Group has grown into a large and
                diverse business, operating in the FMCG sector within{" "}
                <strong>Botswana, Namibia, Lesotho, South Africa and Australia</strong>.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "1974", label: "Year Founded" },
              { num: "8,100+", label: "Total Employees" },
              { num: "5", label: "Countries" },
              { num: "51+", label: "Years of Service" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-sefalana-gray rounded-xl p-6 text-center"
              >
                <p className="text-3xl font-black text-sefalana-blue">{s.num}</p>
                <p className="text-sm text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lesotho Presence */}
      <section className="bg-sefalana-gray">
        <div className="max-w-7xl mx-auto px-4 py-14">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.pexels.com/photos/16154014/pexels-photo-16154014.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=700"
                alt="Sefalana Store"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <span className="text-sefalana-gold font-bold text-sm uppercase tracking-wider">
                Sefalana in Lesotho
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2">
                Growing with Lesotho Since 2016
              </h2>
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  On 1 November 2016, Sefalana entered the Lesotho market through
                  the takeover of TFS Wholesalers, Distribution and Logistics in
                  Maseru — the country&apos;s largest distribution and logistics company.
                </p>
                <p>
                  This acquisition gave us a strong presence in the market in a short
                  space of time. Since then, we have expanded operations by opening
                  stores in <strong>Maputsoe</strong> (2018),{" "}
                  <strong>Mohale&apos;s Hoek</strong>, and <strong>Lithabaneng</strong>,
                  growing to 6 stores with over 300 employees.
                </p>
                <p>
                  Lesotho offers an emergent economy with a growing population of
                  close to 2 million people, who have responded well to our presence.
                  We are proud to be the largest retailer in the country.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Brands */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="text-center mb-10">
          <span className="text-sefalana-gold font-bold text-sm uppercase tracking-wider">
            Our Own Brands
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2">
            Quality Products We Manufacture
          </h2>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
            As part of the Sefalana Group, we manufacture and distribute our own
            brands across Southern Africa.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              name: "Maatla Maize Meal",
              desc: "Enriched maize meal, a staple in every household",
              emoji: "🌽",
            },
            {
              name: "Delta Fresh Milk",
              desc: "Long-life UHT milk, fresh and nutritious",
              emoji: "🥛",
            },
            {
              name: "Marang Soaps",
              desc: "Laundry and bath soaps for the whole family",
              emoji: "🧼",
            },
            {
              name: "Sarona Samp",
              desc: "Traditional samp, perfectly milled",
              emoji: "🍚",
            },
            {
              name: "Sechaba Mabele",
              desc: "Premium sorghum malt",
              emoji: "🌾",
            },
            {
              name: "Tholo Malt",
              desc: "Quality malt for traditional brews",
              emoji: "🍺",
            },
            {
              name: "A Star Dairy",
              desc: "Quality dairy products range",
              emoji: "⭐",
            },
            {
              name: "Fusion Soaps",
              desc: "Premium bath and body care",
              emoji: "✨",
            },
          ].map((brand) => (
            <div
              key={brand.name}
              className="bg-white border border-gray-100 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-4xl">{brand.emoji}</span>
              <h3 className="font-bold mt-3">{brand.name}</h3>
              <p className="text-xs text-gray-500 mt-1">{brand.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-sefalana-blue text-white">
        <div className="max-w-7xl mx-auto px-4 py-14">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">Our Promise</h2>
            <p className="text-white/60 mt-2 italic">
              &ldquo;Sefalana Sa Rona – Your Basket of Opportunities&rdquo;
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Target size={32} />,
                title: "Quality Service & Solutions",
                desc: "Delivering the quality service and solutions requested by our customers, always.",
              },
              {
                icon: <Heart size={32} />,
                title: "Safe Working Environment",
                desc: "A safe and conducive working environment for our people to thrive.",
              },
              {
                icon: <Award size={32} />,
                title: "Trusted Household Name",
                desc: "A trusted household name, a brand of choice for future generations.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="bg-white/10 rounded-xl p-6 text-center"
              >
                <div className="text-sefalana-gold flex justify-center mb-3">
                  {v.icon}
                </div>
                <h3 className="font-bold text-lg">{v.title}</h3>
                <p className="text-white/60 text-sm mt-2">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Segments */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Our Business Segments</h2>
          <p className="text-gray-500 mt-2">
            The Sefalana Group operates across multiple segments
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Store size={28} />,
              title: "Retail Stores",
              items: [
                "Sefalana Cash & Carry",
                "Sefalana Shopper",
                "Sefalana Quick",
                "Sefalana Hyper",
                "The BIG One",
              ],
            },
            {
              icon: <Globe size={28} />,
              title: "Trading",
              items: [
                "FMCG Wholesale",
                "Metro Stores",
                "Capital Tobacco",
                "Sefalana Liquor",
                "Sefalana Catering",
              ],
            },
            {
              icon: <Award size={28} />,
              title: "Manufacturing",
              items: [
                "Maize Milling",
                "Dairy (Delta Fresh)",
                "Soap Manufacturing",
                "Sorghum Products",
                "UHT Milk",
              ],
            },
            {
              icon: <Users size={28} />,
              title: "Other Services",
              items: [
                "Property Management",
                "Vehicle Dealerships",
                "Agricultural Equipment",
                "Fuel Stations",
                "Logistics",
              ],
            },
          ].map((seg) => (
            <div
              key={seg.title}
              className="border border-gray-100 rounded-xl p-6 shadow-sm"
            >
              <div className="text-sefalana-blue mb-3">{seg.icon}</div>
              <h3 className="font-bold text-lg mb-3">{seg.title}</h3>
              <ul className="space-y-1.5">
                {seg.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-gray-600 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-sefalana-gold rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sefalana-gold">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-sefalana-blue">
            Start Shopping Online Today
          </h2>
          <p className="text-sefalana-blue/70 mt-2 max-w-xl mx-auto">
            Browse our full range of products and get them delivered to your door
            across Lesotho.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 mt-6 bg-sefalana-blue hover:bg-sefalana-blue-dark text-white px-8 py-3.5 rounded-lg font-bold transition-colors"
          >
            Shop Now <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
