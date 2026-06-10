export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  comparePrice: number | null;
  image: string;
  categoryId: number;
  categorySlug: string;
  inStock: boolean;
  featured: boolean;
  unit: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Fresh Produce",
    slug: "fresh-produce",
    description: "Fresh fruits, vegetables, and herbs sourced locally and internationally",
    image: "https://images.pexels.com/photos/8805471/pexels-photo-8805471.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
  },
  {
    id: 2,
    name: "Meat & Poultry",
    slug: "meat-poultry",
    description: "Quality fresh meats, chicken, and deli products",
    image: "https://images.pexels.com/photos/13279395/pexels-photo-13279395.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
  },
  {
    id: 3,
    name: "Bakery",
    slug: "bakery",
    description: "Freshly baked bread, rolls, pastries, and cakes",
    image: "https://images.pexels.com/photos/30452364/pexels-photo-30452364.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
  },
  {
    id: 4,
    name: "Beverages",
    slug: "beverages",
    description: "Soft drinks, juices, water, tea, coffee, and more",
    image: "https://images.pexels.com/photos/3651045/pexels-photo-3651045.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
  },
  {
    id: 5,
    name: "Grocery Staples",
    slug: "grocery-staples",
    description: "Rice, maize meal, flour, cooking oil, and pantry essentials",
    image: "https://images.pexels.com/photos/4437148/pexels-photo-4437148.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
  },
  {
    id: 6,
    name: "Household & Cleaning",
    slug: "household-cleaning",
    description: "Detergents, soaps, cleaning supplies, and household items",
    image: "https://images.pexels.com/photos/9230316/pexels-photo-9230316.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
  },
  {
    id: 7,
    name: "Snacks & Confectionery",
    slug: "snacks-confectionery",
    description: "Chips, biscuits, chocolates, sweets, and snack foods",
    image: "https://images.pexels.com/photos/21582447/pexels-photo-21582447.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
  },
  {
    id: 8,
    name: "Dairy & Eggs",
    slug: "dairy-eggs",
    description: "Fresh milk, cheese, yoghurt, butter, and eggs",
    image: "https://images.pexels.com/photos/9331862/pexels-photo-9331862.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
  },
];

