import React from "react";

export const metadata = {
  title: "Privacy Policy | YACS",
  description: "Official Privacy Policy for YACS - Learn how we collect, use, and safeguard your personal data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#040706] text-white/90 px-6 pt-40 pb-24 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Privacy Policy</h1>
        <p className="text-[#5A9B68] font-medium mb-12">Effective Date: April 29, 2026</p>

        <div className="space-y-10 text-lg leading-relaxed opacity-80">
          <section>
            <p>
              At YACS, accessible from our website, protecting the privacy of our visitors and users is one of our top priorities. This Privacy Policy outlines the types of information we collect, how we use it, and the measures we take to safeguard your personal data.
            </p>
            <p className="mt-4">
              If you have any questions or require additional information about this Privacy Policy, please do not hesitate to contact us.
            </p>
            <p className="mt-4 text-sm bg-white/5 p-4 rounded-lg border border-white/10">
              This Privacy Policy applies solely to our online activities and is valid for visitors to our website with regard to information shared and/or collected through YACS. It does not apply to information collected offline or through channels other than this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#5A9B68]">1. Consent</h2>
            <p>
              By using our website, you hereby consent to this Privacy Policy and agree to its terms. If you do not agree with any part of this policy, please refrain from using our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#5A9B68]">2. Information We Collect</h2>
            <p>
              We collect personal information only when it is necessary to provide our services. The reasons for collection will be clearly explained at the time we request your data. The types of information we may collect include:
            </p>
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-xl font-medium text-white mb-2">2.1 Information You Provide Directly</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name, email address, phone number, and other contact details when you reach out to us</li>
                  <li>Company name, address, and telephone number when you register for an account</li>
                  <li>Any additional information you voluntarily provide in messages or attachments</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-2">2.2 Information Collected Automatically</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Usage data such as pages visited, time spent on pages, and browser type</li>
                  <li>IP address and device information</li>
                  <li>Cookies and similar tracking technologies (see Section 5)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#5A9B68]">3. How We Use Your Information</h2>
            <p>YACS uses the information we collect for the following purposes:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>To provide, operate, and maintain our website and services</li>
              <li>To improve, personalize, and expand our platform</li>
              <li>To understand and analyze how users interact with our website</li>
              <li>To develop new features, products, and functionality</li>
              <li>To communicate with you directly or through partners, including customer support, updates, and promotional information</li>
              <li>To send transactional and marketing emails (you may opt out at any time)</li>
              <li>To detect, prevent, and address fraudulent or unauthorized activity</li>
              <li>To comply with applicable legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#5A9B68]">4. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes described in this Privacy Policy, or as required by applicable laws and regulations. When your data is no longer needed, we will securely delete or anonymize it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#5A9B68]">5. Cookies and Web Beacons</h2>
            <p>
              Like most websites, YACS uses cookies to enhance your browsing experience. Cookies are small text files stored on your device that help us remember your preferences and understand how you navigate our website.
            </p>
            <p className="mt-4 text-white font-medium">We use cookies to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Store visitor preferences and session information</li>
              <li>Track which pages are accessed and visited</li>
              <li>Optimize page content based on browser type and user behavior</li>
            </ul>
            <p className="mt-4">
              You may choose to disable cookies through your browser settings. For detailed guidance on managing cookies in specific browsers, please refer to your browser's help documentation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#5A9B68]">6. Third-Party Services and Advertising</h2>
            <p>
              YACS may work with third-party service providers, including advertising networks, analytics platforms, and technology partners. These third parties may use cookies, JavaScript, or web beacons in their services to:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Measure the effectiveness of advertising campaigns</li>
              <li>Personalize advertising content based on your browsing activity</li>
              <li>Provide analytics and reporting services</li>
            </ul>
            <p className="mt-4 italic">
              Please note that YACS does not have direct access to or control over the cookies and technologies used by third-party providers. We encourage you to review the privacy policies of these third parties for more information on their data practices and opt-out options.
            </p>
          </section>

          <section className="border-t border-white/10 pt-10">
            <h2 className="text-2xl font-semibold mb-4 text-[#5A9B68]">7. Your Privacy Rights – California Residents (CCPA)</h2>
            <p>
              If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA):
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>The right to know what personal data we have collected about you, including categories and specific pieces of information</li>
              <li>The right to request deletion of your personal data that we have collected</li>
              <li>The right to opt out of the sale of your personal data</li>
              <li>The right to non-discrimination for exercising any of these rights</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us. We will respond to your request within one (1) month of receipt.
            </p>
          </section>

          <section className="border-t border-white/10 pt-10">
            <h2 className="text-2xl font-semibold mb-4 text-[#5A9B68]">8. Your Privacy Rights – EU/EEA Residents (GDPR)</h2>
            <p>
              If you are located in the European Union or European Economic Area, you are entitled to the following data protection rights under the General Data Protection Regulation (GDPR):
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Right to Access</strong> – You may request copies of your personal data held by us. A small administrative fee may apply.</li>
              <li><strong>Right to Rectification</strong> – You may request correction of inaccurate or incomplete personal data.</li>
              <li><strong>Right to Erasure</strong> – You may request deletion of your personal data under certain conditions.</li>
              <li><strong>Right to Restrict Processing</strong> – You may request that we limit how we process your personal data under certain conditions.</li>
              <li><strong>Right to Object</strong> – You may object to our processing of your personal data under certain conditions.</li>
              <li><strong>Right to Data Portability</strong> – You may request that we transfer your data to another organization or directly to you, under certain conditions.</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us. We will respond within one (1) month of your request.
            </p>
          </section>

          <section className="border-t border-white/10 pt-10">
            <h2 className="text-2xl font-semibold mb-4 text-[#5A9B68]">9. Children’s Privacy</h2>
            <p>
              YACS is committed to protecting the safety and privacy of minors online. We encourage parents and guardians to actively monitor and participate in their children’s online activity.
            </p>
            <p className="mt-4">
              YACS does not knowingly collect any personally identifiable information from children under the age of 13. If you believe your child has provided personal information on our website, please contact us immediately. We will take prompt steps to remove such information from our records.
            </p>
          </section>

          <section className="border-t border-white/10 pt-10">
            <h2 className="text-2xl font-semibold mb-4 text-[#5A9B68]">10. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
            </p>
          </section>

          <section className="border-t border-white/10 pt-10">
            <h2 className="text-2xl font-semibold mb-4 text-[#5A9B68]">11. Changes to This Privacy Policy</h2>
            <p>
              YACS reserves the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with a revised effective date. We encourage you to review this policy periodically to stay informed about how we protect your information. Continued use of our website after any changes constitutes your acceptance of the updated policy.
            </p>
          </section>

          <section className="border-t border-white/10 pt-10 bg-white/5 p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4 text-[#5A9B68]">12. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="mt-4 space-y-2">
              <p className="font-bold text-white">YACS</p>
              <p>Email: <a href="mailto:info@yacs.io" className="text-[#5A9B68] hover:underline">info@yacs.io</a></p>
              <p>Website: <a href="https://yacs.io" className="text-[#5A9B68] hover:underline">https://yacs.io</a></p>
            </div>
            <p className="mt-6 text-sm italic">
              We are committed to resolving any concerns you may have in a timely and transparent manner.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
