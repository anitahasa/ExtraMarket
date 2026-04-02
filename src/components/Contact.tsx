import React from 'react';
import { MapPin, Phone, Clock, Instagram, Map, Mail } from "lucide-react";
import { motion } from 'motion/react';

const locations = {
  "Durrës": [
    { name: "EXTRA 1", address: "Rr. A. Goga, L.11, pranë Muzeut të Dëshmorëve" },
    { name: "EXTRA 2", address: "Rr. Vëllazërimi, L.17, Unaza re Kënetë" },
    { name: "EXTRA 3", address: "Rr. Skënderbej, L.3, pranë Portit Detar" },
    { name: "EXTRA 4", address: "Rr. Tre Vëllezërit Thanasi, L.13, Hekurudha Plazh" },
    { name: "EXTRA 5", address: "Rr. Egnatia, L.4" },
    { name: "EXTRA 6", address: "Rr. Taulantia, L.1, pranë Muzeut Arkeologjik" },
    { name: "EXTRA 7", address: "Rr. Neki Libohova, L.12, pranë Tregut të Vogël Industrial" },
    { name: "EXTRA 9", address: "Rr. Pavarësia, L.13, Plazh" },
    { name: "EXTRA 10", address: "Rr. Hysen Kërtusha, L.18" },
    { name: "EXTRA 11", address: "Rr. Aleksander Goga" },
  ],
  "Tiranë": [
    { name: "EXTRA 8", address: "Njësia Bashkiake Nr.5, Rr. Sulejman Delvina" },
    { name: "EXTRA 12", address: "Bulevardi Bajram Curri, pranë Drejtorisë së Përgjithshme të Policisë" },
  ],
  "Manëz": [
    { name: "EXTRA MANËZ", address: "Rr. Ali Beqja" },
  ]
};

export default function Contact() {
  return (
    <section id="kontakti" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Na vizitoni në Durrës & më gjerë</h2>
          <p className="mt-4 text-lg text-gray-600">Gjeni pikën më të afërt ExtraMarket pranë jush</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-50 p-3 rounded-2xl text-[#e33226]">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Orari i Punës</h3>
                  <p className="text-gray-600">Hapur çdo ditë të javës</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="text-sm text-gray-500 mb-1">E Hënë - E Dielë</div>
                  <div className="font-bold text-gray-900 text-lg">07:00 - 22:00</div>
                </div>
                <div className="p-4 bg-green-50 rounded-2xl border border-green-100">
                  <div className="text-sm text-green-600 mb-1">Statusi</div>
                  <div className="font-bold text-green-700 text-lg">Hapur Tani</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-50 p-3 rounded-2xl text-blue-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Pikat tona kryesore</h3>
              </div>
              
              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
                {Object.entries(locations).map(([city, cityLocations]) => (
                  <div key={city} className="space-y-3">
                    <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest pt-2">{city}</h4>
                    {cityLocations.map((loc, idx) => (
                      <div key={idx} className="flex gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 group">
                        <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center font-bold text-gray-500 group-hover:bg-[#e33226] group-hover:text-white transition-colors shrink-0">
                          {loc.name.split(' ')[1] || 'EX'}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">{loc.name}</div>
                          <div className="text-sm text-gray-500 leading-relaxed">{loc.address}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="mailto:info@extramarket.al" className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl border border-gray-200 hover:border-[#e33226] hover:text-[#e33226] transition-all font-bold text-gray-700">
                <Mail className="w-5 h-5" />
                info@extramarket.al
              </a>
              <a href="#" className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl border border-gray-200 hover:border-[#e33226] hover:text-[#e33226] transition-all font-bold text-gray-700">
                <Instagram className="w-5 h-5" />
                @extramarket_al
              </a>
            </div>
          </motion.div>

          {/* Map Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full min-h-[500px] lg:min-h-[700px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white relative group"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d95856.57147385973!2d19.37890250785189!3d41.34114258882583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sextramarket%20durres!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Harta e pikave ExtraMarket"
              className="grayscale group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
            
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/20">
              <div className="flex items-center gap-4">
                <div className="bg-[#e33226] p-3 rounded-2xl text-white shadow-lg shadow-red-500/30">
                  <Map className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-black text-gray-900 text-lg">Gjeni pikën më të afërt</p>
                  <p className="text-gray-500 font-medium">Përdorni hartën për të naviguar drejt nesh</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

