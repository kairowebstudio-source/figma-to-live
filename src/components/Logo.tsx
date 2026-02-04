interface LogoProps {
  className?: string;
  variant?: "navy" | "gold" | "white";
}

export function Logo({ className = "w-9 h-9", variant = "navy" }: LogoProps) {
  const bgColor = variant === "navy" ? "hsl(var(--navy))" : variant === "gold" ? "hsl(var(--gold))" : "white";
  const strokeColor = variant === "navy" ? "hsl(var(--gold))" : variant === "gold" ? "white" : "hsl(var(--navy))";

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background rounded square */}
      <rect width="48" height="48" rx="10" fill={bgColor} />
      
      {/* Stylized K with geometric elegance */}
      <g>
        {/* Vertical stem of K */}
        <path
          d="M16 10L16 38"
          stroke={strokeColor}
          strokeWidth="4"
          strokeLinecap="round"
        />
        
        {/* Upper diagonal of K with web-inspired angle */}
        <path
          d="M16 24L32 10"
          stroke={strokeColor}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Lower diagonal of K */}
        <path
          d="M16 24L32 38"
          stroke={strokeColor}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Decorative accent dot */}
        <circle
          cx="36"
          cy="24"
          r="3"
          fill={strokeColor}
        />
      </g>
    </svg>
  );
}
