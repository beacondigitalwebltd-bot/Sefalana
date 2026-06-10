import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-sefalana-blue-dark text-white">
      {/* Newsletter */}
      <div className="bg-sefalana-blue">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">Stay Updated with Our Best Deals</h3>
            <p className="text-white/70 mt-1">
              Subscribe to receive weekly specials and promotions
            </p>
          </div>
          <form className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-l-lg text-gray-900 w-full md:w-72 focus:outline-none"
            />
            <button className="bg-sefalana-gold hover:bg-sefalana-gold-dark text-sefalana-blue px-6 py-3 rounded-r-lg font-bold transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-sefalana-gold rounded-lg p-1.5">
              <span className="text-sefalana-blue font-black text-lg leading-none">
                S
              </span>
            </div>
            <div>
              <h4 className="font-bold text-lg leading-tight">SEFALANA</h4>
              <p className="text-[10px] text-sefalana-gold leading-tight">
                CASH &amp; CARRY LESOTHO
              </p>
            </div>
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            Part of Sefalana Holding Company, Botswana&apos;s largest FMCG
            group. Serving Lesotho with quality products at wholesale prices
            since 2016.
          </p>
          <p className="text-white/50 text-xs mt-3 italic">
            Sefalana Sa Rona – Your Basket of Opportunities
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {[
              { label: "Shop All Products", href: "/shop" },
              { label: "Weekly Specials", href: "/shop?specials=true" },
              { label: "About Us", href: "/about" },
              { label: "Our Stores", href: "/stores" },
              { label: "Contact Us", href: "/contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-sefalana-gold transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-bold text-lg mb-4">Categories</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {[
              "Fresh Produce",
              "Meat & Poultry",
              "Grocery Staples",
              "Beverages",
              "Bakery",
              "Household & Cleaning",
              "Dairy & Eggs",
              "Snacks & Confectionery",
            ].map((cat) => (
              <li key={cat}>
                <Link
                  href={`/shop?category=${cat.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                  className="hover:text-sefalana-gold transition-colors"
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-lg mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="mt-0.5 shrink-0 text-sefalana-gold" />
              <span>
                Kingsway Road, Maseru Central,
                <br />
                Maseru, Lesotho
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0 text-sefalana-gold" />
              <span>+266 2231 0000</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0 text-sefalana-gold" />
              <span>info@sefalana.co.ls</span>
            </li>
            <li className="flex items-start gap-2">
              <Clock size={16} className="mt-0.5 shrink-0 text-sefalana-gold" />
              <span>
                Mon – Sat: 8:00 – 18:00
                <br />
                Sun: 9:00 – 15:00
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Sefalana Cash &amp; Carry Lesotho. All rights reserved.</p>
          <p>
            Part of{" "}
            <a
              href="https://www.sefalana.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sefalana-gold hover:underline"
            >
              Sefalana Holding Company Limited
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
