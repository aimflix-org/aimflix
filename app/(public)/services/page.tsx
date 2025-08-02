export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how AIMFLIX supports your global journey
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              id: "foreign-university-admission",
              title: "Foreign University Admission Support",
              description: "End-to-end counselling, documentation, and application assistance for top international institutions.",
              features: [
                "University selection and matching",
                "Application documentation",
                "Personal statement guidance",
                "Interview preparation",
                "Admission tracking"
              ],
              icon: "🎓"
            },
            {
              id: "visa-counselling",
              title: "Visa Counselling & Processing",
              description: "Expert guidance for student, visitor, migration, and investor visa categories.",
              features: [
                "Student visa applications",
                "Visitor visa processing",
                "Migration visa support",
                "Investor visa guidance",
                "Document preparation"
              ],
              icon: "🛂"
            },
            {
              id: "migration-advisory",
              title: "Migration Advisory",
              description: "Strategic consultation for skilled migration, permanent residency, and pathway programs.",
              features: [
                "Skilled migration assessment",
                "Permanent residency pathways",
                "Points-based system guidance",
                "Occupation list analysis",
                "Migration strategy planning"
              ],
              icon: "🌍"
            },
            {
              id: "global-investment",
              title: "Global Investment Facilitation",
              description: "Guidance on international investment opportunities (e.g., golden visa programs, real estate, business migration).",
              features: [
                "Golden visa programs",
                "Real estate investment",
                "Business migration",
                "Investment portfolio planning",
                "Legal compliance guidance"
              ],
              icon: "💰"
            },
            {
              id: "air-ticketing",
              title: "Air-ticketing & Travel Support",
              description: "Seamless flight booking, travel insurance, and itinerary planning.",
              features: [
                "Flight booking services",
                "Travel insurance",
                "Itinerary planning",
                "Visa-compliant tickets",
                "Travel documentation"
              ],
              icon: "✈️"
            },
            {
              id: "paperwork-documentation",
              title: "Paperwork & Documentation Assistance",
              description: "Comprehensive support for SOPs, financial docs, notarization, embassy requirements, and more.",
              features: [
                "Statement of Purpose (SOP)",
                "Financial documentation",
                "Document notarization",
                "Embassy requirements",
                "Application forms"
              ],
              icon: "📄"
            },
            {
              id: "post-admission",
              title: "Post-admission & Relocation Support",
              description: "Accommodation, airport pickup, settlement services, and local onboarding.",
              features: [
                "Accommodation assistance",
                "Airport pickup services",
                "Local settlement support",
                "Cultural orientation",
                "Ongoing assistance"
              ],
              icon: "🏠"
            }
          ].map((service, i) => (
            <div key={i} id={service.id} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-start space-x-2">
                    <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Support Services */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Comprehensive Support Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Pre-Departure Services</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Pre-departure orientation sessions</li>
                <li>• Cultural preparation training</li>
                <li>• Travel documentation assistance</li>
                <li>• Health insurance guidance</li>
                <li>• Financial planning support</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Ongoing Support</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Regular check-ins and updates</li>
                <li>• Emergency support services</li>
                <li>• Academic progress monitoring</li>
                <li>• Family communication updates</li>
                <li>• Continuous guidance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Process Flow */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Assessment", description: "Evaluate your goals and requirements" },
              { step: "2", title: "Planning", description: "Develop personalized strategy" },
              { step: "3", title: "Implementation", description: "Execute your global journey plan" },
              { step: "4", title: "Support", description: "Provide ongoing assistance" }
            ].map((process, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{process.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-red-600 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Ready to Start Your Global Journey?
          </h2>
          <p className="text-xl mb-6 text-red-100">
            Contact us today to learn more about our comprehensive services for your international aspirations.
          </p>
          <a 
            href="/contact"
            className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
} 