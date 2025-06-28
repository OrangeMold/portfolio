import MountainScene from "./Mountains/MountainScene";
import "./landing.css";
import { SiGithub, SiLinkedin, SiDevpost } from "react-icons/si";

const Landing = () => {
  return (
    <div className="mountain-container">
      <MountainScene />
      <div className="mountain-text-container">
        <h1 id="name">Alexandre Genest</h1>
        <div className="role-and-icons">
          <h2 style={{ margin: 0, fontSize: "1.5rem", fontWeight: "normal" }}>
            Student Software Engineer
          </h2>
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
