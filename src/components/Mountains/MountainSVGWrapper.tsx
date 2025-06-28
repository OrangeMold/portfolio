import React from "react";
import "./mountains.css";
type MountainSVGWrapperProps = {
  gradientId: string;
  gradientStops: { offset: string; stopColor: string }[];
  pathD: string;
  className?: string;
};

const MountainSVGWrapper: React.FC<MountainSVGWrapperProps> = ({
  gradientId,
  gradientStops,
  pathD,
  className = "mountains",
}) => {
  return (
    <svg
      viewBox="0 0 1920 1080"
      preserveAspectRatio="none"
      className={className}
    >
      <defs>
        <linearGradient id={gradientId} x1="50%" x2="50%" y1="100%" y2="0%">
          {gradientStops.map(({ offset, stopColor }) => (
            <stop key={offset} offset={offset} stopColor={stopColor} />
          ))}
        </linearGradient>
      </defs>

      <path
        fill={`url(#${gradientId})`}
        stroke="#3f5787"
        strokeWidth={0}
        d={pathD}
      />
    </svg>
  );
};

export default MountainSVGWrapper;
