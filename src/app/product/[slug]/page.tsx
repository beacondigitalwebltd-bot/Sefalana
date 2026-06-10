import { notFound } from "next/navigation";
import Link from "next/link";
import { AddToCartButton } from "@/components/AddToCartButton";
import { ProductCard } from "@/components/ProductCard";
import { Tag, Truck, ShieldCheck, ArrowLeft } from "lucide-react";
import {
  getProductBySlug,
  getProductsByCategory,
  getCategoryBySlug,
} from "@/data/products";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) return notFound();

  const category = getCategoryBySlug(product.categorySlug);
  const relatedProducts = getProductsByCategory(product.categorySlug)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const discount = product.comparePrice
    ? Math.round(
        ((product.comparePrice - product.price) / product.comparePrice) * 100
      )
    : null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-sefalana-blue">
          Home
        </Link>
        <span>/</span>
        <Link href="/shop" className="hover:text-sefalana-blue">
          Shop
        </Link>
        {category && (
          <>
            <span>/</span>
            <Link
              href={`/shop?category=${category.slug}`}
              className="hover:text-sefalana-blue"
            >
              {category.name}
            </Link>
          </>
        )}
        <span>/</span>
        <span className="text-gray-900 font-medium">{product.name}</span>
      </nav>

      <Link
        href="/shop"
        className="inline-flex items-center gap-1 text-sefalana-blue hover:underline text-sm font-medium mb-6"
      >
        <ArrowLeft size={16} />
        Back to Shop
      </Link>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Image */}
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full aspect-square object-cover rounded-2xl shadow-lg"
          />
          {discount && (
            <span className="absolute top-4 left-4 bg-sefalana-red text-white text-sm font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
              <Tag size={14} />
              Save {discount}%
            </span>
          )}
        </div>

        {/* Details */}
        <div>
          {category && (
            <Link
              href={`/shop?category=${category.slug}`}
              className="text-sefalana-blue text-sm font-medium hover:underline"
            >
              {category.name}
            </Link>
          )}
          <h1 className="text-3xl md:text-4xl font-bold mt-2">{product.name}</h1>

          {product.unit && (
            <p className="text-gray-500 mt-1">{product.unit}</p>
          )}

          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-4xl font-black text-sefalana-blue">
              M{product.price.toFixed(2)}
            </span>
            {product.comparePrice && (
              <span className="text-xl text-gray-400 line-through">
                M{product.comparePrice.toFixed(2)}
              </span>
            )}
          </div>

          {discount && product.comparePrice && (
            <p className="mt-2 text-sefalana-green font-semibold text-sm">
              You save M{(product.comparePrice - product.price).toFixed(2)}!
            </p>
          )}

          <div className="mt-4">
            {product.inStock ? (
              <span className="text-sefalana-green font-semibold text-sm">
                ✅ In Stock
              </span>
            ) : (
              <span className="text-red-500 font-semibold text-sm">
                ❌ Out of Stock
              </span>
            )}
          </div>

          {product.description && (
            <p className="mt-6 text-gray-600 leading-relaxed">
              {product.description}
            </p>
          )}

          <div className="mt-8">
            <AddToCartButton
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              unit={product.unit}
              inStock={product.inStock}
            />
          </div>

          {/* Benefits */}
          <div className="mt-8 space-y-3 border-t pt-6">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Truck size={20} className="text-sefalana-blue" />
              <span>Free delivery on orders over M500</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <ShieldCheck size={20} className="text-sefalana-blue" />
              <span>Quality guaranteed by Sefalana Group</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((p) => (
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
        </section>
      )}
    </div>
  );
}
