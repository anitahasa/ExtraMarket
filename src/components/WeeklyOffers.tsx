import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
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
  const bookRef = useRef<any>(null);
  const [page, setPage] = useState(0);

  const onPage = (e: any) => {
    setPage(e.data);
  };

  return (
    <div id="katalogu" className="py-16 bg-gray-100 border-y border-gray-200 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center gap-2 text-[#e33226] font-semibold mb-3 bg-red-50 px-4 py-2 rounded-full">
            <BookOpen className="w-5 h-5" />
            <span>Oferta e vlefshme 27 - 29 Mars</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Fundjava e Ofertave
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Shfletoni fletëpalosjen tonë për të zbuluar zbritjet dhe ofertat më të fundit në të gjitha pikat ExtraMarket.
          </p>
        </div>

        {/* Catalog Viewer */}
        <div className="relative max-w-[450px] mx-auto block px-2 sm:px-12 min-h-[400px]">
          
          <div className="shadow-2xl rounded-lg overflow-hidden border-2 sm:border-4 border-white w-full aspect-[4/5.6] bg-white relative">
            <HTMLFlipBook
              width={400}
              height={560}
              size="stretch"
              minWidth={240}
              maxWidth={450}
              minHeight={340}
              maxHeight={650}
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
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm shadow-lg rounded-full flex items-center justify-center text-gray-800 hover:text-[#e33226] transition-all z-30 border border-gray-100"
            aria-label="Faqja e mëparshme"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
          <button 
            onClick={() => bookRef.current?.pageFlip()?.flipNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm shadow-lg rounded-full flex items-center justify-center text-gray-800 hover:text-[#e33226] transition-all z-30 border border-gray-100"
            aria-label="Faqja tjetër"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

        </div>
        
        {/* Page Indicator */}
        <div className="text-center mt-8">
          <div className="inline-block bg-white shadow-sm border border-gray-200 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium">
            Faqja {page + 1} nga {catalogPages.length}
          </div>
        </div>
      </div>
    </div>
  );
}
