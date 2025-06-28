import BackgroundMountains from "./BackgroundMountains";
import MidgroundMountains from "./MidgroundMountains";
import "./mountains.css";

const MountainScene = () => {
  return (
    <div id="mountainScene">
      <BackgroundMountains />
      <MidgroundMountains />
    </div>
  );
};
export default MountainScene;
