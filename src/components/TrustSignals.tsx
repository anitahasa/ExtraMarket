import React from 'react';
import { Leaf, ShieldCheck, Clock, ThumbsUp, CheckCircle2 } from "lucide-react";
import { motion } from 'motion/react';

const features = [
  {
    name: "Produkte të Freskëta Çdo Ditë",
    description: "Zgjedhim me kujdes produktet më të freskëta çdo mëngjes direkt nga fermat lokale.",
    icon: Leaf,
    color: "text-green-600",
    bg: "bg-green-50"
  },
  {
    name: "Çmimet më të Mira në Durrës",
    description: "Oferta të pakonkurrueshme dhe çmime fantastike për produktet tuaja të preferuara.",
    icon: ShieldCheck,
    color: "text-red-600",
    bg: "bg-red-50"
  },
  {
    name: "Shërbim Miqësor",
    description: "Stafi ynë është gjithmonë i gatshëm t'ju ndihmojë me buzëqeshje dhe profesionalizëm.",
    icon: ThumbsUp,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    name: "Hapur 07:00 – 22:00",
    description: "Jemi në shërbimin tuaj çdo ditë të javës, për t'ju ofruar komoditet maksimal.",
    icon: Clock,
    color: "text-orange-600",
    bg: "bg-orange-50"
  },
];

export default function TrustSignals() {
  return (
    <section className="bg-white py-24" id="pse-ne">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Pse të zgjidhni ExtraMarket?</h2>
          <div className="mt-4 flex items-center justify-center gap-2 text-[#78a22f] font-semibold">
            <CheckCircle2 className="w-5 h-5" />
            <span>Besimi juaj, prioriteti ynë</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-8 rounded-3xl border border-gray-100 hover:border-[#78a22f]/30 hover:shadow-xl hover:shadow-[#78a22f]/5 transition-all group"
            >
              <div className={`w-20 h-20 ${feature.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${feature.color}`}>
                <feature.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.name}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

