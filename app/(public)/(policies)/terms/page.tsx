import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Aimflix",
  description: "Terms of Service for Aimflix - Read our terms and conditions for using our services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms of Service
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
              Welcome to Aimflix (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). These Terms of Service (&quot;Terms&quot;) govern your use of our website, services, and any related applications (collectively, the &quot;Service&quot;). By accessing or using our Service, you agree to be bound by these Terms and our Privacy Policy.
            </p>
          </section>

          {/* Acceptance of Terms */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Acceptance of Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using our Service, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must not use our Service. We reserve the right to modify these Terms at any time, and such modifications will be effective immediately upon posting.
            </p>
          </section>

          {/* Description of Service */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Description of Service
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Aimflix provides streaming entertainment services, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Access to movies, TV shows, and other video content</li>
              <li>Personalized recommendations and content discovery</li>
              <li>User accounts and profile management</li>
              <li>Mobile and web applications</li>
              <li>Customer support and technical assistance</li>
            </ul>
          </section>

          {/* User Accounts */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              User Accounts
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                To access certain features of our Service, you may be required to create an account. You are responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Providing accurate and complete information</li>
                <li>Maintaining the security of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
                <li>Ensuring you are at least 13 years old to create an account</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to terminate or suspend accounts that violate these Terms or for any other reason at our sole discretion.
              </p>
            </div>
          </section>

          {/* Acceptable Use */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Acceptable Use
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree to use our Service only for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Use the Service for any illegal or unauthorized purpose</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Share your account credentials with others</li>
              <li>Use automated systems to access the Service</li>
              <li>Attempt to reverse engineer or copy our technology</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </section>

          {/* Content and Intellectual Property */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Content and Intellectual Property
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Our Service contains content owned by us, our licensors, and other third parties. This content is protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You may not:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Copy, reproduce, or distribute our content without permission</li>
                <li>Create derivative works based on our content</li>
                <li>Remove or alter any copyright or trademark notices</li>
                <li>Use our content for commercial purposes without authorization</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                By submitting content to our Service, you grant us a worldwide, non-exclusive license to use, reproduce, and distribute such content.
              </p>
            </div>
          </section>

          {/* Subscription and Payment */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Subscription and Payment
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Some features of our Service may require a paid subscription. By subscribing, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Pay all applicable fees and taxes</li>
                <li>Provide accurate billing information</li>
                <li>Authorize recurring payments for subscription services</li>
                <li>Cancel your subscription according to our cancellation policy</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                All fees are non-refundable except as required by law or as specified in our refund policy. We reserve the right to change our pricing with notice.
              </p>
            </div>
          </section>

          {/* Privacy and Data */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Privacy and Data
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Your privacy is important to us. Our collection and use of your personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our Service, you consent to our collection and use of your information as described in our Privacy Policy.
            </p>
          </section>

          {/* Disclaimers */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Disclaimers
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind. We disclaim all warranties, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Warranties of merchantability and fitness for a particular purpose</li>
              <li>Warranties that the Service will be uninterrupted or error-free</li>
              <li>Warranties regarding the accuracy or completeness of content</li>
              <li>Warranties that defects will be corrected</li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To the maximum extent permitted by law, Aimflix shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, arising out of or relating to your use of our Service.
            </p>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Indemnification
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify and hold harmless Aimflix, its officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from your use of the Service or violation of these Terms.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Termination
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may terminate or suspend your access to our Service immediately, without prior notice, for any reason, including breach of these Terms. Upon termination, your right to use the Service will cease immediately, and we may delete your account and data.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Governing Law
            </h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of our Service shall be resolved in the courts of [Your Jurisdiction].
            </p>
          </section>

          {/* Severability */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Severability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
            </p>
          </section>

          {/* Entire Agreement */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Entire Agreement
            </h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and Aimflix regarding your use of our Service. These Terms supersede all prior agreements and understandings, whether written or oral.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700">
                <strong>Email:</strong> legal@aimflix.org<br />
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