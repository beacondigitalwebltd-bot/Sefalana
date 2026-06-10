import { ProductCard } from "@/components/ProductCard";
import Link from "next/link";
import { Filter } from "lucide-react";
import {
  categories,
  products,
  getProductsByCategory,
  getSpecialProducts,
  searchProducts,
  getCategoryBySlug,
} from "@/data/products";

interface ShopPageProps {
  searchParams: Promise<{
    category?: string;
    search?: string;
    specials?: string;
  }>;
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const params = await searchParams;

  let filteredProducts = products;
  let activeCategoryName = "";

  if (params.category) {
    const cat = getCategoryBySlug(params.category);
    if (cat) {
      filteredProducts = getProductsByCategory(params.category);
      activeCategoryName = cat.name;
    }
  } else if (params.specials === "true") {
    filteredProducts = getSpecialProducts();
  } else if (params.search) {
    filteredProducts = searchProducts(params.search);
  }

  const pageTitle =
    params.specials === "true"
      ? "Weekly Specials"
      : activeCategoryName
      ? activeCategoryName
      : params.search
      ? `Search: "${params.search}"`
      : "All Products";

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-sefalana-blue">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 font-medium">{pageTitle}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="lg:w-64 shrink-0">
          <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm sticky top-36">
            <h3 className="font-bold text-lg flex items-center gap-2 mb-4">
              <Filter size={18} />
              Categories
            </h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/shop"
                  className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                    !params.category && !params.specials
                      ? "bg-sefalana-blue text-white font-semibold"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?specials=true"
                  className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                    params.specials === "true"
                      ? "bg-sefalana-red text-white font-semibold"
                      : "hover:bg-red-50 text-sefalana-red"
                  }`}
                >
                  🔥 Weekly Specials
                </Link>
              </li>
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/shop?category=${cat.slug}`}
                    className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                      params.category === cat.slug
                        ? "bg-sefalana-blue text-white font-semibold"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl md:text-3xl font-bold">{pageTitle}</h1>
            <span className="text-sm text-gray-500">
              {filteredProducts.length} product
              {filteredProducts.length !== 1 ? "s" : ""}
            </span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-6xl mb-4">🔍</p>
              <h3 className="text-xl font-bold text-gray-700">
                No products found
              </h3>
              <p className="text-gray-500 mt-2">
                Try a different category or search term
              </p>
              <Link
                href="/shop"
                className="mt-6 inline-block bg-sefalana-blue text-white px-6 py-2.5 rounded-lg font-medium hover:bg-sefalana-blue-light transition-colors"
              >
                Browse All Products
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {filteredProducts.map((p) => (
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
          )}
        </div>
      </div>
    </div>
  );
}
