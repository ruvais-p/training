import React from "react";

export const metadata = {
  title: "Refund Policy | YACS",
  description: "Official Refund Policy for YACS training programs, courses, and workshops.",
};

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-[#040706] text-white/90 px-6 pt-40 pb-24 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">Refund Policy</h1>
        <p className="text-[#5A9B68] font-medium mb-12 text-center">Last updated: June 02, 2023</p>
        
        <div className="space-y-10 text-lg leading-relaxed opacity-80">
          <section className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-6 text-[#5A9B68]">Core Policy</h2>
            <div className="space-y-6">
              <p>
                We are committed to ensuring your satisfaction with any product, service, course, or workshop you have purchased from us. Please read the following terms carefully as they govern our refund policy.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-[#5A9B68] mt-1.5">•</span>
                  <p>You acknowledge that the Services purchased by you are non-transferable and non-refundable.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#5A9B68] mt-1.5">•</span>
                  <p>You acknowledge that we are under no obligation to refund any fees and applicable charges paid by you, in full or partially, under no circumstances.</p>
                </div>
              </div>
              <p className="text-sm italic opacity-70">
                This includes but is not limited to: modifying and extending the duration of the Service, change in the commencement date of the Service, your failure to attend or participate in the Service, or modification of the structure or content of the Service.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
              <h3 className="text-xl font-bold text-white mb-4">Workshops</h3>
              <p>No refunds or credits will be granted against payments related to workshops.</p>
            </div>
            <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
              <h3 className="text-xl font-bold text-white mb-4">Courses</h3>
              <p>We do not offer refunds for courses. Please carefully consider your schedule and commitment before enrolling.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-[#5A9B68] border-b border-white/10 pb-2">Enrollment Transfers</h2>
            <p>
              While we do not offer refunds, you may transfer your enrollment to a subsequent cohort. A nominal administrative fee will apply for such transfers. This transfer is subject to availability and the sole discretion of YACS.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-[#5A9B68] border-b border-white/10 pb-2">Refund Processing</h2>
            <p>
              If a refund is provided under exceptional circumstances at our sole discretion, you hereby agree and acknowledge that such amount to be refunded may either be paid in cash or credit (for purchase of any other Services of YACS of equivalent value) at the sole discretion of YACS.
            </p>
          </section>

          <section className="pt-12 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-[#5A9B68]">Contact Us</h2>
            <p>If you have any questions about our refund policy, please contact us by email at:</p>
            <a 
              href="mailto:hello@yacs.io" 
              className="mt-4 inline-block text-xl font-bold text-white hover:text-[#5A9B68] transition-colors"
            >
              hello@yacs.io
            </a>
          </section>

          <section className="pt-12 text-sm italic border-t border-white/10 text-center opacity-50">
            © YACS LLP
          </section>
        </div>
      </div>
    </div>
  );
}
