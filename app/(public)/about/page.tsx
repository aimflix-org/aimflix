export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Aimflix
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated education consultancy and skills development organization committed to empowering students and professionals for global success.
          </p>
        </div>

        {/* Mission & Vision Section */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                AIMFLIX empowers individuals from Bangladesh and beyond to pursue global opportunities in education, travel, migration, and investment. Through expert counselling and end-to-end support, we simplify the complexities of international admissions, visa processes, relocation, and cross-border investments—connecting clients with trusted global partners to unlock their future potential.
              </p>
            </div>
            
            {/* Vision */}
            <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the leading global gateway for individuals seeking international education, travel, migration, and investment opportunities. AIMFLIX aims to redefine the overseas consulting experience—delivering personalized, reliable, and holistic solutions that create lasting success stories for clients and long-term value for our global network of partners.
              </p>
            </div>
          </div>
        </div>

        {/* Company Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                AIMFLIX is a dedicated education consultancy and skills development organization committed to empowering 
                students and professionals for global success. Our mission is to equip key team members with the knowledge 
                and expertise needed to deliver top-quality services that guide students through every step of their 
                educational journey abroad.
              </p>
              <p>
                We strive to exceed the standards set by internationally recognized regulatory and certifying bodies, 
                ensuring that our recruitment services meet the highest benchmarks of excellence. By securing official 
                representation from prestigious institutions worldwide, AIMFLIX actively supports international education 
                opportunities and promotes meaningful collaborations.
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">What We Do</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Our comprehensive approach includes organizing events, providing infrastructure and administrative support, 
                and offering coaching in language proficiency and competitive exam preparation. We guide students in choosing 
                the right programs and institutions aligned with their academic background, and assist throughout admission procedures.
              </p>
              <p>
                At AIMFLIX, we deliver end-to-end solutions— from program search and application support to scholarships, 
                visa assistance, pre-departure orientation, accommodation, and post-landing support. We also maintain ongoing 
                communication with families and gather student feedback to continually enhance our services and support future learners.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We exceed international standards and maintain the highest benchmarks of quality in all our services.",
                icon: "⭐"
              },
              {
                title: "Comprehensive Support",
                description: "We provide end-to-end solutions from initial consultation to post-landing support.",
                icon: "🤝"
              },
              {
                title: "Continuous Improvement",
                description: "We gather feedback and continuously enhance our services to better support future learners.",
                icon: "📈"
              },
              {
                title: "Global Partnerships",
                description: "We secure official representation from prestigious institutions worldwide.",
                icon: "🌍"
              },
              {
                title: "Student-Centric",
                description: "Every decision we make is focused on the success and well-being of our students.",
                icon: "🎓"
              },
              {
                title: "Family Communication",
                description: "We maintain ongoing communication with families to ensure transparency and trust.",
                icon: "💬"
              }
            ].map((value, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services Overview */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Comprehensive Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Education & Migration Services</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Foreign University Admission Support</li>
                <li>• Visa Counselling & Processing</li>
                <li>• Migration Advisory</li>
                <li>• Global Investment Facilitation</li>
                <li>• Paperwork & Documentation Assistance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Travel & Relocation Support</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Air-ticketing & Travel Support</li>
                <li>• Post-admission & Relocation Support</li>
                <li>• Pre-departure orientation</li>
                <li>• Accommodation assistance</li>
                <li>• Ongoing family communication</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Aimflix?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {[
                "Official representation from prestigious institutions worldwide",
                "Comprehensive end-to-end solutions",
                "Ongoing communication with families",
                "Continuous service enhancement based on feedback",
                "Meeting highest benchmarks of excellence",
                "Expert guidance throughout the entire process"
              ].map((point, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Your Success Partner</h3>
                <p className="text-gray-600">We&apos;re committed to your educational journey from start to finish</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-red-600 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Ready to Start Your Educational Journey?
          </h2>
          <p className="text-xl mb-6 text-red-100">
            Let us guide you through every step of your international education experience.
          </p>
          <a 
            href="/contact"
            className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </div>
  );
} 