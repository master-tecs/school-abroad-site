"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <section className="container mx-auto px-4 py-10">
        <div className="mb-8">
          <Link
            href="/"
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
          >
            ← Back to home
          </Link>
        </div>
        
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Terms and Conditions
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6 leading-relaxed">
          <p className="text-center text-muted-foreground">
            (Please scroll down and read our Terms and Conditions carefully.)
          </p>

          <p>
            Our service terms and conditions for{" "}
            <strong>SchoolAbroad</strong>, registered as{" "}
            <strong>SchoolOutside International</strong>, are as follows:
          </p>

          <h2 className="text-xl font-semibold mt-6">
            1. Service Fees and Family Packages
          </h2>
          <p>
            Our fees are charged per individual. Family packages are available
            <strong> only</strong> for Visa application services. A family is
            defined as a husband, wife, and children under 18 years. Siblings,
            children above 18, and extended families are treated as separate
            applications.
          </p>

          <h2 className="text-xl font-semibold mt-6">2. Confidentiality</h2>
          <p>
            We receive and treat all documents sent to us with high
            confidentiality. The documents are only used for their intended
            purpose.
          </p>

          <h2 className="text-xl font-semibold mt-6">
            3. Study Placement Services
          </h2>
          <p>
            Our job is to help prospective students apply for study placements
            available in foreign countries and monitor the process rigorously
            until a decision is received. Scholarships may be available and can
            either be full or partial, depending on the providers. This
            information will be conveyed to the applicant early to help them
            decide which route to take.
          </p>
          <p>
            The Study Abroad Service charge entitles a client to{" "}
            <strong>three applications only</strong>, which may be in three
            different schools in the same country or in different countries.
            This excludes university application fees, if required.
          </p>

          <h2 className="text-xl font-semibold mt-6">4. Minors and Guardianship</h2>
          <p>
            SchoolOutside accompanies students under 18 years of age to their
            study destinations as guardians until they are properly settled at
            their universities. Parents or guardians must provide full
            disclosure of all relevant information concerning their wards. We
            are not liable for any consequences arising from withheld
            information.
          </p>

          <h2 className="text-xl font-semibold mt-6">
            5. Responsibility and Limitations
          </h2>
          <p>
            SchoolOutside is not responsible for decisions made by universities,
            institutions, scholarship bodies, or visa authorities. Admission,
            scholarship, internship, and visa decisions lie solely with the
            respective authorities. We are not liable for declined applications
            or rejections; however, our professional experience increases your
            likelihood of a positive outcome.
          </p>

          <h2 className="text-xl font-semibold mt-6">
            6. Pre-Departure and Arrival Counselling
          </h2>
          <p>
            Once your Study Visa, PR, or Tourist Visa has been approved, we
            provide pre-departure and arrival counselling for clients who book
            our Study Abroad or Visa Application Services. This also applies to
            those relocating within their own country.
          </p>

          <h2 className="text-xl font-semibold mt-6">7. Service Charges and Refunds</h2>
          <p>
            Service charges for all services are non-refundable. However, when
            tuition fees are paid through SchoolOutside and a refund becomes
            necessary, we will process the refund. Please note that institutions
            may deduct a percentage before refunding, so the total amount
            returned may differ from the original payment.
          </p>

          <h2 className="text-xl font-semibold mt-6">8. Document Authenticity</h2>
          <p>
            If submitted documents are falsified, you will face the consequences
            of your actions, including imprisonment (14–21 years). Your
            admission, visa, or application will be cancelled without refund.
            SchoolOutside does not engage in illegal business or assist clients
            in falsifying documents.
          </p>

          <h2 className="text-xl font-semibold mt-6">9. Refund Policy</h2>
          <p>
            The client acknowledges that visa, job offer, or status approvals
            and their processing times are solely at the discretion of the
            issuing government or institution. SchoolOutside is not responsible
            for the decision or duration of these processes.
          </p>

          <ul className="list-decimal pl-6 space-y-2">
            <li>
              <strong>9.1</strong> Regardless of the outcome, professional fees
              for work already performed are non-refundable. Fees for unrendered
              work will be refunded. Professional fees cover our expertise,
              effort, and process—not the result.
            </li>
            <li>
              <strong>9.2</strong> If an application is denied due to an error or
              omission by SchoolOutside or its staff, all professional fees
              collected will be refunded.
            </li>
            <li>
              <strong>9.3</strong> No refund will be issued if:
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>The client fails to cooperate or provide required documents.</li>
                <li>The client withdraws the application at any stage.</li>
                <li>
                  Rejection occurs due to false information, fraud, or withheld
                  details.
                </li>
                <li>
                  The client fails to satisfy immigration or visa requirements.
                </li>
                <li>
                  Rejection results from security, criminal, or legal issues.
                </li>
              </ul>
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-6">
            10. Preparatory Classes
          </h2>
          <p>
            Preparatory classes are scheduled for one month. Additional months
            may be added as determined by the facilitator and applicant to
            ensure readiness for the test.
          </p>

          <h2 className="text-xl font-semibold mt-6">
            11. Test Registrations
          </h2>
          <p>
            SchoolOutside can assist with registration for IELTS, GRE, GMAT,
            TOEFL, and other international tests—either for a fee or free if
            bundled with another service. Except for severe health conditions or
            acts of God (supported by valid evidence), cancellations are not
            accepted once tests are paid and scheduled.
          </p>

          <h2 className="text-xl font-semibold mt-6">
            12. Communication and Policy Updates
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>12.1</strong> Once sign-up and payment are complete,
              communication will primarily be via email, with responses provided
              within five working days.
            </li>
            <li>
              <strong>12.2</strong> We reserve the right to modify these terms
              periodically. Continued use of our services implies acceptance of
              the revised terms. Clients are responsible for checking updates on
              our website regularly.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-6">
            13. Privacy of Information and GDPR Compliance
          </h2>
          <p>
            SchoolOutside International (“SchoolOutside”, “we”, or “us”) is
            committed to protecting your privacy and complying with the EU
            General Data Protection Regulation (GDPR), where applicable.
          </p>

          <h3 className="text-lg font-medium mt-4">
            13.1. Data Collection and Use
          </h3>
          <p>
            We collect personal data necessary for providing our services, such
            as your name, contact details, educational background, financial
            information, and passport details. Your documents are treated with
            strict confidentiality and used only for their intended purpose.
          </p>

          <h3 className="text-lg font-medium mt-4">
            13.2. Legal Basis for Processing
          </h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Contractual necessity to fulfil our agreement with you.</li>
            <li>Legal obligation under applicable regulations.</li>
            <li>
              Legitimate interests where your rights do not override our need to
              process.
            </li>
            <li>Explicit consent for specific data uses when required.</li>
          </ul>

          <h3 className="text-lg font-medium mt-4">
            13.3. Data Subject Rights (GDPR)
          </h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Right to access your data.</li>
            <li>Right to rectify inaccurate information.</li>
            <li>Right to erase data (“Right to be Forgotten”).</li>
            <li>Right to restrict or object to processing.</li>
            <li>Right to data portability.</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us using the
            official contact details on our website.
          </p>

          <h3 className="text-lg font-medium mt-4">
            13.4. Data Sharing and Transfer
          </h3>
          <p>
            We share your data only with necessary third parties (e.g.,
            universities, visa authorities, or scholarship bodies). We do not
            sell personal data. When data is transferred outside the European
            Economic Area (EEA), safeguards such as standard contractual clauses
            are applied.
          </p>

          <h3 className="text-lg font-medium mt-4">
            13.5. Data Security and Retention
          </h3>
          <p>
            We maintain strict technical and organizational measures to protect
            your information. Personal data is retained only as long as
            necessary to fulfil service purposes or comply with legal
            obligations.
          </p>

          <p className="mt-8 text-sm text-muted-foreground text-center">
            Last updated: October 2025 <br />
            SchoolOutside International / SchoolAbroad
          </p>
        </CardContent>
      </Card>
    </section>
  );
}