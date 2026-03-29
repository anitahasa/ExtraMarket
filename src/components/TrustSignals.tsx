import { Leaf, ShieldCheck, Clock, ThumbsUp } from "lucide-react";

const features = [
  {
    name: "100% Freski e Garantuar",
    description: "Zgjedhim me kujdes produktet më të freskëta çdo mëngjes për familjen tuaj.",
    icon: Leaf,
    color: "text-green-600",
    bg: "bg-green-100"
  },
  {
    name: "Çmimet më të Mira",
    description: "Oferta të pakonkurrueshme dhe çmime fantastike për produktet bazë.",
    icon: ShieldCheck,
    color: "text-red-600",
    bg: "bg-red-100"
  },
  {
    name: "Hapur Çdo Ditë",
    description: "Jemi të hapur nga e Hëna në të Dielë, 07:00 - 22:00 për komoditetin tuaj.",
    icon: Clock,
    color: "text-green-600",
    bg: "bg-green-100"
  },
  {
    name: "Shërbim i Shkëlqyer",
    description: "Stafi ynë është gjithmonë i gatshëm t'ju ndihmojë me buzëqeshje.",
    icon: ThumbsUp,
    color: "text-red-600",
    bg: "bg-red-100"
  },
];

export default function TrustSignals() {
  return (
    <div className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col items-center text-center p-4 rounded-2xl hover:bg-gray-50 transition-colors">
              <div className={`w-14 h-14 ${feature.bg} rounded-full flex items-center justify-center mb-4 ${feature.color}`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
