import MountainSVGWrapper from "./MountainSVGWrapper";

const dayGradientStops = [
  { offset: "0%", stopColor: "#e6f0ff" },
  { offset: "63.988%", stopColor: "#6699ff" },
  { offset: "100%", stopColor: "#1f3c88" },
];

const nightGradientStops = [
  { offset: "0%", stopColor: "#781fcc" },
  { offset: "63.988%", stopColor: "#582dbd" },
  { offset: "100%", stopColor: "#0f2027" },
];

const midgroundPathD = `M-240.000003,610.443208c32.944554,0,78.916204,15.503316,104.109098,23.25498q25.192894,7.751664,135.890905,0q116.038041-17.441235,117.975956-23.25498c1.937915-5.813745,81.392427-25.192894,91.082002-25.192894s112.399067-21.317065,118.212812-11.62749s145.343622,91.082003,164.722771,79.454513q19.379149-11.62749,211.232728,32.944554q93.019917,127.902386,116.274896,127.902386c23.254979,0,329.445539,44.572043,350.762604,75.578682s189.915666,190.497038,273.246008,190.497038, L2200,1080 L-240,1080 Z`;
const MidgroundMountains = ({ isDay }: { isDay: boolean }) => (
  <MountainSVGWrapper
    gradientId="midground-mountains-gradient"
    gradientStops={isDay ? dayGradientStops : nightGradientStops}
    pathD={midgroundPathD}
  />
);

export default MidgroundMountains;
