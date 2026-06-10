"use client";

import { ShoppingCart, Tag } from "lucide-react";
import { useCart } from "./CartProvider";
import Link from "next/link";

interface ProductCardProps {
  id: number;
  name: string;
  slug: string;
  price: number;
  comparePrice: number | null;
  image: string | null;
  unit: string | null;
  inStock: boolean;
}

export function ProductCard({
  id,
  name,
  slug,
  price,
  comparePrice,
  image,
  unit,
  inStock,
}: ProductCardProps) {
  const { addItem } = useCart();
  const discount = comparePrice
    ? Math.round(((comparePrice - price) / comparePrice) * 100)
    : null;

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden flex flex-col">
      {/* Image */}
      <Link href={`/product/${slug}`} className="relative block overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full aspect-square bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
            No Image
          </div>
        )}
        {discount && (
          <span className="absolute top-3 left-3 bg-sefalana-red text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
            <Tag size={12} />
            -{discount}%
          </span>
        )}
        {!inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-white text-gray-800 px-4 py-2 rounded-lg font-bold text-sm">
              Out of Stock
            </span>
          </div>
        )}
      </Link>

      {/* Details */}
      <div className="p-4 flex flex-col flex-1">
        <Link href={`/product/${slug}`}>
          <h3 className="font-semibold text-sm leading-tight line-clamp-2 hover:text-sefalana-blue transition-colors">
            {name}
          </h3>
        </Link>
        {unit && <p className="text-xs text-gray-400 mt-1">{unit}</p>}

        <div className="mt-auto pt-3 flex items-end justify-between gap-2">
          <div>
            <p className="text-lg font-bold text-sefalana-blue">
              M{price.toFixed(2)}
            </p>
            {comparePrice && (
              <p className="text-xs text-gray-400 line-through">
                M{comparePrice.toFixed(2)}
              </p>
            )}
          </div>
          <button
            onClick={() =>
              addItem({
                id,
                name,
                price,
                image,
                unit: unit || "each",
              })
            }
            disabled={!inStock}
            className="bg-sefalana-gold hover:bg-sefalana-gold-dark text-sefalana-blue p-2.5 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
