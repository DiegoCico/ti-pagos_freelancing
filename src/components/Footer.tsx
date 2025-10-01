import Logo from "./Logo";

export default function Footer() {
  return (
    <footer
      className="section--tight"
      style={{
        borderTop: "1px solid var(--border)",
        marginTop: 36,
        paddingTop: 20,
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 10 }}>
          <Logo size={5} />
          {/* <span style={{ fontSize: 14, fontWeight: 600 }}>TIPagos</span> */}
        </div>

        {/* Links */}
        <nav
          style={{
            display: "flex",
            gap: 20,
            fontSize: 12,
            color: "var(--muted)",
            flexWrap: "wrap",
          }}
        >
          <a href="#features">Features</a>
          <a href="#secure-data">Security</a>
          <a href="#insights">Insights</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Copyright */}
        <div style={{ color: "var(--muted)", fontSize: 12 }}>
          © {new Date().getFullYear()} TIPagos. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
