"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ShoppingCart,
  Search,
  Menu,
  X,
  Phone,
  MapPin,
} from "lucide-react";
import { useCart } from "./CartProvider";
import { CartDrawer } from "./CartDrawer";

export function Header() {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-sefalana-blue-dark text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone size={14} />
              <span>+266 2231 0000</span>
            </span>
            <span className="hidden sm:flex items-center gap-1">
              <MapPin size={14} />
              <span>Maseru, Lesotho</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline">Free delivery on orders over M500</span>
            <Link href="/stores" className="hover:text-sefalana-gold transition-colors">
              Store Locator
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-sefalana-blue sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="bg-sefalana-gold rounded-lg p-1.5 flex items-center justify-center">
              <span className="text-sefalana-blue font-black text-xl leading-none">S</span>
            </div>
            <div className="text-white">
              <h1 className="text-lg md:text-xl font-bold leading-tight tracking-tight">
                SEFALANA
              </h1>
              <p className="text-[10px] md:text-xs text-sefalana-gold font-medium leading-tight -mt-0.5">
                CASH &amp; CARRY LESOTHO
              </p>
            </div>
          </Link>

          {/* Search bar - desktop */}
          <div className="hidden md:flex flex-1 max-w-xl">
            <form action="/shop" method="GET" className="w-full flex">
              <input
                type="text"
                name="search"
                placeholder="Search for products..."
                className="flex-1 px-4 py-2.5 rounded-l-lg border-0 text-sm focus:outline-none focus:ring-2 focus:ring-sefalana-gold"
              />
              <button
                type="submit"
                className="bg-sefalana-gold hover:bg-sefalana-gold-dark text-sefalana-blue px-4 rounded-r-lg transition-colors"
              >
                <Search size={20} />
              </button>
            </form>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative bg-sefalana-gold hover:bg-sefalana-gold-dark text-sefalana-blue rounded-lg px-3 py-2.5 flex items-center gap-2 transition-colors font-semibold text-sm"
            >
              <ShoppingCart size={20} />
              <span className="hidden sm:inline">Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-sefalana-red text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Nav */}
        <nav className="hidden md:block bg-sefalana-blue-light border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4">
            <ul className="flex items-center gap-0 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "Shop All", href: "/shop" },
                { label: "Specials", href: "/shop?specials=true" },
                { label: "About Us", href: "/about" },
                { label: "Our Stores", href: "/stores" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-white hover:bg-white/10 hover:text-sefalana-gold transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Mobile search */}
        <div className="md:hidden px-4 pb-3">
          <form action="/shop" method="GET" className="flex">
            <input
              type="text"
              name="search"
              placeholder="Search products..."
              className="flex-1 px-3 py-2 rounded-l-lg border-0 text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-sefalana-gold text-sefalana-blue px-3 rounded-r-lg"
            >
              <Search size={18} />
            </button>
          </form>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-sefalana-blue-light border-t border-white/10">
            <ul className="text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "Shop All", href: "/shop" },
                { label: "Specials", href: "/shop?specials=true" },
                { label: "About Us", href: "/about" },
                { label: "Our Stores", href: "/stores" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block px-6 py-3 text-white hover:bg-white/10 border-b border-white/5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <CartDrawer />
    </>
  );
}
