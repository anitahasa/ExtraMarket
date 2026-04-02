import React from 'react';
import { motion } from 'motion/react';

const categories = [
  {
    title: "Fruta & Perime",
    icon: "🥦",
    image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=400&q=80",
    color: "bg-green-100"
  },
  {
    title: "Mish & Peshk",
    icon: "🥩",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc822?auto=format&fit=crop&w=400&q=80",
    color: "bg-red-100"
  },
  {
    title: "Pije",
    icon: "🥤",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=400&q=80",
    color: "bg-blue-100"
  },
  {
    title: "Bukë & Brumëra",
    icon: "🍞",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80",
    color: "bg-orange-100"
  },
  {
    title: "Bulmet & Vezë",
    icon: "🥚",
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=400&q=80",
    color: "bg-yellow-100"
  },
  {
    title: "Produkte Shpaje",
    icon: "🥫",
    image: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&w=400&q=80",
    color: "bg-gray-100"
  }
];

export default function Categories() {
  return (
    <section className="py-16 bg-white" id="categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Kategoritë tona</h2>
          <p className="mt-4 text-lg text-gray-600">Zgjidhni produktet tuaja të preferuara sipas kategorisë</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
            >
              <div className={`relative aspect-square rounded-2xl overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-shadow ${category.color}`}>
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center text-4xl">
                  {category.icon}
                </div>
              </div>
              <h3 className="text-center font-semibold text-gray-800 group-hover:text-[#e33226] transition-colors">
                {category.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
