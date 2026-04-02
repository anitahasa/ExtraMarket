import React, { useState } from "react";
import { ChevronLeft, ChevronRight, BookOpen, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from 'motion/react';

const catalogPages = [
  "images/catalog1.jpg",
  "images/catalog2.jpg",
  "images/catalog3.jpg"
];

export default function WeeklyOffers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % catalogPages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + catalogPages.length) % catalogPages.length);
  };

  const getImagePath = (image: string) => {
    // @ts-ignore
    const base = import.meta.env.BASE_URL || "/";
    return (base + image).replace(/\/+/g, '/');
  };

  return (
    <section id="katalogu" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 text-[#e33226] font-bold mb-4 bg-red-50 px-6 py-2 rounded-full uppercase tracking-widest text-sm">
            <BookOpen className="w-5 h-5" />
            <span>Katalogu i Javës</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">
            Shfletoni <span className="text-[#e33226]">Katalogun</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Zbuloni të gjitha ofertat tona fantastike në fletëpalosjen javore. 
            Eksploroni faqet për të parë të gjitha zbritjet dhe produktet e reja.
          </p>
        </div>

        {/* Magazine Viewer */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative aspect-[1/1.414] md:aspect-[1.414/1] bg-white rounded-[2rem] shadow-2xl overflow-hidden border-8 border-white group">
            {/* Background Texture/Shadow for Book Feel */}
            <div className="absolute inset-y-0 left-1/2 w-px bg-black/10 z-10 hidden md:block"></div>
            <div className="absolute inset-y-0 left-1/2 w-10 bg-gradient-to-r from-black/5 to-transparent z-10 hidden md:block"></div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full h-full flex"
              >
                {/* Mobile: Single Page | Desktop: Two Pages (if possible, but here we show one large for clarity) */}
                <div className="w-full h-full relative">
                  <img 
                    src={getImagePath(catalogPages[currentIndex])} 
                    alt={`Faqja ${currentIndex + 1}`}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Zoom Button */}
                  <button 
                    onClick={() => setIsZoomed(true)}
                    className="absolute bottom-6 right-6 p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl text-gray-800 hover:text-[#e33226] transition-all opacity-0 group-hover:opacity-100"
                  >
                    <Maximize2 className="w-6 h-6" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-sm shadow-2xl rounded-full flex items-center justify-center text-gray-800 hover:text-[#e33226] transition-all z-20 border border-gray-100 hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-sm shadow-2xl rounded-full flex items-center justify-center text-gray-800 hover:text-[#e33226] transition-all z-20 border border-gray-100 hover:scale-110 active:scale-95"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          {/* Page Thumbnails / Progress */}
          <div className="mt-12 flex justify-center items-center gap-4">
            {catalogPages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 transition-all duration-300 rounded-full ${
                  currentIndex === idx ? "w-12 bg-[#e33226]" : "w-3 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
          
          <div className="text-center mt-6">
            <span className="text-sm font-black text-gray-400 uppercase tracking-widest">
              Faqja {currentIndex + 1} nga {catalogPages.length}
            </span>
          </div>
        </div>
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setIsZoomed(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={getImagePath(catalogPages[currentIndex])} 
                alt="Katalogu i zmadhuar"
                className="max-w-full max-h-full object-contain shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <button 
                onClick={() => setIsZoomed(false)}
                className="absolute top-0 right-0 md:-top-12 md:-right-12 text-white hover:text-[#e33226] transition-colors p-4"
              >
                <span className="text-4xl font-light">×</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}



