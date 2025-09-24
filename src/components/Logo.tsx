export default function Logo({ size = 30 }: { size?: number }) {
  // Wide viewBox so underline never clips on either side
  return (
    <div style={{ display:'inline-flex', alignItems:'center' }}>
      <svg
        width={size*6.2} height={size*2.2}
        viewBox="0 0 620 220" fill="none"
        style={{ overflow: 'visible' }}
        aria-label="TIPagos logo"
      >
        <text x="0" y="120"
          fill="#f2a33a"
          fontFamily="Inter, ui-sans-serif"
          fontWeight="900"
          fontSize="120"
          letterSpacing="-0.02em">
          TIPagos
        </text>
        <rect x="6" y="145" width="410" height="12" rx="6" fill="#00e6e6"/>
      </svg>
    </div>
  );
}
