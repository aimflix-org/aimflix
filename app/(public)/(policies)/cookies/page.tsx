import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - Aimflix",
  description: "Cookie Policy for Aimflix - Learn how we use cookies and similar technologies on our website.",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cookie Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              This Cookie Policy explains how AIMFLIX (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) uses cookies and similar technologies when you visit our website, aimflix.org. This policy explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>
          </section>

          {/* What are Cookies */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What are Cookies?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Cookies set by the website owner (in this case, AIMFLIX) are called &quot;first-party cookies.&quot; Cookies set by parties other than the website owner are called &quot;third-party cookies.&quot; Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).
            </p>
          </section>

          {/* Why We Use Cookies */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Why We Use Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as &quot;essential&quot; or &quot;strictly necessary&quot; cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our website.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We use cookies to:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
              <li>Remember your preferences and settings</li>
              <li>Analyze how our website is used</li>
              <li>Improve our website&apos;s functionality and user experience</li>
              <li>Provide personalized content and services</li>
              <li>Ensure the security of our website</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>
          </section>

          {/* Types of Cookies We Use */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Types of Cookies We Use
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Essential Cookies</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  These cookies are essential for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
                </p>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1 ml-4">
                  <li>Authentication cookies</li>
                  <li>Security cookies</li>
                  <li>Session management cookies</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics Cookies</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                </p>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1 ml-4">
                  <li>Google Analytics cookies</li>
                  <li>Website performance tracking</li>
                  <li>User behavior analysis</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Functional Cookies</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
                </p>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1 ml-4">
                  <li>Language preference cookies</li>
                  <li>Form completion cookies</li>
                  <li>User preference cookies</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing Cookies</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user.
                </p>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1 ml-4">
                  <li>Advertising cookies</li>
                  <li>Social media cookies</li>
                  <li>Retargeting cookies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Third-Party Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, deliver advertisements on and through the website, and so on.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These third-party cookies include:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
              <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
              <li><strong>Social Media Platforms:</strong> For social media integration and sharing</li>
              <li><strong>Advertising Networks:</strong> For targeted advertising and marketing</li>
              <li><strong>Payment Processors:</strong> For secure payment processing</li>
            </ul>
          </section>

          {/* Cookie Management */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Managing Your Cookie Preferences
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have several options for managing cookies on our website:
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Browser Settings</h3>
                <p className="text-gray-700 leading-relaxed">
                  Most web browsers allow you to manage cookies through their settings preferences. You can:
                </p>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1 ml-4 mt-2">
                  <li>Delete existing cookies</li>
                  <li>Block cookies from being set</li>
                  <li>Set your browser to notify you when cookies are being set</li>
                  <li>Choose which cookies to accept or reject</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cookie Consent</h3>
                <p className="text-gray-700 leading-relaxed">
                  When you first visit our website, you will be presented with a cookie consent banner. You can choose which types of cookies you want to accept or reject.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Opt-Out Links</h3>
                <p className="text-gray-700 leading-relaxed">
                  For third-party cookies, you can often opt out through the third-party&apos;s own website or privacy policy.
                </p>
              </div>
            </div>
          </section>

          {/* Cookie Duration */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How Long Do Cookies Last?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The length of time a cookie stays on your device depends on whether it is a &quot;persistent&quot; or &quot;session&quot; cookie:
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Session Cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  These cookies are temporary and are deleted when you close your browser. They are used to maintain your session while you browse our website.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Persistent Cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  These cookies remain on your device until they expire or you delete them. They are used to remember your preferences and settings for future visits.
                </p>
              </div>
            </div>
          </section>

          {/* Updates to Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Updates to This Cookie Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Cookie Policy on our website and updating the &quot;Last updated&quot; date at the top of this policy.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700">
                <strong>Email:</strong> privacy@aimflix.org<br />
                <strong>Address:</strong> [Your Company Address]<br />
                <strong>Phone:</strong> [Your Phone Number]
              </p>
            </div>
          </section>

          {/* Footer */}
          <div className="border-t border-gray-200 pt-8 mt-8">
            <p className="text-sm text-gray-500 text-center">
              © {new Date().getFullYear()} Aimflix. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 