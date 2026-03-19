"use client";

export default function CtaButton() {
    return (
        <button
            style={{
                padding: "1rem 2.2rem",
                fontSize: "1rem",
                fontWeight: 600,
                borderRadius: "999px",
                background: "linear-gradient(135deg, var(--secondary), var(--tertiary))",
                color: "var(--background)",
                border: "1px solid rgba(255,255,255,0.12)",
                cursor: "pointer",
                letterSpacing: "-0.01em",
                boxShadow:
                    "0 10px 28px rgba(90,155,104,0.24)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                    "0 14px 34px rgba(90,155,104,0.3)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                    "0 10px 28px rgba(90,155,104,0.24)";
            }}
        >
            Claim Your Spot
        </button>
    );
}
