import { 
  CheckCircle, 
  Shield, 
  Users, 
  Award, 
  Clock, 
  Heart,
  Sparkles,
  Star
} from "lucide-react";

export default function WhyChooseUsSection() {
  const features = [
    {
      text: "Official representation from prestigious institutions worldwide",
      icon: Shield
    },
    {
      text: "Comprehensive end-to-end solutions",
      icon: CheckCircle
    },
    {
      text: "Expert guidance for all visa categories",
      icon: Users
    },
    {
      text: "Strategic migration and investment advice",
      icon: Award
    },
    {
      text: "Seamless travel and relocation support",
      icon: Clock
    },
    {
      text: "Ongoing assistance throughout your journey",
      icon: Heart
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <Sparkles className="w-6 h-6 text-red-500" />
            <span className="text-red-500 font-medium">Why Choose Us</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Trusted Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We exceed international standards and provide comprehensive solutions for your global aspirations.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="space-y-6">
              {features.map((feature, i) => {
                const IconComponent = feature.icon;
                return (
                  <div 
                    key={i} 
                    className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-900 transition-colors">
                      {feature.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-3xl blur-3xl" />
            <div className="relative bg-white rounded-3xl shadow-2xl p-12 border border-gray-100 hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-red-600 rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-xl hover:rotate-10 hover:scale-110 transition-all duration-300">
                  <Star className="w-12 h-12 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Trusted Partner</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Your success is our priority. We're committed to your educational journey from start to finish.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: "500+", label: "Happy Clients" },
                    { number: "50+", label: "Countries" },
                    { number: "24/7", label: "Support" },
                    { number: "99%", label: "Success Rate" }
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-red-600 mb-1">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
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