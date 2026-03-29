import { MapPin, Phone, Clock, Instagram, Map } from "lucide-react";

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
    <div id="kontakti" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-8 text-center">Pikat Tona & Kontakti</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 sm:col-span-2">
                <div className="bg-red-50 p-3 rounded-full text-[#e33226] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="w-full">
                  <h3 className="font-bold text-gray-900 mb-4">Pikat ExtraMarket</h3>
                  <div className="space-y-6 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                    {Object.entries(locations).map(([city, cityLocations]) => (
                      <div key={city}>
                        <h4 className="text-[#78a22f] font-bold text-sm uppercase tracking-wider mb-3 border-b border-gray-100 pb-1">{city}</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {cityLocations.map((loc, idx) => (
                            <div key={idx} className="bg-gray-50 p-3 rounded-lg border border-gray-100 hover:border-red-100 transition-colors">
                              <p className="font-bold text-gray-800 text-xs">{loc.name}</p>
                              <p className="text-gray-500 text-xs mt-1 leading-relaxed">{loc.address}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                <div className="bg-green-50 p-3 rounded-full text-[#78a22f] shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Orari i Punës</h3>
                  <p className="text-gray-600 text-sm">E Hënë - E Dielë<br/>07:00 - 22:00</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                <div className="bg-red-50 p-3 rounded-full text-[#e33226] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Kontakti</h3>
                  <p className="text-gray-600 text-sm">info@extramarket.al</p>
                  <div className="mt-3 flex gap-2">
                    <a href="#" className="p-2 bg-gray-50 rounded-full text-gray-600 hover:text-[#e33226] hover:bg-red-50 transition-colors">
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Area */}
            <div className="bg-gray-200 rounded-2xl overflow-hidden min-h-[400px] relative border border-gray-100 shadow-inner">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d95856.57147385973!2d19.37890250785189!3d41.34114258882583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sextramarket%20durres!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Harta e pikave ExtraMarket"
              ></iframe>
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="bg-[#e33226] p-2 rounded-lg text-white">
                    <Map className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Gjeni pikën më të afërt</p>
                    <p className="text-gray-500 text-xs">Përdorni hartën për të naviguar drejt nesh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
