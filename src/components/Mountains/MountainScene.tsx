import BackgroundMountains from "./BackgroundMountains";
import MidgroundMountains from "./MidgroundMountains";
import Stars from "./Stars";
import "./mountains.css";

const MountainScene = ({ isDay }: { isDay: boolean }) => {
  return (
    <div id="mountainScene">
      {!isDay && <Stars />}
      <BackgroundMountains isDay={isDay} />
      <MidgroundMountains isDay={isDay} />
    </div>
  );
};
export default MountainScene;
