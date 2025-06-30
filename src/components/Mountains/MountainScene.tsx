import BackgroundMountains from "./BackgroundMountains";
import MidgroundMountains from "./MidgroundMountains";
import "./mountains.css";

const MountainScene = ({ isDay }: { isDay: boolean }) => {
  return (
    <div id="mountainScene">
      <BackgroundMountains isDay={isDay} />
      <MidgroundMountains isDay={isDay} />
    </div>
  );
};
export default MountainScene;
