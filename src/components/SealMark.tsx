export default function SealMark({
  size = 40,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full border border-gold text-ink ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 48 48"
        width={size * 0.72}
        height={size * 0.72}
        fill="none"
      >
        {/* Inner circle */}
        <circle
          cx="24"
          cy="24"
          r="19"
          stroke="currentColor"
          strokeWidth="0.6"
          opacity="0.35"
        />
        {/* BP monogram */}
        <text
          x="24"
          y="30"
          textAnchor="middle"
          fontFamily="'Cormorant Garamond', Georgia, serif"
          fontSize="18"
          fontWeight="600"
          fill="currentColor"
          letterSpacing="0.5"
        >
          BP
        </text>
      </svg>
    </span>
  );
}
