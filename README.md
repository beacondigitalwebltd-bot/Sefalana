# Sefalana Cash & Carry Lesotho — E-Commerce Website

A modern e-commerce website for Sefalana Cash & Carry in Lesotho, built with Next.js.

## 🚀 Deploy to Vercel (One Click!)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/YOUR_REPO)

### Steps:
1. Push this code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" → Import your GitHub repo
4. Click "Deploy"
5. **Done!** No configuration needed.

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx           # Homepage
│   ├── shop/page.tsx      # Product catalog
│   ├── product/[slug]/    # Product details
│   ├── checkout/page.tsx  # Checkout flow
│   ├── about/page.tsx     # About Sefalana
│   ├── stores/page.tsx    # Store locations
│   ├── contact/page.tsx   # Contact form
│   └── api/health/        # Health check
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── CartProvider.tsx
│   ├── CartDrawer.tsx
│   ├── ProductCard.tsx
│   └── AddToCartButton.tsx
└── data/
    └── products.ts        # Static product data
```

---

## 🛒 Features

- **Full E-commerce Flow**: Browse → Add to Cart → Checkout
- **8 Product Categories**: Fresh Produce, Meat, Bakery, Beverages, etc.
- **37 Products**: With images, prices in Lesotho Loti (LSL)
- **Shopping Cart**: Slide-out drawer with quantity controls
- **Order System**: Place orders with Cash on Delivery or Mobile Money
- **Responsive Design**: Mobile-first, works on all devices
- **Sefalana Branding**: Official blue/gold color scheme
- **No Database Required**: Works out of the box!

---

## 🎨 Tech Stack

- **Next.js 16** - React framework
- **Tailwind CSS 4** - Styling
- **Lucide Icons** - Icon library
- **TypeScript** - Type safety

---

## 📝 License

This project is for demonstration purposes for Sefalana Cash & Carry Lesotho.
