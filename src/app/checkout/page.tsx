"use client";

import { useState } from "react";
import { useCart } from "@/components/CartProvider";
import Link from "next/link";
import {
  ShoppingBag,
  ArrowLeft,
  Truck,
  CreditCard,
  Check,
  Loader2,
} from "lucide-react";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState<"form" | "success">("form");
  const [loading, setLoading] = useState(false);
  const [orderRef, setOrderRef] = useState("");

  const deliveryFee = totalPrice >= 500 ? 0 : 50;
  const grandTotal = totalPrice + deliveryFee;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Generate order reference
    const ref = `SEF-${Date.now().toString().slice(-6)}`;
    setOrderRef(ref);
    clearCart();
    setStep("success");
    setLoading(false);
  };

  if (items.length === 0 && step !== "success") {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
        <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
        <p className="text-gray-500 mb-6">
          Add some products before checking out
        </p>
        <Link
          href="/shop"
          className="bg-sefalana-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-sefalana-blue-light transition-colors"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  if (step === "success") {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="w-20 h-20 bg-sefalana-green rounded-full flex items-center justify-center mx-auto mb-6">
          <Check size={40} className="text-white" />
        </div>
        <h1 className="text-3xl font-bold text-sefalana-green mb-2">
          Order Placed Successfully!
        </h1>
        <p className="text-gray-600 mb-2">
          Thank you for shopping with Sefalana Cash &amp; Carry Lesotho.
        </p>
        {orderRef && (
          <p className="text-sm text-gray-500 mb-6">
            Order Reference: <span className="font-bold">{orderRef}</span>
          </p>
        )}
        <div className="bg-sefalana-gray rounded-xl p-6 text-left max-w-md mx-auto mb-8">
          <h3 className="font-bold mb-3">What happens next?</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-sefalana-gold font-bold">1.</span>
              You&apos;ll receive an order confirmation via email
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sefalana-gold font-bold">2.</span>
              Our team will prepare your order
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sefalana-gold font-bold">3.</span>
              Your order will be delivered to your address
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sefalana-gold font-bold">4.</span>
              Pay on delivery (Cash or Mobile Money)
            </li>
          </ul>
        </div>
        <Link
          href="/shop"
          className="bg-sefalana-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-sefalana-blue-light transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link
        href="/shop"
        className="inline-flex items-center gap-1 text-sefalana-blue hover:underline text-sm font-medium mb-6"
      >
        <ArrowLeft size={16} />
        Continue Shopping
      </Link>

      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
          {/* Delivery Info */}
          <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold flex items-center gap-2 mb-4">
              <Truck size={20} className="text-sefalana-blue" />
              Delivery Information
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-sefalana-blue focus:border-transparent"
                  placeholder="e.g. Thabo Mokhesi"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-sefalana-blue focus:border-transparent"
                  placeholder="+266 5800 0000"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-sefalana-blue focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Delivery Address *
                </label>
                <textarea
                  required
                  value={form.address}
                  onChange={(e) =>
                    setForm({ ...form, address: e.target.value })
                  }
                  rows={3}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-sefalana-blue focus:border-transparent"
                  placeholder="Street address, area, city..."
                />
              </div>
            </div>
          </div>

          {/* Payment */}
          <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold flex items-center gap-2 mb-4">
              <CreditCard size={20} className="text-sefalana-blue" />
              Payment Method
            </h2>
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-3 border border-sefalana-blue rounded-lg bg-sefalana-blue/5 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  defaultChecked
                  className="text-sefalana-blue"
                />
                <div>
                  <p className="font-semibold text-sm">Cash on Delivery</p>
                  <p className="text-xs text-gray-500">
                    Pay when your order arrives
                  </p>
                </div>
              </label>
              <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                <input type="radio" name="payment" className="text-sefalana-blue" />
                <div>
                  <p className="font-semibold text-sm">Mobile Money (M-Pesa / EcoCash)</p>
                  <p className="text-xs text-gray-500">
                    Pay via mobile money transfer
                  </p>
                </div>
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-sefalana-gold hover:bg-sefalana-gold-dark text-sefalana-blue py-4 rounded-xl font-bold text-lg transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 size={22} className="animate-spin" />
                Placing Order...
              </>
            ) : (
              <>Place Order — M{grandTotal.toFixed(2)}</>
            )}
          </button>
        </form>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm sticky top-36">
            <h2 className="text-lg font-bold mb-4">Order Summary</h2>
            <ul className="space-y-3 max-h-64 overflow-y-auto">
              {items.map((item) => (
                <li key={item.id} className="flex items-center gap-3 text-sm">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{item.name}</p>
                    <p className="text-gray-500 text-xs">
                      {item.quantity} × M{item.price.toFixed(2)}
                    </p>
                  </div>
                  <span className="font-semibold">
                    M{(item.price * item.quantity).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="border-t mt-4 pt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span>M{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Delivery</span>
                <span
                  className={
                    deliveryFee === 0 ? "text-sefalana-green font-semibold" : ""
                  }
                >
                  {deliveryFee === 0 ? "FREE" : `M${deliveryFee.toFixed(2)}`}
                </span>
              </div>
              {deliveryFee > 0 && (
                <p className="text-xs text-gray-400">
                  Add M{(500 - totalPrice).toFixed(2)} more for free delivery
                </p>
              )}
              <div className="flex justify-between text-lg font-bold border-t pt-2">
                <span>Total</span>
                <span className="text-sefalana-blue">
                  M{grandTotal.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
