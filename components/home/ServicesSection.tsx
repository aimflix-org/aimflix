import { 
  GraduationCap, 
  FileText, 
  Globe, 
  DollarSign, 
  Plane, 
  Home,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Foreign University Admission Support",
      description: "End-to-end counselling, documentation, and application assistance for top international institutions.",
      icon: GraduationCap,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Visa Counselling & Processing",
      description: "Expert guidance for student, visitor, migration, and investor visa categories.",
      icon: FileText,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Migration Advisory",
      description: "Strategic consultation for skilled migration, permanent residency, and pathway programs.",
      icon: Globe,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Global Investment Facilitation",
      description: "Guidance on international investment opportunities including golden visa programs and real estate.",
      icon: DollarSign,
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Air-ticketing & Travel Support",
      description: "Seamless flight booking, travel insurance, and itinerary planning.",
      icon: Plane,
      color: "from-red-500 to-red-600"
    },
    {
      title: "Post-admission & Relocation Support",
      description: "Accommodation, airport pickup, settlement services, and local onboarding.",
      icon: Home,
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <Sparkles className="w-6 h-6 text-red-500" />
            <span className="text-red-500 font-medium">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Comprehensive Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            See how AIMFLIX supports your global journey with end-to-end solutions for education, migration, investment, and travel.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-stagger">
          {services.map((service, i) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={i} 
                className="group relative hover:-translate-y-2 hover:scale-105 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-6 flex items-center justify-center shadow-lg hover:rotate-6 hover:scale-110 transition-all duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-red-500 font-medium text-sm hover:translate-x-1 transition-transform duration-200">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 