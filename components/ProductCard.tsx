import { Product } from '@/types/product';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
  showContactButton?: boolean;
  sellerEmail?: string;
}

export default function ProductCard({ product, showContactButton = false, sellerEmail }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div className="relative h-64 bg-linear-to-br from-emerald-50 to-orange-50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <svg className="w-20 h-20 mx-auto text-emerald-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <span className="text-gray-400 text-sm font-medium">Product Image</span>
          </div>
        </div>
        {product.featured && (
          <div className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Featured
          </div>
        )}
        {!product.inStock && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
            Out of Stock
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-bold text-gray-800 line-clamp-2 flex-1">{product.name}</h3>
          <div className="ml-3 shrink-0">
            <span className="text-emerald-600 font-bold text-xl">₱{product.price}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 min-h-10">{product.description}</p>
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full font-medium border border-emerald-100 truncate">{product.category}</span>
          {showContactButton ? (
            <a
              href={`mailto:${sellerEmail || `${product.sellerId}@negosyoadvocates.com`}`}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                product.inStock 
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-md hover:shadow-lg' 
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed pointer-events-none'
              }`}
            >
              {product.inStock ? 'Contact Seller' : 'Sold Out'}
            </a>
          ) : (
            <Link
              href={`/seller/${product.sellerId}`}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                product.inStock 
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-md hover:shadow-lg' 
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed pointer-events-none'
              }`}
            >
              {product.inStock ? 'View Details' : 'Sold Out'}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
