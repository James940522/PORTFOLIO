import AboutContents from "./aboutContents";
import { aboutData } from "../../DummyData/data";
import blackLink from "../../assets/black-link.png";

import "./index.scss";

const About = () => {
  console.log(aboutData);
  return (
    <div id="about-section">
      <div className="about-title-container">
        <div className="about-title-imgbox">
          <img src={blackLink} alt="blackLink" width="32px" height="32px" />
        </div>
        <h2 className="about-title">ABOUT ME</h2>
      </div>
      <div className="about-data-box">
        {aboutData.map((el, idx) => {
          return <AboutContents key={idx} contents={el} />;
        })}
      </div>
    </div>
  );
};

export default About;
