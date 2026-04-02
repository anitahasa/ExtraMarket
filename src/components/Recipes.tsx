import React from 'react';
import { motion } from 'motion/react';
import { Instagram, ChefHat, ArrowRight } from 'lucide-react';

const recipes = [
  {
    id: 1,
    title: "Sallatë me Makarona & Perime të Freskëta",
    ingredients: "Makarona, Domate, Vaj Ulliri, Borzilok",
    image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=600&q=80",
    link: "https://www.instagram.com/extramarket_al/"
  },
  {
    id: 2,
    title: "Mish Viçi me Patate në Furrë",
    ingredients: "Mish Viçi, Patate, Rozmarinë, Hudhër",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    link: "https://www.instagram.com/extramarket_al/"
  },
  {
    id: 3,
    title: "Smoothie me Fruta Mali",
    ingredients: "Manaferra, Kos, Mjaltë, Banane",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80",
    link: "https://www.instagram.com/extramarket_al/"
  }
];

export default function Recipes() {
  return (
    <section className="py-24 bg-gray-50/50" id="recipes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#e33226] font-bold mb-4 bg-red-50 px-4 py-1.5 rounded-full text-sm uppercase tracking-wider">
              <ChefHat className="w-4 h-4" />
              <span>Frymëzim për Gatimin</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              Recetat e <span className="text-[#e33226]">Javës</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Zbuloni shije të reja me produktet tona më të freskëta. 
              Gatuani thjeshtë dhe shijshëm për familjen tuaj.
            </p>
          </div>
          <a 
            href="https://www.instagram.com/extramarket_al/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-900 font-bold hover:text-[#e33226] transition-colors group"
          >
            Na ndiqni në Instagram
            <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {recipes.map((recipe, index) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#e33226] transition-colors">
                  {recipe.title}
                </h3>
                <div className="mb-6">
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Përbërësit Kryesorë</p>
                  <p className="text-gray-600 font-medium">{recipe.ingredients}</p>
                </div>
                <a 
                  href={recipe.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-2xl font-bold hover:bg-[#e33226] transition-all group/btn"
                >
                  Shiko Recetën e Plotë
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