export const products: Product[] = [
  // Fresh Produce
  { id: 1, name: "Fresh Tomatoes", slug: "fresh-tomatoes", description: "Firm and ripe tomatoes, perfect for salads and cooking. Locally sourced.", price: 12.99, comparePrice: 15.99, image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", categoryId: 1, categorySlug: "fresh-produce", featured: true, inStock: true, unit: "per kg" },
  { id: 2, name: "Green Peppers", slug: "green-peppers", description: "Crisp green bell peppers, great for stir-fries and salads.", price: 18.99, comparePrice: null, image: "https://images.pexels.com/photos/128536/pexels-photo-128536.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", categoryId: 1, categorySlug: "fresh-produce", featured: false, inStock: true, unit: "per kg" },
  { id: 3, name: "Potatoes", slug: "potatoes", description: "Quality potatoes suitable for boiling, frying or baking.", price: 14.99, comparePrice: null, image: "https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", categoryId: 1, categorySlug: "fresh-produce", featured: false, inStock: true, unit: "per 2kg bag" },
  { id: 4, name: "Onions", slug: "onions", description: "Fresh onions, an essential ingredient for every kitchen.", price: 9.99, comparePrice: null, image: "https://images.pexels.com/photos/4197444/pexels-photo-4197444.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", categoryId: 1, categorySlug: "fresh-produce", featured: false, inStock: true, unit: "per kg" },
  { id: 5, name: "Bananas", slug: "bananas", description: "Sweet ripe bananas, perfect for snacking or smoothies.", price: 16.99, comparePrice: null, image: "https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", categoryId: 1, categorySlug: "fresh-produce", featured: true, inStock: true, unit: "per bunch" },
  { id: 6, name: "Cabbage", slug: "cabbage", description: "Fresh green cabbage, great for coleslaw and traditional dishes.", price: 11.99, comparePrice: null, image: "https://images.pexels.com/photos/2518893/pexels-photo-2518893.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", categoryId: 1, categorySlug: "fresh-produce", featured: false, inStock: true, unit: "per head" },

  // Meat & Poultry
  { id: 7, name: "Whole Chicken", slug: "whole-chicken", description: "Fresh whole chicken, ideal for roasting or braai.", price: 79.99, comparePrice: 89.99, image: "https://images.pexels.com/photos/6210959/pexels-photo-6210959.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", categoryId: 2, categorySlug: "meat-poultry", featured: true, inStock: true, unit: "per kg" },
  { id: 8, name: "Beef Mince", slug: "beef-mince", description: "Premium quality beef mince, perfect for burgers and sauces.", price: 89.99, comparePrice: null, image: "https://images.pexels.com/photos/4110377/pexels-photo-4110377.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", categoryId: 2, categorySlug: "meat-poultry", featured: false, inStock: true, unit: "per kg" },
  { id: 9, name: "Pork Chops", slug: "pork-chops", description: "Tender pork chops, great for grilling or pan frying.", price: 74.99, comparePrice: null, image: "https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", categoryId: 2, categorySlug: "meat-poultry", featured: false, inStock: true, unit: "per kg" },
  { id: 10, name: "Chicken Drumsticks", slug: "chicken-drumsticks", description: "Fresh chicken drumsticks, family favourite.", price: 54.99, comparePrice: 64.99, image: "https://images.pexels.com/photos/6941007/pexels-photo-6941007.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", categoryId: 2, categorySlug: "meat-poultry", featured: true, inStock: true, unit: "per 2kg" },

  // Bakery
  { id: 11, name: "White Bread Loaf", slug: "white-bread-loaf", description: "Soft white bread loaf, freshly baked daily.", price: 16.99, comparePrice: null, image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", categoryId: 3, categorySlug: "bakery", featured: false, inStock: true, unit: "per loaf" },
  { id: 12, name: "Brown Bread Loaf", slug: "brown-bread-loaf", description: "Wholesome brown bread, high in fibre and nutrients.", price: 17.99, comparePrice: null, image: "https://images.pexels.com/photos/4444068/pexels-photo-4444068.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", categoryId: 3, categorySlug: "bakery", featured: false, inStock: true, unit: "per loaf" },
  { id: 13, name: "Bread Rolls (6 Pack)", slug: "bread-rolls-6", description: "Pack of 6 fresh bread rolls, perfect for any meal.", price: 14.99, comparePrice: null, image: "https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", categoryId: 3, categorySlug: "bakery", featured: false, inStock: true, unit: "per pack" },
  { id: 14, name: "Scones (4 Pack)", slug: "scones-4", description: "Traditional buttermilk scones, baked fresh.", price: 22.99, comparePrice: null, image: "https://images.pexels.com/photos/18647862/pexels-photo-18647862.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", categoryId: 3, categorySlug: "bakery", featured: false, inStock: true, unit: "per pack" },

  // Beverages
  { id: 15, name: "Coca-Cola 2L", slug: "coca-cola-2l", description: "Classic Coca-Cola in a 2 litre bottle.", price: 22.99, comparePrice: null, image: "https://images.pexels.com/photos/2983100/pexels-photo-2983100.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", categoryId: 4, categorySlug: "beverages", featured: true, inStock: true, unit: "per bottle" },
  { id: 16, name: "Orange Juice 1L", slug: "orange-juice-1l", description: "100% pure orange juice, no added sugar.", price: 29.99, comparePrice: null, image: "https://images.pexels.com/photos/3651045/pexels-photo-3651045.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", categoryId: 4, categorySlug: "beverages", featured: false, inStock: true, unit: "per bottle" },
  { id: 17, name: "Still Water 5L", slug: "still-water-5l", description: "Pure still drinking water.", price: 19.99, comparePrice: null, image: "https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", categoryId: 4, categorySlug: "beverages", featured: false, inStock: true, unit: "per bottle" },
  { id: 18, name: "Rooibos Tea (80 Bags)", slug: "rooibos-tea-80", description: "Traditional South African rooibos tea bags.", price: 34.99, comparePrice: null, image: "https://images.pexels.com/photos/5946720/pexels-photo-5946720.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", categoryId: 4, categorySlug: "beverages", featured: false, inStock: true, unit: "per box" },

  // Grocery Staples
  { id: 19, name: "White Maize Meal 5kg", slug: "maize-meal-5kg", description: "Sefalana Maatla enriched maize meal, a household staple.", price: 49.99, comparePrice: 59.99, image: "https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", categoryId: 5, categorySlug: "grocery-staples", featured: true, inStock: true, unit: "per 5kg bag" },
  { id: 20, name: "White Rice 2kg", slug: "white-rice-2kg", description: "Premium long grain white rice.", price: 34.99, comparePrice: null, image: "https://images.pexels.com/photos/4110255/pexels-photo-4110255.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", categoryId: 5, categorySlug: "grocery-staples", featured: false, inStock: true, unit: "per 2kg bag" },
  { id: 21, name: "Sunflower Cooking Oil 2L", slug: "cooking-oil-2l", description: "Pure sunflower cooking oil for healthier cooking.", price: 54.99, comparePrice: 64.99, image: "https://images.pexels.com/photos/4033636/pexels-photo-4033636.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", categoryId: 5, categorySlug: "grocery-staples", featured: true, inStock: true, unit: "per 2L bottle" },
  { id: 22, name: "Cake Flour 2.5kg", slug: "cake-flour-2-5kg", description: "Fine cake flour for baking.", price: 24.99, comparePrice: null, image: "https://images.pexels.com/photos/5765/flour-powder-wheat-jar.jpg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", categoryId: 5, categorySlug: "grocery-staples", featured: false, inStock: true, unit: "per 2.5kg bag" },
  { id: 23, name: "Sugar 2.5kg", slug: "sugar-2-5kg", description: "White refined sugar.", price: 37.99, comparePrice: null, image: "https://images.pexels.com/photos/2523650/pexels-photo-2523650.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", categoryId: 5, categorySlug: "grocery-staples", featured: false, inStock: true, unit: "per 2.5kg bag" },
  { id: 24, name: "Tinned Baked Beans 410g", slug: "baked-beans-410g", description: "Baked beans in tomato sauce, a pantry essential.", price: 14.99, comparePrice: null, image: "https://images.pexels.com/photos/35740586/pexels-photo-35740586.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", categoryId: 5, categorySlug: "grocery-staples", featured: false, inStock: true, unit: "per tin" },

  // Household & Cleaning
  { id: 25, name: "Washing Powder 2kg", slug: "washing-powder-2kg", description: "Effective washing powder for bright, clean clothes.", price: 49.99, comparePrice: 59.99, image: "https://images.pexels.com/photos/9230316/pexels-photo-9230316.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", categoryId: 6, categorySlug: "household-cleaning", featured: true, inStock: true, unit: "per 2kg box" },
  { id: 26, name: "Dishwashing Liquid 750ml", slug: "dishwashing-liquid-750ml", description: "Grease-cutting dishwashing liquid.", price: 24.99, comparePrice: null, image: "https://images.pexels.com/photos/12997255/pexels-photo-12997255.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", categoryId: 6, categorySlug: "household-cleaning", featured: false, inStock: true, unit: "per bottle" },
  { id: 27, name: "Marang Bath Soap (6 Pack)", slug: "marang-bath-soap-6", description: "Sefalana's own Marang brand bath soap, gentle on skin.", price: 29.99, comparePrice: null, image: "https://images.pexels.com/photos/14382430/pexels-photo-14382430.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", categoryId: 6, categorySlug: "household-cleaning", featured: false, inStock: true, unit: "per pack" },
  { id: 28, name: "Toilet Paper (9 Pack)", slug: "toilet-paper-9", description: "Soft 2-ply toilet paper, value pack.", price: 44.99, comparePrice: null, image: "https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", categoryId: 6, categorySlug: "household-cleaning", featured: false, inStock: true, unit: "per pack" },

  // Snacks & Confectionery
  { id: 29, name: "Potato Chips 125g", slug: "potato-chips-125g", description: "Crispy salted potato chips, perfect for snacking.", price: 16.99, comparePrice: null, image: "https://images.pexels.com/photos/21582447/pexels-photo-21582447.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", categoryId: 7, categorySlug: "snacks-confectionery", featured: false, inStock: true, unit: "per bag" },
  { id: 30, name: "Chocolate Bar 80g", slug: "chocolate-bar-80g", description: "Smooth milk chocolate bar.", price: 19.99, comparePrice: null, image: "https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", categoryId: 7, categorySlug: "snacks-confectionery", featured: false, inStock: true, unit: "per bar" },
  { id: 31, name: "Biscuits Assorted 200g", slug: "biscuits-assorted-200g", description: "Selection of assorted biscuits for tea time.", price: 22.99, comparePrice: null, image: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", categoryId: 7, categorySlug: "snacks-confectionery", featured: false, inStock: true, unit: "per pack" },
  { id: 32, name: "Peanuts Roasted 250g", slug: "peanuts-roasted-250g", description: "Roasted and salted peanuts.", price: 18.99, comparePrice: null, image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", categoryId: 7, categorySlug: "snacks-confectionery", featured: false, inStock: true, unit: "per bag" },

  // Dairy & Eggs
  { id: 33, name: "Full Cream Milk 2L", slug: "full-cream-milk-2l", description: "Delta Fresh full cream long life milk.", price: 29.99, comparePrice: 34.99, image: "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", categoryId: 8, categorySlug: "dairy-eggs", featured: true, inStock: true, unit: "per 2L carton" },
  { id: 34, name: "Large Eggs (30 Pack)", slug: "large-eggs-30", description: "Farm fresh large eggs, excellent value.", price: 64.99, comparePrice: null, image: "https://images.pexels.com/photos/7094745/pexels-photo-7094745.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", categoryId: 8, categorySlug: "dairy-eggs", featured: true, inStock: true, unit: "per tray" },
  { id: 35, name: "Cheddar Cheese 400g", slug: "cheddar-cheese-400g", description: "Mature cheddar cheese, versatile for cooking and snacking.", price: 54.99, comparePrice: null, image: "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", categoryId: 8, categorySlug: "dairy-eggs", featured: false, inStock: true, unit: "per 400g block" },
  { id: 36, name: "Yoghurt 1kg Tub", slug: "yoghurt-1kg", description: "Creamy plain yoghurt, great for smoothies and desserts.", price: 34.99, comparePrice: null, image: "https://images.pexels.com/photos/4397899/pexels-photo-4397899.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", categoryId: 8, categorySlug: "dairy-eggs", featured: false, inStock: true, unit: "per 1kg tub" },
  { id: 37, name: "Butter 500g", slug: "butter-500g", description: "Pure dairy butter for cooking and baking.", price: 49.99, comparePrice: null, image: "https://images.pexels.com/photos/531334/pexels-photo-531334.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", categoryId: 8, categorySlug: "dairy-eggs", featured: false, inStock: true, unit: "per 500g block" },
];

// Helper functions
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getSpecialProducts(): Product[] {
  return products.filter((p) => p.comparePrice !== null);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return products.filter((p) => p.name.toLowerCase().includes(q));
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
