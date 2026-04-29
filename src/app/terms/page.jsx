import React from "react";

export const metadata = {
  title: "Terms & Conditions | YACS",
  description: "Terms and conditions governing the use of the YACS platform and training programs.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#040706] text-white/90 px-6 pt-40 pb-24 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-white text-center">Terms & Conditions</h1>

        <div className="space-y-10 text-lg leading-relaxed opacity-80">
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-[#5A9B68] border-b border-white/10 pb-2">Introduction</h2>
            <div className="space-y-6">
              <p>
                This is a legal binding agreement between the user/student/learner of our programs and <span className="text-white font-medium">YACS LLP</span>, the terms that govern the use of the platform as defined/stated on this page.
              </p>
              <p>
                The website <span className="text-[#5A9B68]">yacs.io</span> and the information, services, and other materials contained therein are provided and operated by YACS.
              </p>
              <p>
                <span className="text-white font-medium">YACS LLP</span> offers specially designed and curated online/offline higher education courses that are industry-relevant certification programs and career assistance services.
              </p>
              <p>
                Please review our Terms of Use, Privacy Policy, and other policies available on the Platform that govern the use of the Platform and Programs. By accepting these Terms in any manner or accessing the website, you consent, agree and undertake to abide, be bound by, and adhere to the Terms and if you do not agree to these Terms, you are not entitled to avail of/use the Programs and any use thereafter shall be unauthorized.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-[#5A9B68] border-b border-white/10 pb-2">Platform Scope</h2>
            <p>
              These Terms shall apply to YACS hosted web, Recorded courses, WhatsApp/Telegram groups, Facebook groups, Instagram pages, Facebook pages, email/SMS/phone communications, and other social media forums hosted by YACS, which shall be deemed to be part of the ‘Platform’. You acknowledge that certain parts of the Platform, as mentioned above, are provided by third-party service providers, and you agree to abide by their terms and conditions. YACS shall not be responsible for any disruption of services caused by such third-party service providers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-[#5A9B68] border-b border-white/10 pb-2">Policy Updates</h2>
            <p>
              We may change these Terms from time to time without prior notice. You should review this page regularly. Your continued use of the Platform and Programs after changes have been made will be taken to indicate that you have read and accepted those changes. You should not use the Platform or Programs if you are not happy with any changes to these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-[#5A9B68] border-b border-white/10 pb-2">Geographic Limitations</h2>
            <p>
              YACS LLP makes no representations that the Platform operates (or is legally permitted to operate) in all geographic areas, or that the Platform or information, services, or products offered through the Platform are appropriate or available for use in other locations. Accessing the Platform from territories where the Platform or any content or functionality of the Platform or its portions thereof is illegal, is expressly prohibited. If you choose to access the Platform, you agree and acknowledge that you do so on your own initiative and at your own risk and that you are solely responsible for compliance with all applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-[#5A9B68] border-b border-white/10 pb-2">Eligibility & Enrollment</h2>
            <ul className="list-disc pl-6 space-y-4">
              <li>The minimum age to join any course at YACS is <span className="text-white font-bold">18 years</span>. There is no maximum age.</li>
              <li>It is the sole responsibility of the user enrolling into a Program to check the accuracy and evaluate the suitability and relevance of the Program elected.</li>
              <li>A student’s registration and enrollment for any course at YACS are a binding agreement to finish the course and to pay the full fees.</li>
              <li>The application form must be signed to show the student’s agreement to follow YACS terms and conditions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-[#5A9B68] border-b border-white/10 pb-2">Liability Disclaimer</h2>
            <p>
              You agree that YACS shall under no circumstance be liable to you in the event of non-availability of the Platform or any portion thereof occasioned by Act of God, war, disease, revolution, epidemic, pandemic, lockdown, riot, civil commotion, strike, lockout, flood, fire, satellite failure, failure of any public utility, man-made disaster or any other cause whatsoever beyond the control of YACS.
            </p>
          </section>

          <section className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-6 text-[#5A9B68]">Academic Discretion</h2>
            <p>
              YACS LLP reserves the right to plan and alter the curriculum and its flow as per industry requirements/standards. Choice of trainers for courses offered is at YACS discretion.
            </p>
          </section>

          <section className="pt-12 text-sm italic border-t border-white/10 text-center">
            Last updated: April 29, 2026. © YACS LLP
          </section>
        </div>
      </div>
    </div>
  );
}
