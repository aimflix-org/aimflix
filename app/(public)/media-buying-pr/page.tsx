export default function MediaBuyingPRPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Media Buying & Public Relations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic media solutions and public relations services to enhance the visibility and reputation of educational institutions worldwide.
          </p>
        </div>

        {/* Services Overview */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Media Buying Services</h2>
            <p className="text-gray-600 mb-6">
              We provide comprehensive media buying services to help educational institutions reach their target audience effectively and efficiently.
            </p>
            <ul className="space-y-3">
              {[
                "Strategic media planning and placement",
                "Digital advertising campaigns",
                "Print media advertising",
                "Broadcast media buying",
                "Social media advertising",
                "Performance tracking and optimization"
              ].map((service, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Public Relations</h2>
            <p className="text-gray-600 mb-6">
              Our PR services help educational institutions build strong relationships with stakeholders and maintain a positive public image.
            </p>
            <ul className="space-y-3">
              {[
                "Media relations and press releases",
                "Crisis communication management",
                "Stakeholder engagement strategies",
                "Reputation management",
                "Event planning and coordination",
                "Content creation and distribution"
              ].map((service, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Media Channels */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Media Channels We Specialize In</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Media",
                description: "Online advertising, social media campaigns, and digital content marketing",
                icon: "💻",
                features: ["Social media advertising", "Google Ads", "Display advertising", "Video marketing"]
              },
              {
                title: "Print Media",
                description: "Traditional print advertising in newspapers, magazines, and educational publications",
                icon: "📰",
                features: ["Newspaper ads", "Magazine placements", "Educational journals", "Direct mail campaigns"]
              },
              {
                title: "Broadcast Media",
                description: "Television and radio advertising for maximum reach and impact",
                icon: "📺",
                features: ["TV commercials", "Radio spots", "Podcast advertising", "Streaming platform ads"]
              }
            ].map((channel, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="text-4xl mb-4">{channel.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{channel.title}</h3>
                <p className="text-gray-600 mb-4">{channel.description}</p>
                <ul className="space-y-2">
                  {channel.features.map((feature, j) => (
                    <li key={j} className="text-sm text-gray-700">• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* PR Services Detail */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Public Relations Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Media Relations</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Press release writing and distribution</li>
                <li>• Media kit development</li>
                <li>• Journalist relationship building</li>
                <li>• Media monitoring and reporting</li>
                <li>• Interview coordination</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Strategic Communication</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Crisis communication planning</li>
                <li>• Stakeholder messaging</li>
                <li>• Brand positioning</li>
                <li>• Reputation management</li>
                <li>• Internal communication</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Measuring Success</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { metric: "Reach", value: "Increased visibility", description: "Expanded audience reach across multiple channels" },
              { metric: "Engagement", value: "Higher interaction", description: "Improved engagement rates and audience participation" },
              { metric: "Reputation", value: "Enhanced image", description: "Strengthened institutional reputation and credibility" },
              { metric: "ROI", value: "Measurable results", description: "Clear return on investment with detailed analytics" }
            ].map((metric, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">{metric.metric}</h3>
                <p className="text-red-600 font-semibold mb-2">{metric.value}</p>
                <p className="text-gray-600 text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-red-600 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Ready to Enhance Your Institution&apos;s Visibility?
          </h2>
          <p className="text-xl mb-6 text-red-100">
            Let us help you develop a comprehensive media buying and PR strategy that drives results.
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