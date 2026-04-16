"use client";

import React from "react";

const PlacementIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="12" r="4.5" fill="#FF4DB8" />
    <path d="M10 32C10 26.4772 14.4772 22 20 22C25.5228 22 30 26.4772 30 32" stroke="#FF4DB8" strokeWidth="4.5" strokeLinecap="round" />
    <path d="M14 26C14 22.6863 16.6863 20 20 20C23.3137 20 26 22.6863 26 26" stroke="white" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const PartnershipIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M14 12L8 16V24L14 28L20 24V16L14 12Z" stroke="#00C2FF" strokeWidth="4" strokeLinejoin="round" />
    <path d="M26 12L20 16V24L26 28L32 24V16L26 12Z" stroke="#00FF94" strokeWidth="4" strokeLinejoin="round" />
    <path d="M20 16V24" stroke="white" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const EnrollmentIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect x="10" y="10" width="20" height="20" rx="3" transform="rotate(45 20 20)" fill="#7000FF" />
    <circle cx="20" cy="17" r="3.5" fill="#FF8A00" />
    <path d="M14 24C14 21.7909 16.6863 20 20 20C23.3137 20 26 21.7909 26 24" stroke="#FF8A00" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const ChallengesIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M10 14L24 6L30 18L16 26L10 14Z" fill="#FACC15" />
    <path d="M18 10L14 20H22L18 30" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const stats = [
  {
    icon: <PlacementIcon />,
    value: "4 Months",
    label: "Structured Program",
  },
  {
    icon: <PartnershipIcon />,
    value: "5+ Years",
    label: "Avg. Mentor Experience",
  },
  {
    icon: <EnrollmentIcon />,
    value: "100%",
    label: "Online & Live",
  },
  {
    icon: <ChallengesIcon />,
    value: "Real Projects",
    label: "Portfolio Ready",
  },
];

export default function PreAboutSection() {
  return (
    <section className="px-6 py-20 md:px-12 bg-transparent">
      <div className="mx-auto max-w-7xl">
        <style>{`
          .stat-grid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 20px;
          }

          @media (min-width: 640px) {
            .stat-grid { grid-template-columns: repeat(2, 1fr); }
          }

          @media (min-width: 1024px) {
            .stat-grid { grid-template-columns: repeat(4, 1fr); }
          }

          .stat-card {
            background: #141414;
            border-radius: 20px;
            padding: 32px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 240px;
            transition: transform 0.3s ease, background 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.05);
          }

          .stat-card:hover {
            transform: translateY(-5px);
            background: #1a1a1a;
          }

          .stat-top {
            display: flex;
            align-items: center;
            gap: 16px;
            margin-bottom: 24px;
          }

          .stat-value {
            font-family: Arial, sans-serif;
            font-size: 2.4rem;
            font-weight: 700;
            color: #ffffff;
            line-height: 1.1;
            letter-spacing: -0.02em;
          }

          .stat-label {
            font-family: Arial, sans-serif;
            font-size: 0.88rem;
            line-height: 1.5;
            color: rgba(255, 255, 255, 0.85);
            max-width: 220px;
            font-weight: 500;
          }

          @media (max-width: 640px) {
            .stat-card { padding: 24px; min-height: 200px; }
            .stat-value { font-size: 2.2rem; }
            .stat-label { font-size: 0.8rem; }
          }
        `}</style>

        <div className="stat-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-top">
                <div className="stat-icon-wrapper">
                  {stat.icon}
                </div>
                <div className="stat-value">{stat.value}</div>
              </div>
              <div className="stat-label">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
