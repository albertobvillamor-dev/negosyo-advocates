import { Seller } from '@/types/product';

interface SellerProfileCardProps {
  seller: Seller;
}

export default function SellerProfileCard({ seller }: SellerProfileCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-emerald-200">
      <div className="flex items-start gap-5">
        <div className="w-20 h-20 bg-linear-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shrink-0 shadow-lg ring-4 ring-emerald-50">
          <span className="text-white text-2xl font-bold">{seller.name.charAt(0)}</span>
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{seller.name}</h3>
              <p className="text-sm text-gray-600 flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {seller.location}
              </p>
            </div>
            <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1.5 rounded-full border border-yellow-200 shadow-sm">
              <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-bold text-gray-800">{seller.rating}</span>
            </div>
          </div>
          <p className="text-gray-700 text-sm mb-4 line-clamp-2 leading-relaxed">{seller.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {seller.specialties.slice(0, 3).map((specialty, index) => (
              <span 
                key={index}
                className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full font-semibold border border-emerald-200"
              >
                {specialty}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between text-sm pt-3 border-t border-gray-100">
            <span className="text-gray-600 font-medium">
              <span className="text-emerald-600 font-bold">{seller.totalProducts}</span> products
            </span>
            <div className="flex gap-3">
              <a 
                href={`mailto:${seller.contactEmail}`}
                className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center gap-1.5 transition-all hover:gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
              <a 
                href={`tel:${seller.contactPhone}`}
                className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center gap-1.5 transition-all hover:gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
