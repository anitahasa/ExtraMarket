import { ChefHat, Clock, Users } from "lucide-react";
import { motion } from "motion/react";

const recipes = [
  {
    id: 1,
    title: "Makarona me Salcë Domate dhe Borzilok",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=800&auto=format&fit=crop",
    time: "20 Min",
    servings: "4 Persona",
    description: "Një recetë klasike italiane, e thjeshtë dhe plot shije, e përgatitur me përbërës të freskët nga ExtraMarket."
  },
  {
    id: 2,
    title: "Sallatë e Freskët Verore me Djathë të Bardhë",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
    time: "10 Min",
    servings: "2 Persona",
    description: "Sallatë e lehtë dhe e shëndetshme me perime të stinës, vaj ulliri ekstra i virgjër dhe djathë të bardhë."
  },
  {
    id: 3,
    title: "Pule e Pjekur me Patate dhe Rozmarinë",
    image: "https://images.unsplash.com/photo-1598515318256-c9817fee29bc?q=80&w=800&auto=format&fit=crop",
    time: "60 Min",
    servings: "6 Persona",
    description: "Pjatë kryesore e përkryer për drekën e së dielës me familjen. Mish pule i freskët dhe patate vendi."
  }
];

export default function Recipes() {
  return (
    <div id="receta" className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 text-[#78a22f] font-semibold mb-3 bg-green-50 px-4 py-2 rounded-full">
            <ChefHat className="w-5 h-5" />
            <span>Këndi i Gatimit</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Receta të Shijshme
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Frymëzohuni nga recetat tona të përzgjedhura, të përgatitura me produktet më të freskëta që gjeni në ExtraMarket.
          </p>
        </div>

        <div className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-x-visible gap-6 md:gap-8 pb-6 md:pb-0 snap-x snap-mandatory scrollbar-hide">
          {recipes.map((recipe, index) => (
            <motion.div 
              key={recipe.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow group flex flex-col min-w-[280px] w-[85%] md:w-full snap-center shrink-0"
            >
              <div className="relative h-48 overflow-hidden shrink-0">
                <img 
                  src={recipe.image} 
                  alt={recipe.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{recipe.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{recipe.description}</p>
                <div className="flex items-center gap-4 text-sm font-medium text-gray-500 pt-4 border-t border-gray-50 mt-auto">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#e33226]" />
                    <span>{recipe.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[#78a22f]" />
                    <span>{recipe.servings}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
