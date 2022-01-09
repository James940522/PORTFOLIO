import TechStacks from "./techStacks";

import { stacks } from "../../DummyData/data";
import blackLink from "../../assets/black-link.png";

import "./index.scss";
const Skills = () => {
  return (
    <div id="skills-section">
      <div className="skills-sectionBox">
        <div className="section-title-container">
          <div className="section-title-imgBox">
            <img src={blackLink} alt="blackLink" width="32px" height="32px" />
          </div>
          <h2 className="section-title sk-color">SKILLS</h2>
        </div>
        <div className="skills-contents">
          {stacks.map((el, idx) => {
            return <TechStacks key={idx} tech={el} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
