import { Bell, Briefcase, PartyPopper } from "lucide-react";
import { motion } from "motion/react";

const announcements = [
  {
    id: 1,
    type: "hiring",
    icon: <Briefcase className="w-6 h-6 text-blue-600" />,
    title: "Kërkojmë Staf: Bashkohu me ne!",
    date: "28 Mars 2026",
    content: "ExtraMarket po zgjerohet! Jemi në kërkim të personave energjikë për pozicionet: Kasier/e dhe Punonjës/e Sektori për pikat tona në Durrës dhe Tiranë. Ofrojmë kushte të shkëlqyera pune dhe pagë konkurruese.",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100"
  },
  {
    id: 2,
    type: "greeting",
    icon: <PartyPopper className="w-6 h-6 text-green-600" />,
    title: "Gëzuar Festat nga ExtraMarket!",
    date: "Përditësimi i fundit",
    content: "Me rastin e festave, stafi i ExtraMarket ju uron shëndet, mbarësi dhe gëzim në familjet tuaja. Ju mirëpresim me super oferta festive në të gjitha pikat tona!",
    bgColor: "bg-green-50",
    borderColor: "border-green-100"
  }
];

export default function Announcements() {
  return (
    <div id="njoftime" className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10 justify-center">
          <Bell className="w-8 h-8 text-[#e33226]" />
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Njoftime & Të Reja</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {announcements.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-2xl border ${item.borderColor} ${item.bgColor} shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
