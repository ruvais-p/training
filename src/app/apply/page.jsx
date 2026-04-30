"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";
import GridBackground from "@/components/TopoBackground";
import Image from "next/image";
import { CheckCircle2, AlertCircle, Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ApplyPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "+91",
    email: "",
    streetAddress: "",
    city: "",
    stateProvince: "",
    currentOccupation: "",
    educationalQualification: "",
    preferredCohort: "AI & Cybersecurity",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error: submitError } = await supabase.from("applications").insert([
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          phone_number: formData.phoneNumber,
          email: formData.email,
          street_address: formData.streetAddress,
          city: formData.city,
          state_province: formData.stateProvince,
          current_occupation: formData.currentOccupation,
          educational_qualification: formData.educationalQualification,
          preferred_cohort: formData.preferredCohort,
        },
      ]);

      if (submitError) throw submitError;

      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="relative min-h-screen w-full bg-[#020e04] flex items-center justify-center px-6">
        <GridBackground />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="relative z-10 max-w-md w-full bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 text-center shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
        >
          <div className="mx-auto w-16 h-16 md:w-20 md:h-20 bg-[#14CF6D]/20 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-[#14CF6D]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Application Received!</h2>
          <p className="text-sm md:text-base text-white/60 mb-8 leading-relaxed">
            Thank you for applying to the YACS Cohort. Our team will review your application and get back to you shortly.
          </p>
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center h-12 bg-[#14CF6D] text-black font-bold rounded-xl hover:scale-[1.02] transition-transform active:scale-95 shadow-[0_10px_20px_rgba(20,207,109,0.2)]"
          >
            Return Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full bg-[#020e04] pt-32 pb-12 md:pt-40 md:pb-24 px-4 sm:px-8 overflow-x-hidden">
      <GridBackground />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 md:mb-20 text-center flex flex-col items-center"
        >
          {/* Logo Section */}
          <div className="flex justify-center mb-10">
            <Link href="/" className="block">
              <div className="relative h-12 w-[180px] sm:h-14 sm:w-[220px]">
                <Image
                  src="/logo/YACS LOGO white (1).png"
                  alt="YACS Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-white/40 hover:text-[#14CF6D] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em]">Back to Home</span>
          </Link>


          <div className="max-w-3xl flex flex-col items-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight">
              Launch Your Career <br />
              <span className="text-[#14CF6D]">In Cyber Security</span>
            </h1>
            <p className="mt-6 text-base md:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto">
              Join Kerala&apos;s most intensive, hands-on cybersecurity & AI cohort.
              Learn from industry veterans, work on real projects, and transform your
              career in just 6 months.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 md:gap-6 items-center justify-center">
              <div className="flex items-center justify-center gap-3 bg-white/5 px-6 py-3 rounded-full border border-white/10 w-full sm:w-[260px]">
                <div className="w-2 h-2 bg-[#14CF6D] rounded-full animate-pulse shrink-0" />
                <span className="text-[10px] md:text-xs font-bold text-white/80 tracking-widest uppercase whitespace-nowrap">Next Batch: Starting Soon</span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white/5 px-6 py-3 rounded-full border border-white/10 w-full sm:w-[260px]">
                <div className="w-2 h-2 bg-yellow-400 rounded-full shrink-0" />
                <span className="text-[10px] md:text-xs font-bold text-white/80 tracking-widest uppercase whitespace-nowrap">Limited Seats Available</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white/[0.03] border border-white/10 backdrop-blur-2xl rounded-[1.75rem] md:rounded-[3rem] p-6 sm:p-10 md:p-16 shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
        >
          {/* Section: Personal Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mb-10 md:mb-14">
            <div className="space-y-3">
              <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#14CF6D]/80 ml-1">First Name <span className="text-red-500">*</span></label>
              <input
                required
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-5 text-white focus:outline-none focus:border-[#14CF6D] focus:bg-white/[0.08] transition-all placeholder:text-white/20 text-sm md:text-base"
              />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#14CF6D]/80 ml-1">Last Name <span className="text-red-500">*</span></label>
              <input
                required
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-5 text-white focus:outline-none focus:border-[#14CF6D] focus:bg-white/[0.08] transition-all placeholder:text-white/20 text-sm md:text-base"
              />
            </div>
          </div>

          {/* Section: Contact */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mb-10 md:mb-14">
            <div className="space-y-3">
              <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#14CF6D]/80 ml-1">Phone Number <span className="text-red-500">*</span></label>
              <input
                required
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="+91"
                className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-5 text-white focus:outline-none focus:border-[#14CF6D] focus:bg-white/[0.08] transition-all placeholder:text-white/20 text-sm md:text-base"
              />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#14CF6D]/80 ml-1">Email Address <span className="text-red-500">*</span></label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@example.com"
                className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-5 text-white focus:outline-none focus:border-[#14CF6D] focus:bg-white/[0.08] transition-all placeholder:text-white/20 text-sm md:text-base"
              />
            </div>
          </div>

          {/* Section: Address */}
          <div className="space-y-6 md:space-y-10 mb-10 md:mb-14">
            <div className="space-y-3">
              <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#14CF6D]/80 ml-1">Street Address <span className="text-red-500">*</span></label>
              <input
                required
                type="text"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                placeholder="Full Street Address"
                className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-5 text-white focus:outline-none focus:border-[#14CF6D] focus:bg-white/[0.08] transition-all placeholder:text-white/20 text-sm md:text-base"
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
              <div className="space-y-3">
                <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#14CF6D]/80 ml-1">City <span className="text-red-500">*</span></label>
                <input
                  required
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-5 text-white focus:outline-none focus:border-[#14CF6D] focus:bg-white/[0.08] transition-all placeholder:text-white/20 text-sm md:text-base"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#14CF6D]/80 ml-1">State / Province <span className="text-red-500">*</span></label>
                <input
                  required
                  type="text"
                  name="stateProvince"
                  value={formData.stateProvince}
                  onChange={handleChange}
                  placeholder="State / Province"
                  className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-5 text-white focus:outline-none focus:border-[#14CF6D] focus:bg-white/[0.08] transition-all placeholder:text-white/20 text-sm md:text-base"
                />
              </div>
            </div>
          </div>

          {/* Section: Occupation & Qualification */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-10 md:mb-14">
            <div className="space-y-5">
              <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#14CF6D]/80 ml-1">Current Occupation <span className="text-red-500">*</span></label>
              <div className="flex flex-col gap-4">
                {["Student", "Employed", "Other"].map((opt) => (
                  <label key={opt} className="flex items-center gap-4 cursor-pointer group w-fit">
                    <div className="relative flex-shrink-0">
                      <input
                        required
                        type="radio"
                        name="currentOccupation"
                        value={opt}
                        onChange={handleChange}
                        className="peer hidden"
                      />
                      <div className="w-6 h-6 border-2 border-white/10 rounded-full peer-checked:border-[#14CF6D] peer-checked:bg-[#14CF6D]/10 transition-all" />
                      <div className="absolute inset-0 m-auto w-2.5 h-2.5 bg-[#14CF6D] rounded-full scale-0 peer-checked:scale-100 transition-transform duration-300" />
                    </div>
                    <span className="text-sm md:text-base text-white/50 group-hover:text-white transition-colors">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#14CF6D]/80 ml-1">Educational Qualification <span className="text-red-500">*</span></label>
              <input
                required
                type="text"
                name="educationalQualification"
                value={formData.educationalQualification}
                onChange={handleChange}
                placeholder="Degree / Final Qualification"
                className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-5 text-white focus:outline-none focus:border-[#14CF6D] focus:bg-white/[0.08] transition-all placeholder:text-white/20 text-sm md:text-base"
              />
            </div>
          </div>

          {/* Section: Cohort Preference */}
          <div className="space-y-5 mb-12 md:mb-16">
            <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#14CF6D]/80 ml-1">Which cohort would you like to join?</label>
            <div className="flex flex-col lg:flex-row gap-5 md:gap-10">
              {["AI & Cybersecurity", "AI & ML"].map((opt) => (
                <label key={opt} className="flex items-center gap-4 cursor-pointer group w-fit">
                  <div className="relative flex-shrink-0">
                    <input
                      type="radio"
                      name="preferredCohort"
                      value={opt}
                      checked={formData.preferredCohort === opt}
                      onChange={handleChange}
                      className="peer hidden"
                    />
                    <div className="w-6 h-6 border-2 border-white/10 rounded-full peer-checked:border-[#14CF6D] peer-checked:bg-[#14CF6D]/10 transition-all" />
                    <div className="absolute inset-0 m-auto w-2.5 h-2.5 bg-[#14CF6D] rounded-full scale-0 peer-checked:scale-100 transition-transform duration-300" />
                  </div>
                  <span className="text-sm md:text-base text-white/50 group-hover:text-white transition-colors">{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Error Message */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="flex items-center gap-3 p-5 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-500 mb-8">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <p className="text-sm font-bold">{error}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Submit Button */}
          <button
            disabled={loading}
            type="submit"
            className="group relative w-full h-16 bg-[#14CF6D] text-black font-black uppercase tracking-[0.2em] text-sm rounded-2xl hover:scale-[1.01] transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-[0_15px_30px_rgba(20,207,109,0.3)]"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <span>Submit Application</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </motion.div>
              </>
            )}
          </button>
        </motion.form>
      </div>

      <style jsx>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus {
          -webkit-text-fill-color: white;
          -webkit-box-shadow: 0 0 0px 1000px #0a150e inset;
          transition: background-color 5000s ease-in-out 0s;
        }
      `}</style>
    </div>
  );
}
