import React from 'react';
import { motion } from 'motion/react';
import { Tag } from 'lucide-react';

const offers = [
  {
    id: 1,
    name: "Coca Cola 1.5L",
    price: "1.20",
    oldPrice: "1.60",
    discount: "-25%",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=400&q=80",
    category: "Pije"
  },
  {
    id: 2,
    name: "Djathë i Bardhë 1kg",
    price: "4.50",
    oldPrice: "6.00",
    discount: "-30%",
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=400&q=80",
    category: "Bulmet & Vezë"
  },
  {
    id: 3,
    name: "Mish Viçi i Freskët",
    price: "8.90",
    oldPrice: "11.50",
    discount: "-22%",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc822?auto=format&fit=crop&w=400&q=80",
    category: "Mish & Peshk"
  },
  {
    id: 4,
    name: "Vaj Ulliri 1L",
    price: "5.20",
    oldPrice: "7.80",
    discount: "-33%",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=400&q=80",
    category: "Produkte Shpaje"
  },
  {
    id: 5,
    name: "Mollë të Kuqe 1kg",
    price: "0.80",
    oldPrice: "1.20",
    discount: "-33%",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6bcd6?auto=format&fit=crop&w=400&q=80",
    category: "Fruta & Perime"
  },
  {
    id: 6,
    name: "Bukë Shtëpie",
    price: "0.60",
    oldPrice: "0.80",
    discount: "-25%",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80",
    category: "Bukë & Brumëra"
  }
];

interface OffersGridProps {
  selectedCategory: string | null;
}

export default function OffersGrid({ selectedCategory }: OffersGridProps) {
  const filteredOffers = selectedCategory 
    ? offers.filter(offer => offer.category === selectedCategory)
    : offers;

  return (
    <section className="py-20 bg-gray-50" id="offers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl flex items-center gap-3">
              <Tag className="text-[#e33226] w-8 h-8" />
              {selectedCategory ? `Ofertat për ${selectedCategory}` : "Ofertat e Javës 🔥"}
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              {selectedCategory 
                ? `Zbuloni zbritjet më të mira për kategorinë ${selectedCategory}`
                : "Kurseni më shumë me ofertat tona fantastike"
              }
            </p>
          </div>
          {!selectedCategory && (
            <button className="bg-[#e33226] text-white px-8 py-3 rounded-full font-bold hover:bg-[#c42b20] transition-colors shadow-lg hover:shadow-xl">
              Shiko të gjitha
            </button>
          )}
        </div>

        {filteredOffers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredOffers.map((offer) => (
              <motion.div
                key={offer.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-[#e33226] text-white px-4 py-1.5 rounded-full font-bold text-lg shadow-md">
                    {offer.discount}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                    {offer.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#e33226] transition-colors">
                    {offer.name}
                  </h3>
                  <div className="flex items-end justify-between">
                    <div className="flex items-end gap-3">
                      <span className="text-3xl font-black text-[#e33226]">€{offer.price}</span>
                      <span className="text-lg text-gray-400 line-through mb-1">€{offer.oldPrice}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-[2.5rem] border-2 border-dashed border-gray-200">
            <p className="text-xl text-gray-500 font-medium">Nuk u gjetën oferta për këtë kategori për momentin.</p>
            <button 
              onClick={() => window.location.href = '#categories'}
              className="mt-4 text-[#e33226] font-bold hover:underline"
            >
              Zgjidhni një kategori tjetër
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
