import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t-4 border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & About */}
          <div>
            <div className="mb-6 bg-white inline-block p-3 rounded-2xl">
              <Logo />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Supermarketi juaj i besuar në Durrës. Ne sjellim produktet më të freskëta dhe markat më të mira pranë familjes suaj.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Lidhje të Shpejta</h3>
            <ul className="space-y-4">
              <li><a href="#kreu" className="hover:text-red-400 transition-colors">Kreu</a></li>
              <li><a href="#katalogu" className="hover:text-red-400 transition-colors">Katalogu i Ofertave</a></li>
              <li><a href="#recipes" className="hover:text-red-400 transition-colors">Recetat e Javës</a></li>
              <li><a href="#pse-ne" className="hover:text-red-400 transition-colors">Pse ne</a></li>
              <li><a href="#kontakti" className="hover:text-red-400 transition-colors">Pikat e shitjeve</a></li>
              <li><a href="#kontakti" className="hover:text-red-400 transition-colors">Kontakti</a></li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Na Vizitoni</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Rruga Pavarësia, Lagjja 13<br/>Plazh, Durrës 2001<br/>Shqipëri</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>+355 69 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>info@extramarket.al</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Orari i Punës</h3>
            <div className="p-4 bg-gray-800 rounded-xl border border-gray-700">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300">E Hënë - E Premte</span>
                <span className="text-white font-medium">07:00 - 22:00</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300">E Shtunë</span>
                <span className="text-white font-medium">07:00 - 22:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">E Dielë</span>
                <span className="text-white font-medium">07:00 - 22:00</span>
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} ExtraMarket Durrës. Të gjitha të drejtat e rezervuara.
          </p>
        </div>
      </div>
    </footer>
  );
}
