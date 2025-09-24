export default function Logo({ size = 28 }: { size?: number }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      <svg width={size*1.9} height={size} viewBox="0 0 190 100" fill="none">
        <text x="0" y="70" fill="#f2a33a" fontFamily="Inter, ui-sans-serif" fontWeight="800" fontSize="72">
          TIPagos
        </text>
        <rect x="6" y="78" width="178" height="8" rx="4" fill="#00e6e6"/>
      </svg>
    </div>
  );
}
