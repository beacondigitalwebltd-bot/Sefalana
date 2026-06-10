"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Check,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-sefalana-blue text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <nav className="text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Contact Us</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-black">Contact Us</h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl">
            We&apos;d love to hear from you! Whether you have a question about our
            products, pricing, or anything else, our team is ready to help.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Get In Touch</h2>
            <div className="space-y-4">
              {[
                {
                  icon: <MapPin size={22} />,
                  title: "Visit Us",
                  lines: ["Kingsway Road, Maseru Central", "Maseru 100, Lesotho"],
                },
                {
                  icon: <Phone size={22} />,
                  title: "Call Us",
                  lines: ["+266 2231 0000", "+266 2231 0001"],
                },
                {
                  icon: <Mail size={22} />,
                  title: "Email Us",
                  lines: ["info@sefalana.co.ls", "orders@sefalana.co.ls"],
                },
                {
                  icon: <Clock size={22} />,
                  title: "Trading Hours",
                  lines: ["Mon – Sat: 8:00 – 18:00", "Sunday: 9:00 – 15:00"],
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="flex items-start gap-4 p-4 bg-sefalana-gray rounded-xl"
                >
                  <div className="text-sefalana-blue mt-0.5">{c.icon}</div>
                  <div>
                    <h3 className="font-bold text-sm">{c.title}</h3>
                    {c.lines.map((line) => (
                      <p key={line} className="text-sm text-gray-600">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div>
              <h3 className="font-bold mb-3">Follow Us</h3>
              <div className="flex gap-3">
                {["Facebook", "Instagram", "Twitter"].map((s) => (
                  <span
                    key={s}
                    className="bg-sefalana-blue text-white px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-100 rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
                <MessageSquare size={24} className="text-sefalana-blue" />
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-sefalana-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-sefalana-green">
                    Message Sent!
                  </h3>
                  <p className="text-gray-500 mt-2">
                    Thank you for contacting us. We&apos;ll get back to you within 24
                    hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-sefalana-blue"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-sefalana-blue"
                        placeholder="+266 5800 0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-sefalana-blue"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-sefalana-blue text-gray-700">
                      <option>General Enquiry</option>
                      <option>Product Enquiry</option>
                      <option>Order Support</option>
                      <option>Business / Wholesale</option>
                      <option>Careers</option>
                      <option>Feedback / Complaint</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-sefalana-blue"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-sefalana-gold hover:bg-sefalana-gold-dark text-sefalana-blue px-8 py-3 rounded-lg font-bold transition-colors inline-flex items-center gap-2"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
