import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { motion } from 'motion/react';
// @ts-ignore
import HTMLFlipBook from "react-pageflip";

const catalogPages = [
  "images/catalog1.jpg",
  "images/catalog2.jpg",
  "images/catalog3.jpg"
];

const Page = React.forwardRef((props: any, ref: any) => {
  const [imgSrc, setImgSrc] = useState(() => {
    // @ts-ignore
    const base = import.meta.env.BASE_URL || "/";
    return (base + props.image).replace(/\/+/g, '/');
  });
  const [retry, setRetry] = useState(0);

  const handleError = () => {
    if (retry === 0) {
      setImgSrc("./" + props.image);
      setRetry(1);
    } else if (retry === 1) {
      setImgSrc("/" + props.image);
      setRetry(2);
    } else if (retry === 2) {
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
  const bookRef = useRef<any>(null);
  const [page, setPage] = useState(0);

  const onPage = (e: any) => {
    setPage(e.data);
  };

  return (
    <section id="katalogu" className="py-24 bg-gray-50">
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
            Shfletoni faqet si një revistë për të parë të gjitha zbritjet.
          </p>
        </div>

        {/* Catalog Viewer (Magazine Style) */}
        <div className="relative max-w-[500px] mx-auto min-h-[500px] mb-12">
          <div className="shadow-2xl rounded-lg overflow-hidden border-4 border-white aspect-[1/1.414] bg-white relative">
            <HTMLFlipBook
              width={500}
              height={707}
              size="stretch"
              minWidth={240}
              maxWidth={500}
              minHeight={340}
              maxHeight={707}
              maxShadowOpacity={0.6}
              showCover={false}
              mobileScrollSupport={true}
              usePortrait={true}
              startPage={0}
              drawShadow={true}
              flippingTime={800}
              useMouseEvents={true}
              onFlip={onPage}
              className="mx-auto"
              ref={bookRef}
              style={{ display: 'block' }}
            >
              {catalogPages.map((img, index) => (
                <Page key={index} image={img} />
              ))}
            </HTMLFlipBook>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={() => bookRef.current?.pageFlip()?.flipPrev()}
            className="absolute -left-6 sm:-left-12 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center text-gray-800 hover:text-[#e33226] transition-all z-30 border border-gray-100"
            aria-label="Faqja e mëparshme"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button 
            onClick={() => bookRef.current?.pageFlip()?.flipNext()}
            className="absolute -right-6 sm:-right-12 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center text-gray-800 hover:text-[#e33226] transition-all z-30 border border-gray-100"
            aria-label="Faqja tjetër"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        {/* Page Indicator */}
        <div className="text-center">
          <div className="inline-block bg-white shadow-sm border border-gray-200 text-gray-700 px-6 py-2 rounded-full text-sm font-bold">
            Faqja {page + 1} nga {catalogPages.length}
          </div>
        </div>
      </div>
    </section>
  );
}


