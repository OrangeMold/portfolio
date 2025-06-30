import React, { useEffect, useState } from "react";
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
  const [viewBox, setViewBox] = useState("0 0 1920 1080");

  useEffect(() => {
    const updateViewBox = () => {
      const width = window.innerWidth;

      if (width > 1920) {
        // Ultrawide screen logic
        const maxUltrawideWidth = 2200; // Your SVG's full width
        const ultrawideWidth = Math.min(width, maxUltrawideWidth);

        // Calculate how much extra width to show beyond 1920px
        const extraWidth = ultrawideWidth - 1920;
        const totalViewWidth = 1920 + extraWidth;

        setViewBox(`0 0 ${totalViewWidth} 980`);
      } else {
        // Original responsive logic for screens 1920px and below
        const maxShift = 200; // max amount to shift at 320px width
        const minWidth = 320;
        const maxWidth = 1920;

        const clampedWidth = Math.max(minWidth, Math.min(width, maxWidth));
        const t = 1 - (clampedWidth - minWidth) / (maxWidth - minWidth); // 0 to 1
        const shift = Math.round(maxShift * t); // gradual shift

        setViewBox(`${-shift} 0 ${1920 - shift} 980`);
      }
    };

    updateViewBox();
    window.addEventListener("resize", updateViewBox);
    return () => window.removeEventListener("resize", updateViewBox);
  }, []);

  return (
    <svg
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid slice"
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
