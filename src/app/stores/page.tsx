import Link from "next/link";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const stores = [
  {
    name: "Sefalana Cash & Carry — Maseru Central",
    address: "Kingsway Road, Maseru Central, Maseru 100",
    phone: "+266 2231 0000",
    hours: "Mon–Sat: 8:00–18:00 | Sun: 9:00–15:00",
    flagship: true,
  },
  {
    name: "Sefalana Cash & Carry — Maseru East",
    address: "Main South Road, Maseru East, Maseru",
    phone: "+266 2232 0000",
    hours: "Mon–Sat: 8:00–18:00 | Sun: 9:00–15:00",
    flagship: false,
  },
  {
    name: "Sefalana Cash & Carry — Lithabaneng",
    address: "Lithabaneng, Maseru District, Lesotho",
    phone: "+266 2233 0000",
    hours: "Mon–Sat: 8:00–18:00 | Sun: 9:00–15:00",
    flagship: false,
  },
  {
    name: "Sefalana Cash & Carry — Maputsoe",
    address: "Main Road, Maputsoe, Leribe District",
    phone: "+266 2242 0000",
    hours: "Mon–Sat: 8:00–18:00 | Sun: 9:00–15:00",
    flagship: false,
  },
  {
    name: "Sefalana Cash & Carry — Mohale's Hoek",
    address: "Main Street, Mohale's Hoek",
    phone: "+266 2278 0000",
    hours: "Mon–Sat: 8:00–18:00 | Sun: 9:00–15:00",
    flagship: false,
  },
  {
    name: "Sefalana Liquor — Maputsoe",
    address: "Main Road, Maputsoe, Leribe District",
    phone: "+266 2242 0001",
    hours: "Mon–Sat: 9:00–18:00 | Sun: Closed",
    flagship: false,
  },
];

export default function StoresPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sefalana-blue text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <nav className="text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Our Stores</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-black">Our Stores</h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl">
            Find a Sefalana Cash &amp; Carry store near you across Lesotho. We operate
            6 stores serving communities from Maseru to Mohale&apos;s Hoek.
          </p>
        </div>
      </section>

      {/* Stores List */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stores.map((store) => (
            <div
              key={store.name}
              className={`border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow ${
                store.flagship
                  ? "border-sefalana-gold bg-sefalana-gold/5"
                  : "border-gray-100"
              }`}
            >
              {store.flagship && (
                <span className="inline-block bg-sefalana-gold text-sefalana-blue text-xs font-bold px-3 py-1 rounded-full mb-3">
                  FLAGSHIP STORE
                </span>
              )}
              <h3 className="font-bold text-lg">{store.name}</h3>
              <div className="mt-4 space-y-3 text-sm text-gray-600">
                <p className="flex items-start gap-2">
                  <MapPin size={16} className="mt-0.5 text-sefalana-blue shrink-0" />
                  {store.address}
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={16} className="text-sefalana-blue shrink-0" />
                  {store.phone}
                </p>
                <p className="flex items-start gap-2">
                  <Clock size={16} className="mt-0.5 text-sefalana-blue shrink-0" />
                  {store.hours}
                </p>
              </div>
              <button className="mt-4 w-full flex items-center justify-center gap-2 bg-sefalana-blue hover:bg-sefalana-blue-light text-white py-2.5 rounded-lg text-sm font-medium transition-colors">
                <Navigation size={16} />
                Get Directions
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Map section */}
      <section className="bg-sefalana-gray">
        <div className="max-w-7xl mx-auto px-4 py-14 text-center">
          <h2 className="text-2xl font-bold mb-4">Serving All of Lesotho</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            From Maseru to Maputsoe, Mohale&apos;s Hoek to Lithabaneng — we&apos;re growing
            our presence to bring quality products closer to you. More stores are
            coming soon!
          </p>
          <div className="bg-sefalana-blue/5 rounded-2xl p-8 inline-block">
            <div className="text-6xl mb-4">🇱🇸</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { city: "Maseru", stores: "3 Stores" },
                { city: "Maputsoe", stores: "2 Stores" },
                { city: "Mohale's Hoek", stores: "1 Store" },
                { city: "Lithabaneng", stores: "1 Store" },
              ].map((loc) => (
                <div key={loc.city}>
                  <p className="font-bold text-sefalana-blue">{loc.city}</p>
                  <p className="text-sm text-gray-500">{loc.stores}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
