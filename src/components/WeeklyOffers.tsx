import React, { useState } from "react";
import { ChevronRight, BookOpen } from "lucide-react";
import { motion } from 'motion/react';

const catalogPages = [
  "images/catalog1.jpg",
  "images/catalog2.jpg",
  "images/catalog3.jpg"
];

const Page = React.forwardRef((props: any, ref: any) => {
  const [imgSrc, setImgSrc] = useState(() => {
    // @ts-ignore
    const base = import.meta.env.BASE_URL || "/";
    // Kjo metodë gjen rrugën e saktë pavarësisht pajisjes apo mjedisit
    return (base + props.image).replace(/\/+/g, '/');
  });
  const [retry, setRetry] = useState(0);

  const handleError = () => {
    if (retry === 0) {
      // Provo rrugën relative direkte (./images/catalog1.jpg)
      setImgSrc("./" + props.image);
      setRetry(1);
    } else if (retry === 1) {
      // Provo rrugën absolute nga rrënja (/images/catalog1.jpg)
      setImgSrc("/" + props.image);
      setRetry(2);
    } else if (retry === 2) {
      // Provo rrugën me emrin e repo-s (si shpëtim i fundit)
      setImgSrc("/ExtraMarket/" + props.image);
      setRetry(3);
    }
  };

  return (
    <div className="page bg-white shadow-inner" ref={ref} data-density="soft">
      <div className="w-full h-full flex items-center justify-center bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-black/20 to-transparent z-10"></div>
        <img 
          src={imgSrc} 
          alt="Faqja e katalogut" 
          className="w-full h-full object-contain" 
          loading="eager"
          referrerPolicy="no-referrer"
          onError={handleError}
        />
      </div>
    </div>
  );
});

export default function WeeklyOffers() {
  return (
    <section id="katalogu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 text-[#e33226] font-bold mb-4 bg-red-50 px-6 py-2 rounded-full uppercase tracking-widest text-sm">
            <BookOpen className="w-5 h-5" />
            <span>Katalogu i Javës</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">
            Shfletoni <span className="text-[#e33226]">Produktet</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Zbuloni të gjitha ofertat tona fantastike në fletëpalosjen javore. 
            Cilësi maksimale me çmimet më të ulëta në treg.
          </p>
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {catalogPages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="aspect-[1/1.414] rounded-[2rem] overflow-hidden bg-gray-100 shadow-lg group-hover:shadow-2xl transition-all duration-500 border-4 border-white">
                <Page image={img} />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    Zmadho faqen
                  </button>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <span className="text-sm font-black text-gray-400 uppercase tracking-widest">Faqja {index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-gray-900 rounded-[3rem] p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#e33226] blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-6">Dëshironi të shihni më shumë?</h3>
            <p className="text-gray-400 mb-10 text-lg max-w-2xl mx-auto">
              Vizitoni pikat tona ExtraMarket në Durrës, Tiranë dhe Manëz për të përfituar nga të gjitha ofertat.
            </p>
            <a href="#kontakti" className="inline-flex items-center gap-2 bg-[#e33226] text-white px-10 py-4 rounded-full font-black text-lg hover:bg-[#c42b20] transition-all shadow-xl">
              Na vizitoni tani
              <ChevronRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

