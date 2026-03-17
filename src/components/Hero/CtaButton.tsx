"use client";

export default function CtaButton() {
    return (
        <button
            style={{
                padding: "1.1rem 2.6rem",
                fontSize: "1.05rem",
                fontWeight: 700,
                borderRadius: "14px",
                background: "var(--secondary)",
                color: "var(--background)",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.02em",
                boxShadow: "0 0 0 0 rgba(46,204,113,0.5), 0 12px 40px rgba(46,204,113,0.35)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={e => {
                (e.currentTarget).style.transform = "translateY(-2px) scale(1.03)";
                (e.currentTarget).style.boxShadow = "0 0 0 6px rgba(46,204,113,0.18), 0 16px 48px rgba(46,204,113,0.45)";
            }}
            onMouseLeave={e => {
                (e.currentTarget).style.transform = "translateY(0) scale(1)";
                (e.currentTarget).style.boxShadow = "0 0 0 0 rgba(46,204,113,0.5), 0 12px 40px rgba(46,204,113,0.35)";
            }}
        >
            Claim Your Spot →
        </button>
    );
}
