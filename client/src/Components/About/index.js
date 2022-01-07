import AboutContents from "./aboutContents";
import { aboutData } from "../../DummyData/data";
import blackLink from "../../assets/black-link.png";

const About = () => {
  console.log(aboutData);
  return (
    <article>
      <div>
        <div className="about-section-title">
          <div>
            <img src={blackLink} alt="blackLink" width="32px" height="32px" />
          </div>
          <div>ABOUT ME</div>
        </div>
        <div>
          {aboutData.map((el, idx) => {
            return <AboutContents key={idx} contents={el} />;
          })}
        </div>
      </div>
    </article>
  );
};

export default About;
