export interface Seller {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  contactEmail: string;
  contactPhone: string;
  specialties: string[];
  rating: number;
  totalProducts: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  sellerId: string;
  inStock: boolean;
  featured: boolean;
}

export type Category = 
  | 'All'
  | 'Food & Beverages'
  | 'Handicrafts'
  | 'Fashion & Accessories'
  | 'Home & Living'
  | 'Agriculture'
  | 'Services';
