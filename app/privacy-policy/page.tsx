import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-8">
          <Link
            href="/"
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
          >
            ← Back to home
          </Link>
        </div>

        <Card className="shadow-xl border-0">
          <CardContent className="p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">
              Privacy Policy
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="space-y-8 text-gray-700 dark:text-gray-300">

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  1. Introduction
                </h2>
                <p className="leading-relaxed">
                  Welcome to SchoolAbroad, registered as SchoolOutside International (“we,” “our,” or “us”). We are committed to protecting your personal information and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, including study abroad placement, visa assistance, and related services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  2. Information We Collect
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">
                      Personal Information
                    </h3>
                    <p className="leading-relaxed">
                      When you register or use our services, we may collect:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                      <li>Full name and contact details</li>
                      <li>Educational background and transcripts</li>
                      <li>Passport and identification documents</li>
                      <li>Visa, travel, and guardianship information</li>
                      <li>Financial information for tuition and service payments</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">
                      Automatically Collected Information
                    </h3>
                    <p className="leading-relaxed">
                      We automatically collect certain information when you use our website or services:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                      <li>IP address and browser type</li>
                      <li>Device type and operating system</li>
                      <li>Usage data and website interactions</li>
                      <li>Analytics data for service improvement</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  3. How We Use Your Information
                </h2>
                <p className="leading-relaxed mb-3">
                  We use your information to:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Provide and manage our study abroad and visa services</li>
                  <li>Assist with applications, scholarships, and admissions</li>
                  <li>Offer guardianship and pre-departure support for minors</li>
                  <li>Send updates, notifications, and important communications</li>
                  <li>Analyze service usage and improve our offerings</li>
                  <li>Comply with legal obligations and reporting requirements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  4. Data Sharing and Disclosure
                </h2>
                <p className="leading-relaxed mb-3">
                  We may share your information in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>With your consent:</strong> Only for purposes you explicitly approve.</li>
                  <li><strong>Service providers:</strong> Third-party vendors supporting our services, such as schools, visa authorities, or scholarship bodies.</li>
                  <li><strong>Legal requirements:</strong> To comply with laws or legal proceedings.</li>
                  <li><strong>Business transfers:</strong> During mergers, acquisitions, or asset sales.</li>
                  <li><strong>Protection of rights:</strong> To safeguard our legal rights, property, or safety.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  5. Third-Party Services
                </h2>
                <p className="leading-relaxed">
                  We may use third-party services, such as educational institutions, payment processors, and analytics providers. These third parties have their own privacy practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  6. Data Security
                </h2>
                <p className="leading-relaxed">
                  We implement industry-standard technical and organizational measures to protect your personal information. However, no system is completely secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  7. Data Retention
                </h2>
                <p className="leading-relaxed">
                  We retain personal information as long as necessary to provide our services and comply with legal obligations. Data may be retained longer for dispute resolution or regulatory compliance.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  8. Your Rights
                </h2>
                <p className="leading-relaxed mb-3">
                  Depending on your location, you may have rights to:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of personal information</li>
                  <li>Receive a copy of your data in portable format</li>
                  <li>Object to specific processing activities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  9. Children’s Privacy
                </h2>
                <p className="leading-relaxed">
                  Our services are not intended for children under 13. We do not knowingly collect data from children. Parents or guardians who believe their child has provided personal information should contact us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  10. International Data Transfers
                </h2>
                <p className="leading-relaxed">
                  Your information may be transferred to countries outside your residence for providing services. These countries may have different data protection laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  11. Updates to This Policy
                </h2>
                <p className="leading-relaxed">
                  We may update this Privacy Policy occasionally. Changes will be posted on this page with an updated “Last updated” date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  12. Contact Us
                </h2>
                <p className="leading-relaxed">
                  For questions about this Privacy Policy or our data practices, contact us at:
                </p>
                <div className="mt-3 space-y-1">
                  <p>Email: info@schoolabroad.org</p>
                  <p>Address: Europe: pierre vermeir, Antony, Paris, France. <br />
                  Africa: 1A Junction Road, Kaduna, Nigeria Zone</p>
                </div>
              </section>

            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}