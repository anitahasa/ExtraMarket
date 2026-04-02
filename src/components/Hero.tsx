import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Percent, ShoppingBag, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[85vh] min-h-[600px] w-full overflow-hidden" id="kreu">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=80"
          alt="Supermarket Fresh Food"
          className="h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 bg-[#e33226] text-white px-4 py-1.5 rounded-full text-sm font-bold mb-6 shadow-lg">
            <Percent className="w-4 h-4" />
            <span>Ofertat më të mira në Durrës</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
            ExtraMarket Durrës — <span className="text-[#e33226]">Freshness & Savings Every Day</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-100 mb-10 leading-relaxed font-medium">
            Discover our weekly offers and top products. <br />
            <span className="text-lg opacity-90">Shijoni cilësinë e produkteve tona me çmimet më konkurruese.</span>
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#offers" className="bg-[#e33226] text-white px-10 py-4 rounded-full font-black text-lg hover:bg-[#c42b20] transition-all shadow-xl hover:shadow-2xl flex items-center gap-2 group">
              Shiko Ofertat
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#rreth-nesh" className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-10 py-4 rounded-full font-black text-lg hover:bg-white/20 transition-all flex items-center gap-2">
              Rreth Nesh
            </a>
          </div>

          {/* Quick Info */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 pt-12 border-t border-white/20">
            <div className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-green-400" />
              </div>
              <span className="font-bold">100% Fresh</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-blue-400" />
              </div>
              <span className="font-bold">Hapur 07:00 - 22:00</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Badge */}
      <motion.div 
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.5, type: "spring" }}
        className="absolute bottom-12 right-12 hidden lg:block"
      >
        <div className="bg-white p-6 rounded-3xl shadow-2xl border-4 border-[#e33226] text-center max-w-[200px]">
          <div className="text-4xl font-black text-[#e33226] mb-1">-50%</div>
          <div className="text-gray-800 font-bold uppercase tracking-wider text-sm">Në artikujt e zgjedhur</div>
        </div>
      </motion.div>
    </div>
  );
}

