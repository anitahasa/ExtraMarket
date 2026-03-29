import { motion } from "motion/react";
import { ArrowDown, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <div 
      id="kreu" 
      className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=2000&auto=format&fit=crop")' }}
    >
      {/* Overlay për të bërë tekstin të lexueshëm */}
      <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#e33226] text-sm font-medium mb-6 border border-red-100 w-fit shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#e33226]"></span>
              Mirësevini në
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-4 leading-tight drop-shadow-sm">
              Extra Market
            </h1>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#78a22f] mb-6 drop-shadow-sm">
              Zgjedhja ime e parë.
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-800 mb-8 leading-relaxed font-medium">
              Zbuloni gamën tonë të gjerë të produkteve vendase dhe ndërkombëtare. Çmimet më të mira dhe shërbimi më cilësor në qytet.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
              <a href="#katalogu" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-[#e33226] text-white font-semibold hover:bg-red-700 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-red-600/20">
                Shiko Ofertat
                <ArrowDown className="w-5 h-5" />
              </a>
              <a href="#kontakti" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-white text-gray-700 font-semibold hover:bg-gray-50 transition-all border border-gray-200 shadow-sm">
                <MapPin className="w-5 h-5 text-[#78a22f]" />
                Na Vizitoni
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
