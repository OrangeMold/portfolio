import MountainScene from "./Mountains/MountainScene";
import "./landing.css";
import { SiGithub, SiLinkedin, SiDevpost } from "react-icons/si";
import { FiSun } from "react-icons/fi";
import { useState } from "react";

const Landing = () => {
  const [isDay, setIsDay] = useState(true);
  const [spinning, setSpinning] = useState(false);

  const handleClick = () => {
    setIsDay((prev) => !prev);
    setSpinning(true);
    setTimeout(() => setSpinning(false), 600); // match duration
  };

  const spinClass = spinning
    ? isDay
      ? "spin-reverse-animation"
      : "spin-animation"
    : "";

  return (
    <div
      className={`mountain-container ${isDay ? "day-theme" : "night-theme"}`}
    >
      <FiSun className={`sun-icon ${spinClass}`} onClick={handleClick} />
      <MountainScene isDay={isDay} />
      <div className="mountain-text-container">
        <h1 id="name">Alexandre Genest</h1>
        <div className="role-and-icons">
          <h2 className="title">Student Software Engineer</h2>
          <div className="icons">
            <a
              href="https://github.com/OrangeMold"
              target="_blank"
              className="icon"
            >
              <SiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/alexandre-genest-28341332a/"
              target="_blank"
              className="icon"
            >
              <SiLinkedin />
            </a>
            <a
              href="https://devpost.com/orangemold?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
              target="_blank"
              className="icon"
            >
              <SiDevpost />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
