"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Icon } from "@iconify/react";

const posts = [
  {
    slug: "cybersecurity-career-paths",
    title: "So You Want to Work in Cybersecurity",
    subtitle: "But Which Path Is Right for You?",
    excerpt:
      "Red team, blue team, cloud, malware, forensics, a complete breakdown of every major cybersecurity domain, what each one does, and the exact certifications that get you there.",
    category: "Career Paths",
    categoryIcon: "lucide:compass",
    date: "May 31, 2026",
    readTime: "12 min read",
    tags: ["Careers", "Certifications", "Cybersecurity"],
    accent: "#5A9B68",
    image: "/blog/blog1.jpg",
    featured: true,
  },
  {
    slug: "hardware-pentesting-tools",
    title: "The Hardware Behind Ethical Hacking",
    subtitle: "Every Pentester Should Know",
    excerpt:
      "A look at the real physical devices: Wi-Fi Pineapple, Flipper Zero, HackRF One and more, that security professionals use to find vulnerabilities before the bad guys do.",
    category: "Hardware & Tools",
    categoryIcon: "lucide:cpu",
    date: "May 31, 2025",
    readTime: "8 min read",
    tags: ["Pentesting", "Hardware", "Cybersecurity"],
    accent: "#5A9B68",
    image: "/blog/blog2.jpeg",
    featured: false,
  },
];

/* ─── Shared card component ─────────────────────────────────────────────── */
function BlogCard({ post, isFeatured = false }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] transition-all duration-300 hover:border-[#5A9B68]/40 hover:bg-[#5A9B68]/5"
    >
      {/* Cover image — fixed height so every card is identical */}
      <div className="relative h-52 w-full flex-shrink-0 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, 50vw"
          priority={isFeatured}
        />
        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#040706] via-transparent to-transparent opacity-60" />

        {/* Featured badge */}
        {isFeatured && (
          <span className="absolute left-4 top-4 rounded-full bg-[#5A9B68]/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
            Featured
          </span>
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col gap-3 p-6">
        {/* Category pill */}
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#5A9B68]/25 bg-[#5A9B68]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#5A9B68]">
          <Icon icon={post.categoryIcon} className="text-xs" />
          {post.category}
        </span>

        {/* Title & subtitle */}
        <div>
          <h3 className="mb-1 text-lg font-extrabold leading-snug text-white">
            {post.title}
          </h3>
          <p className="text-sm font-medium text-white/40">{post.subtitle}</p>
        </div>

        {/* Excerpt — flex-1 so it fills remaining height */}
        <p className="flex-1 text-sm leading-relaxed text-white/55">
          {post.excerpt}
        </p>

        {/* Footer: date · read time · tags */}
        <div className="mt-auto border-t border-white/5 pt-4">
          <div className="flex flex-wrap items-center gap-3 text-xs text-white/35">
            <span className="flex items-center gap-1.5">
              <Icon icon="lucide:calendar" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Icon icon="lucide:clock" />
              {post.readTime}
            </span>
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-white/30"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Read more arrow */}
        <div className="flex items-center gap-2 text-sm font-semibold text-[#5A9B68] transition-all group-hover:gap-3">
          Read article
          <Icon
            icon="lucide:arrow-right"
            className="transition-transform group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#040706] text-white">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden px-4 pt-36 pb-20 text-center md:pt-44">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#5A9B68]/8 blur-[130px]" />
          </div>

          <div className="relative z-10">


            <h1 className="mx-auto mt-4 max-w-3xl text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Insights &{" "}
              <span className="bg-gradient-to-r from-[#5A9B68] to-emerald-400 bg-clip-text text-transparent">
                Deep Dives
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/50">
              Expert articles on cybersecurity, ethical hacking, hardware tools, and
              career growth straight from the YACS team.
            </p>
          </div>
        </section>

        {/* ── Unified posts grid ── */}
        <section className="mx-auto max-w-5xl px-4 pb-24 md:px-8 lg:px-16">


          {/* All cards use the same grid — same column, same height rules */}
          <div className="grid gap-6 sm:grid-cols-2">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} isFeatured={post.featured} />
            ))}
          </div>
        </section>

        {/* ── Coming soon ── */}
        <section className="mx-auto max-w-5xl px-4 pb-32 md:px-8 lg:px-16">
          <div className="rounded-2xl border border-dashed border-white/10 p-12 text-center">
            <Icon icon="lucide:pen-line" className="mx-auto mb-4 text-4xl text-white/20" />
            <p className="text-sm text-white/30">More articles coming soon.</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
