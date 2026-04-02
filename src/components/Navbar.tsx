import { useState } from "react";
import { Menu, X, MapPin } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a href="#" className="flex items-center">
              <Logo />
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#kreu" className="text-gray-700 hover:text-[#e33226] font-bold transition-colors">Kreu</a>
            <a href="#categories" className="text-gray-700 hover:text-[#e33226] font-bold transition-colors">Kategoritë</a>
            <a href="#katalogu" className="text-gray-700 hover:text-[#e33226] font-bold transition-colors">Katalogu</a>
            <a href="#offers" className="text-gray-700 hover:text-[#e33226] font-bold transition-colors">Ofertat</a>
            <a href="#recipes" className="text-gray-700 hover:text-[#e33226] font-bold transition-colors">Receta</a>
            <a href="#pse-ne" className="text-gray-700 hover:text-[#e33226] font-bold transition-colors">Pse ne?</a>
            <a href="#kontakti" className="text-gray-700 hover:text-[#e33226] font-bold transition-colors">Kontakti</a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-1 text-sm font-medium text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
              <MapPin className="w-4 h-4 text-[#e33226]" />
              <span>Durrës, AL</span>
            </div>
            {/* Hamburger Menu Button (Visible on mobile, or all screens if preferred. Standard is mobile) */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors lg:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-2 shadow-lg absolute w-full left-0">
          <a href="#kreu" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-gray-700 font-bold hover:bg-red-50 hover:text-[#e33226] rounded-lg transition-colors">Kreu</a>
          <a href="#categories" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-gray-700 font-bold hover:bg-red-50 hover:text-[#e33226] rounded-lg transition-colors">Kategoritë</a>
          <a href="#katalogu" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-gray-700 font-bold hover:bg-red-50 hover:text-[#e33226] rounded-lg transition-colors">Katalogu</a>
          <a href="#offers" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-gray-700 font-bold hover:bg-red-50 hover:text-[#e33226] rounded-lg transition-colors">Ofertat</a>
          <a href="#recipes" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-gray-700 font-bold hover:bg-red-50 hover:text-[#e33226] rounded-lg transition-colors">Receta</a>
          <a href="#pse-ne" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-gray-700 font-bold hover:bg-red-50 hover:text-[#e33226] rounded-lg transition-colors">Pse ne?</a>
          <a href="#kontakti" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-gray-700 font-bold hover:bg-red-50 hover:text-[#e33226] rounded-lg transition-colors">Kontakti</a>
        </div>
      )}
    </nav>
  );
}
