import AboutContents from "./aboutContents";
import { aboutData } from "../../DummyData/data";
import blackLink from "../../assets/black-link.png";

import "./index.scss";

const About = () => {
  return (
    <article id="about-section">
      <div className="section-title-container">
        <div className="section-title-imgBox">
          <img src={blackLink} alt="blackLink" width="32px" height="32px" />
        </div>
        <h2 className="section-title at-color">ABOUT ME</h2>
      </div>
      <div className="about-data-box">
        {aboutData.map((el, idx) => {
          return <AboutContents key={idx} contents={el} />;
        })}
      </div>
    </article>
  );
};

export default About;
