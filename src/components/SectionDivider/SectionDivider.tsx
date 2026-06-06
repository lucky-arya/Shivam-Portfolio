type DividerVariant = "wave" | "curve" | "leaf-wave" | "organic";

interface SectionDividerProps {
  variant?: DividerVariant;
  topColor?: string;
  bottomColor?: string;
  flip?: boolean;
}

export default function SectionDivider({
  variant = "wave",
  topColor = "var(--cream)",
  bottomColor = "var(--cream)",
  flip = false,
}: SectionDividerProps) {
  const style: React.CSSProperties = {
    display: "block",
    width: "100%",
    height: "auto",
    lineHeight: 0,
    transform: flip ? "scaleY(-1)" : undefined,
  };

  if (variant === "wave") {
    return (
      <div style={{ backgroundColor: bottomColor, lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={style}
        >
          <path
            d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V0H0V40Z"
            fill={topColor}
          />
        </svg>
      </div>
    );
  }

  if (variant === "curve") {
    return (
      <div style={{ backgroundColor: bottomColor, lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={style}
        >
          <path
            d="M0 60C360 0 1080 0 1440 60V0H0V60Z"
            fill={topColor}
          />
        </svg>
      </div>
    );
  }

  if (variant === "leaf-wave") {
    return (
      <div style={{ backgroundColor: bottomColor, lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={style}
        >
          <path
            d="M0 0V60C120 90 240 40 360 60C480 80 600 30 720 50C840 70 960 20 1080 45C1200 70 1320 35 1440 55V0H0Z"
            fill={topColor}
          />
          {/* Subtle leaf-like accent */}
          <ellipse cx="720" cy="65" rx="60" ry="8" fill={topColor} opacity="0.5" />
        </svg>
      </div>
    );
  }

  // organic
  return (
    <div style={{ backgroundColor: bottomColor, lineHeight: 0 }}>
      <svg
        viewBox="0 0 1440 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={style}
      >
        <path
          d="M0 0V50C200 70 400 30 600 45C800 60 1000 25 1200 40C1350 50 1400 35 1440 42V0H0Z"
          fill={topColor}
        />
      </svg>
    </div>
  );
}
