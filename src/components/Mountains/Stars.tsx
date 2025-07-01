import React, { useEffect, useState } from "react";
import "./mountains.css";

const Stars: React.FC = () => {
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
      className="mountains"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <ellipse
        rx="2.5"
        ry="2.5"
        transform="translate(106.760075 245.42073)"
        fill="rgb(210, 142, 241)"
        strokeWidth="0"
        filter="drop-shadow(0 0 5px #facc15)"
      />
      <ellipse
        rx="3.5"
        ry="3.5"
        transform="translate(440.496223 210.221266)"
        fill="rgb(210, 142, 241)"
        strokeWidth="0"
        filter="drop-shadow(0 0 8px #facc15)"
      />
      <ellipse
        rx="1.5"
        ry="1.5"
        transform="translate(648.030805 70.97659)"
        fill="rgb(210, 142, 241)"
        strokeWidth="0"
        filter="drop-shadow(0 0 2px #facc15)"
      />
      <ellipse
        rx="2.5"
        ry="2.5"
        transform="translate(955.063768 126.321601)"
        fill="rgb(210, 142, 241)"
        strokeWidth="0"
        filter="drop-shadow(0 0 5px #facc15)"
      />
      <ellipse
        rx="2.5"
        ry="2.5"
        transform="translate(1395.679041 103.321601)"
        fill="rgb(210, 142, 241)"
        strokeWidth="0"
        filter="drop-shadow(0 0 5px #facc15)"
      />
    </svg>
  );
};

export default Stars;
