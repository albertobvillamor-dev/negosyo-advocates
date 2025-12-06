import { Product, Seller } from '@/types/product';

export const sellers: Seller[] = [
  {
    id: '1',
    name: 'Maria Santos',
    location: 'Manila, Philippines',
    description: 'Passionate entrepreneur specializing in handcrafted Filipino products. Supporting local artisans and preserving traditional crafts.',
    image: '/sellers/maria.jpg',
    contactEmail: 'maria.santos@example.com',
    contactPhone: '+63 912 345 6789',
    specialties: ['Handicrafts', 'Home Decor', 'Traditional Weaving'],
    rating: 4.8,
    totalProducts: 24
  },
  {
    id: '2',
    name: 'Juan dela Cruz',
    location: 'Cebu, Philippines',
    description: 'Small business owner dedicated to promoting organic and locally-sourced food products from Visayan farmers.',
    image: '/sellers/juan.jpg',
    contactEmail: 'juan.delacruz@example.com',
    contactPhone: '+63 923 456 7890',
    specialties: ['Organic Food', 'Agricultural Products', 'Local Delicacies'],
    rating: 4.9,
    totalProducts: 18
  },
  {
    id: '3',
    name: 'Ana Reyes',
    location: 'Davao, Philippines',
    description: 'Fashion designer and entrepreneur creating sustainable fashion from locally-sourced materials.',
    image: '/sellers/ana.jpg',
    contactEmail: 'ana.reyes@example.com',
    contactPhone: '+63 934 567 8901',
    specialties: ['Sustainable Fashion', 'Accessories', 'Textiles'],
    rating: 4.7,
    totalProducts: 32
  }
];

export const products: Product[] = [
  // Maria's Products
  {
    id: '1',
    name: 'Handwoven Banig Mat',
    description: 'Traditional Filipino sleeping mat made from pandan leaves. Perfect for home decor or outdoor use.',
    price: 850,
    category: 'Handicrafts',
    image: '/products/banig.jpg',
    sellerId: '1',
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Abaca Wall Hanging',
    description: 'Beautiful wall art made from natural abaca fiber, handwoven by local artisans.',
    price: 1200,
    category: 'Home & Living',
    image: '/products/wall-hanging.jpg',
    sellerId: '1',
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Bamboo Placemat Set',
    description: 'Set of 4 eco-friendly bamboo placemats, perfect for dining tables.',
    price: 450,
    category: 'Home & Living',
    image: '/products/placemat.jpg',
    sellerId: '1',
    inStock: true,
    featured: false
  },
  {
    id: '4',
    name: 'Rattan Basket',
    description: 'Handcrafted rattan storage basket with handle, ideal for organizing or gift hampers.',
    price: 650,
    category: 'Handicrafts',
    image: '/products/basket.jpg',
    sellerId: '1',
    inStock: true,
    featured: false
  },

  // Juan's Products
  {
    id: '5',
    name: 'Organic Coconut Oil',
    description: 'Pure virgin coconut oil extracted from fresh coconuts. 500ml bottle.',
    price: 280,
    category: 'Food & Beverages',
    image: '/products/coconut-oil.jpg',
    sellerId: '2',
    inStock: true,
    featured: true
  },
  {
    id: '6',
    name: 'Dried Mango Strips',
    description: '100% natural dried mango from Cebu. No preservatives or added sugar. 200g pack.',
    price: 180,
    category: 'Food & Beverages',
    image: '/products/dried-mango.jpg',
    sellerId: '2',
    inStock: true,
    featured: true
  },
  {
    id: '7',
    name: 'Organic Brown Rice',
    description: 'Locally-grown organic brown rice, 2kg pack from Visayan farmers.',
    price: 320,
    category: 'Agriculture',
    image: '/products/rice.jpg',
    sellerId: '2',
    inStock: true,
    featured: false
  },
  {
    id: '8',
    name: 'Coffee Beans (Arabica)',
    description: 'Premium Arabica coffee beans from Cebu highlands. 250g pack.',
    price: 450,
    category: 'Food & Beverages',
    image: '/products/coffee.jpg',
    sellerId: '2',
    inStock: true,
    featured: false
  },
  {
    id: '9',
    name: 'Raw Honey',
    description: 'Pure, raw honey from local beekeepers. 350g jar.',
    price: 380,
    category: 'Food & Beverages',
    image: '/products/honey.jpg',
    sellerId: '2',
    inStock: false,
    featured: false
  },

  // Ana's Products
  {
    id: '10',
    name: 'Pina Cloth Scarf',
    description: 'Elegant scarf made from traditional pineapple fiber cloth.',
    price: 1500,
    category: 'Fashion & Accessories',
    image: '/products/scarf.jpg',
    sellerId: '3',
    inStock: true,
    featured: true
  },
  {
    id: '11',
    name: 'Handmade Beaded Earrings',
    description: 'Colorful beaded earrings crafted from sustainable materials.',
    price: 350,
    category: 'Fashion & Accessories',
    image: '/products/earrings.jpg',
    sellerId: '3',
    inStock: true,
    featured: false
  },
  {
    id: '12',
    name: 'Embroidered Tote Bag',
    description: 'Eco-friendly canvas tote bag with traditional Filipino embroidery.',
    price: 680,
    category: 'Fashion & Accessories',
    image: '/products/tote-bag.jpg',
    sellerId: '3',
    inStock: true,
    featured: true
  },
  {
    id: '13',
    name: 'Recycled Fabric Clutch',
    description: 'Stylish clutch bag made from recycled textiles and indigenous patterns.',
    price: 550,
    category: 'Fashion & Accessories',
    image: '/products/clutch.jpg',
    sellerId: '3',
    inStock: true,
    featured: false
  },
  {
    id: '14',
    name: 'Woven Bracelet Set',
    description: 'Set of 3 colorful woven bracelets with traditional patterns.',
    price: 250,
    category: 'Fashion & Accessories',
    image: '/products/bracelets.jpg',
    sellerId: '3',
    inStock: true,
    featured: false
  }
];

export const categories = [
  'All',
  'Food & Beverages',
  'Handicrafts',
  'Fashion & Accessories',
  'Home & Living',
  'Agriculture',
  'Services'
];
