"use client";

import { useState } from "react";
import { ShoppingCart, Minus, Plus, Check } from "lucide-react";
import { useCart } from "./CartProvider";

interface AddToCartButtonProps {
  id: number;
  name: string;
  price: number;
  image: string | null;
  unit: string;
  inStock: boolean;
}

export function AddToCartButton({
  id,
  name,
  price,
  image,
  unit,
  inStock,
}: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({ id, name, price, image, unit });
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-gray-700">Quantity:</span>
        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-3 py-2 hover:bg-gray-100 transition-colors"
          >
            <Minus size={16} />
          </button>
          <span className="px-4 py-2 font-semibold text-center min-w-[48px] border-x border-gray-200">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 py-2 hover:bg-gray-100 transition-colors"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      <button
        onClick={handleAdd}
        disabled={!inStock}
        className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl text-lg font-bold transition-all ${
          added
            ? "bg-sefalana-green text-white"
            : "bg-sefalana-gold hover:bg-sefalana-gold-dark text-sefalana-blue"
        } disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {added ? (
          <>
            <Check size={22} />
            Added to Cart!
          </>
        ) : (
          <>
            <ShoppingCart size={22} />
            Add to Cart — M{(price * quantity).toFixed(2)}
          </>
        )}
      </button>
    </div>
  );
}
