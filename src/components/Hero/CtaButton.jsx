import Link from "next/link";

export default function CtaButton() {
    return (
        <Link
            href="/apply"
            className="inline-block"
            style={{
                padding: "1.1rem 2.8rem",
                fontSize: "1.05rem",
                fontWeight: 700,
                borderRadius: "999px",
                background: "linear-gradient(135deg, var(--secondary), var(--tertiary))",
                color: "var(--background)",
                border: "1px solid rgba(255,255,255,0.2)",
                cursor: "pointer",
                textAlign: "center",
                textDecoration: "none",
                letterSpacing: "0.01em",
                textTransform: "uppercase",
                boxShadow: "0 12px 34px rgba(90,155,104,0.35)",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px) scale(1.03)";
                e.currentTarget.style.boxShadow = "0 20px 48px rgba(90,155,104,0.45)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 12px 34px rgba(90,155,104,0.35)";
            }}
        >
            Apply Now
        </Link>
    );
}
