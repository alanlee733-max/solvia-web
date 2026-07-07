import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "#1c1712",
        color: "#f4ecdd",
        fontFamily: "'Jost',sans-serif",
        padding: "48px 24px",
      }}
    >
      <p
        style={{
          fontFamily: "'IBM Plex Mono',monospace",
          fontSize: 11,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "#c9a35c",
          margin: 0,
        }}
      >
        404 · Solvia Medical
      </p>
      <h1
        style={{
          fontFamily: "'Nanum Myeongjo',serif",
          fontWeight: 700,
          fontSize: "clamp(34px,6vw,56px)",
          lineHeight: 1.15,
          margin: "18px 0 12px",
        }}
      >
        This page is still on its way
      </h1>
      <p
        style={{
          fontFamily: "'Cormorant Garamond',serif",
          fontStyle: "italic",
          fontSize: "clamp(17px,2.2vw,21px)",
          color: "rgba(244,236,221,0.7)",
          maxWidth: 480,
          margin: "0 0 36px",
        }}
      >
        The brand page you&apos;re looking for is being prepared. In the
        meantime, our current catalogue lives on the main page.
      </p>
      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            background: "#c8964f",
            color: "#1c1408",
            textDecoration: "none",
            padding: "15px 28px",
            borderRadius: 999,
            fontSize: 13,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          Back to Solvia <span style={{ fontSize: 15 }}>→</span>
        </Link>
        <a
          href="mailto:partners@solviamedical.com"
          style={{
            display: "inline-flex",
            alignItems: "center",
            color: "#f4ecdd",
            textDecoration: "none",
            padding: "15px 28px",
            borderRadius: 999,
            fontSize: 13,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontWeight: 400,
            border: "1px solid rgba(244,236,221,0.4)",
          }}
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
