import Image from "next/image";
import Link from "next/link";
import { Globe, ArrowRight, Sparkles, CheckCircle, GraduationCap, FileText, Plane } from "lucide-react";

export default function HeroSection() {
  const serviceCards = [
    {
      title: "University Admission",
      description: "Expert guidance for international universities",
      icon: GraduationCap,
      color: "from-blue-500 to-blue-600",
      delay: "0.3s"
    },
    {
      title: "Visa Processing",
      description: "Streamlined visa application support",
      icon: FileText,
      color: "from-green-500 to-green-600",
      delay: "0.5s"
    },
    {
      title: "Travel Support",
      description: "Seamless travel arrangements",
      icon: Plane,
      color: "from-purple-500 to-purple-600",
      delay: "0.7s"
    }
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/pxfuel.jpg"
          alt="Aimflix Hero Background"
          fill
          className="object-cover"
          priority
        />
        {/* Enhanced overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        {/* Animated particles effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-2 mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Sparkles className="w-6 h-6 text-red-400" />
              <span className="text-red-400 font-medium">Global Excellence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Empowering Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400"> Global Journey</span>
            </h1>
            
            <p className="text-xl mb-8 text-gray-200 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              Dedicated consultancy committed to guiding individuals through every step of their international education, travel, migration, and investment journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <Link 
                href="/services"
                className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/contact"
                className="group border-2 border-white/30 backdrop-blur-sm text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="grid gap-4">
              {serviceCards.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div 
                    key={index}
                    className="group relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: service.delay }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 flex-shrink-0`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-200 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                        <ArrowRight className="w-5 h-5 text-red-400" />
                      </div>
                    </div>
                    
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                );
              })}
              
              {/* Call to action card */}
              <div className="group relative bg-gradient-to-r from-red-600/20 to-red-700/20 backdrop-blur-xl rounded-2xl p-6 border border-red-500/30 hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Ready to Start?
                    </h3>
                    <p className="text-red-200 text-sm">
                      Let's begin your journey today
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 