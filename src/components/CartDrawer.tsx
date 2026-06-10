"use client";

import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "./CartProvider";
import Link from "next/link";

export function CartDrawer() {
  const {
    items,
    removeItem,
    updateQuantity,
    totalItems,
    totalPrice,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl flex flex-col">
        {/* Header */}
        <div className="bg-sefalana-blue text-white px-6 py-4 flex items-center justify-between">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <ShoppingBag size={22} />
            Your Cart ({totalItems})
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="hover:bg-white/10 p-1 rounded transition-colors"
          >
            <X size={22} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <ShoppingBag size={64} strokeWidth={1} />
              <p className="mt-4 text-lg font-medium">Your cart is empty</p>
              <p className="mt-1 text-sm">Start adding products to your cart</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-6 bg-sefalana-blue text-white px-6 py-2.5 rounded-lg hover:bg-sefalana-blue-light transition-colors font-medium"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-3">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-3 bg-gray-50 rounded-lg p-3"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm truncate">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.unit}</p>
                    <p className="text-sefalana-blue font-bold text-sm mt-1">
                      M{item.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-7 h-7 bg-white border border-gray-200 rounded flex items-center justify-center hover:bg-gray-100"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-7 text-center text-sm font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-7 h-7 bg-white border border-gray-200 rounded flex items-center justify-center hover:bg-gray-100"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t bg-white p-4 space-y-3">
            <div className="flex items-center justify-between text-lg font-bold">
              <span>Total:</span>
              <span className="text-sefalana-blue">M{totalPrice.toFixed(2)}</span>
            </div>
            <Link
              href="/checkout"
              onClick={() => setIsCartOpen(false)}
              className="block w-full bg-sefalana-gold hover:bg-sefalana-gold-dark text-sefalana-blue text-center py-3 rounded-lg font-bold transition-colors"
            >
              Proceed to Checkout
            </Link>
            <button
              onClick={() => setIsCartOpen(false)}
              className="block w-full text-center py-2 text-sm text-gray-500 hover:text-sefalana-blue transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
