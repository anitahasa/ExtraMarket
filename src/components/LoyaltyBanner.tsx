import { CreditCard, ArrowRight } from "lucide-react";

export default function LoyaltyBanner() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-3xl overflow-hidden shadow-lg relative">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
        
        <div className="relative px-6 py-10 sm:px-12 sm:py-14 md:flex md:items-center md:justify-between">
          <div className="mb-8 md:mb-0 md:max-w-xl">
            <div className="flex items-center gap-2 text-white/90 font-medium mb-3">
              <CreditCard className="w-5 h-5" />
              <span>Karta e Besnikërisë ExtraClub</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Përfito zbritje në çdo blerje.
            </h2>
            <p className="text-red-50 text-lg">
              Aplikoni falas për kartën tuaj ExtraClub në arkë. Grumbulloni pikë me çdo blerje dhe përfitoni ulje ekskluzive vetëm për anëtarët.
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <a href="#kontakti" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-white text-red-600 font-bold text-lg hover:bg-gray-50 transition-colors shadow-md">
              Pyesni në Dyqan
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
