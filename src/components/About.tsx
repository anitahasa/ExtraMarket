import { Info } from "lucide-react";

export default function About() {
  return (
    <div id="rreth-nesh" className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
          <Info className="w-6 h-6 md:w-8 md:h-8 text-[#78a22f]" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">Rreth Nesh</h2>
        </div>
        <div className="max-w-3xl">
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 md:mb-6">
            ExtraMarket ofron një standard të ri në blerjet e përditshme, duke sjellë produkte të freskëta, të sigurta dhe me çmimet më konkurruese në treg. Ne besojmë se cilësia nuk duhet të jetë luks, por një standard i përditshëm.
          </p>
          <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-700 font-medium">
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#e33226]"></div> Mbi 10,000 produkte në asortiment</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#78a22f]"></div> Kontroll rigoroz i cilësisë</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#e33226]"></div> Staf i kualifikuar dhe miqësor</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
