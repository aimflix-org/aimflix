import Image from "next/image";
import Link from "next/link";
import { Globe, ArrowRight, Sparkles, CheckCircle, GraduationCap, FileText, Plane, DollarSign, Home, Users } from "lucide-react";

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
      delay: "0.4s"
    },
    {
      title: "Migration Advisory",
      description: "Strategic migration consultation",
      icon: Users,
      color: "from-purple-500 to-purple-600",
      delay: "0.5s"
    },
    {
      title: "Investment Facilitation",
      description: "Global investment opportunities",
      icon: DollarSign,
      color: "from-yellow-500 to-yellow-600",
      delay: "0.6s"
    },
    {
      title: "Travel Support",
      description: "Seamless travel arrangements",
      icon: Plane,
      color: "from-red-500 to-red-600",
      delay: "0.7s"
    },
    {
      title: "Relocation Support",
      description: "Post-admission assistance",
      icon: Home,
      color: "from-indigo-500 to-indigo-600",
      delay: "0.8s"
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
            <div className="grid grid-cols-2 gap-3">
              {serviceCards.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div 
                    key={index}
                    className="group relative bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20 hover:scale-105 transition-all duration-300 animate-fade-in-up hover:bg-white/20"
                    style={{ animationDelay: service.delay }}
                  >
                    <div className="flex flex-col items-center text-center gap-3">
                      <div className={`w-10 h-10 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-bold text-white mb-1 group-hover:text-red-200 transition-colors leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 text-xs leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                );
              })}
              
              {/* Call to action card - spans full width */}
              <div className="col-span-2 group relative bg-gradient-to-r from-red-600/20 to-red-700/20 backdrop-blur-xl rounded-xl p-4 border border-red-500/30 hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1">
                      Ready to Start?
                    </h3>
                    <p className="text-red-200 text-xs">
                      Let&apos;s begin your journey today
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
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