export default function Logo({ size = 48 }: { size?: number }) {
  // Larger defaults: scale both text and underline proportionally
  return (
    <div style={{ display: "inline-flex", alignItems: "center" }}>
      <svg
        width={size * 8}     // much wider
        height={size * 3}    // taller for breathing room
        viewBox="0 0 800 300"
        fill="none"
        style={{ overflow: "visible" }}
        aria-label="TIPagos logo"
      >
        <text
          x="0"
          y="180"
          fill="#f2a33a"
          fontFamily="Inter, ui-sans-serif"
          fontWeight="900"
          fontSize="500"        // bigger text
          letterSpacing="-0.025em"
        >
          TIPagos
        </text>
        <rect
          x="8"
          y="290"
          width="1700"           // longer underline
          height="40"
          rx="8"
          fill="#00e6e6"
        />
      </svg>
    </div>
  );
}
