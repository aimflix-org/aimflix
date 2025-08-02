import Image from "next/image";
import Link from "next/link";
import { Globe, ArrowRight, Sparkles, CheckCircle } from "lucide-react";

export default function HeroSection() {
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
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/20 hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg hover:rotate-6 hover:scale-110 transition-all duration-300">
                  <Globe className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Global Gateway</h3>
                <p className="text-gray-200 mb-6">Your trusted partner for international opportunities</p>
                
                <div className="space-y-3">
                  {[
                    "Worldwide Network",
                    "Expert Guidance", 
                    "24/7 Support"
                  ].map((feature, i) => (
                    <div 
                      key={i}
                      className="flex items-center gap-3 text-gray-200 animate-fade-in-up"
                      style={{ animationDelay: `${1.2 + i * 0.1}s` }}
                    >
                      <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 