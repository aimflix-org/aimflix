import Link from "next/link";
import { ArrowRight, Sparkles, Globe, Star } from "lucide-react";

export default function CallToActionSection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background with gradient and animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-700 to-red-800">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        
        {/* Floating icons */}
        <div className="absolute top-10 left-10 text-white/10 animate-spin-slow">
          <Globe className="w-16 h-16" />
        </div>
        
        <div className="absolute bottom-10 right-10 text-white/10 animate-spin-slow-reverse">
          <Star className="w-12 h-12" />
        </div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Sparkles className="w-6 h-6 text-red-200" />
            <span className="text-red-200 font-medium">Ready to Start?</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Ready to Start Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-200 to-orange-200"> Global Journey?</span>
          </h2>
          
          <p className="text-xl mb-10 text-red-100 leading-relaxed max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            Let us guide you through every step of your international experience with expert support and personalized solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <Link 
              href="/contact"
              className="group bg-white text-red-600 hover:bg-gray-50 px-10 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3 shadow-lg"
            >
              <span>Contact Us Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/services"
              className="group border-2 border-white/30 backdrop-blur-sm text-white hover:bg-white/10 px-10 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-8 text-white/80 text-sm animate-fade-in-up" style={{ animationDelay: '1s' }}>
            {[
              { icon: "🎓", text: "Expert Guidance" },
              { icon: "🌍", text: "Global Network" },
              { icon: "⚡", text: "Fast Processing" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-lg">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 