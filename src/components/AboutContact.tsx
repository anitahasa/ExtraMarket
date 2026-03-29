import { MapPin, Phone, Clock, Info, Instagram, Map } from "lucide-react";

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

export default function AboutContact() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rreth Nesh Section */}
        <div id="rreth-nesh" className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <Info className="w-8 h-8 text-[#78a22f]" />
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Rreth Nesh</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                ExtraMarket ofron një standard të ri në blerjet e përditshme, duke sjellë produkte të freskëta, të sigurta dhe me çmimet më konkurruese në treg. Ne besojmë se cilësia nuk duhet të jetë luks, por një standard i përditshëm.
              </p>
              <ul className="space-y-3 text-gray-700 font-medium">
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#e33226]"></div> Mbi 10,000 produkte në asortiment</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#78a22f]"></div> Kontroll rigoroz i cilësisë</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#e33226]"></div> Staf i kualifikuar dhe miqësor</li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-80">
              <img 
                src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=1000&auto=format&fit=crop" 
                alt="Brendësia e supermarketit" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Vendndodhja & Kontakti Section */}
        <div id="kontakti" className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
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
                  <h3 className="font-bold text-gray-900 mb-1">Na Kontaktoni</h3>
                  <p className="text-gray-600 text-sm">+355 69 123 4567<br/>info@extramarket.al</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 sm:col-span-2">
                <div className="bg-pink-50 p-3 rounded-full text-pink-600 shrink-0">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Instagram</h3>
                  <a href="https://instagram.com/extramarket.al" target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm hover:text-pink-600 transition-colors">
                    @extramarket.al - Na ndiqni për ofertat më të reja!
                  </a>
                </div>
              </div>
            </div>

            {/* Real Map */}
            <div className="bg-gray-200 rounded-2xl overflow-hidden relative min-h-[400px] shadow-sm border border-gray-100">
              <iframe
                title="Harta e Durrësit"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=Durres,Albania&t=&z=13&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
