import "./aboutContents.scss";

const AboutContents = ({ contents }) => {
  return (
    <div className="about-contents-wrapper">
      <div className="about-contents-info">
        <div className="about-contents-imgBox">
          <img
            className="about-contents-img"
            src={contents.img}
            alt="contentsIcon"
            width="32px"
            height="32px"
          />
        </div>
        <div className="about-me">
          <div className="about-me-title">{contents.title}</div>
          {Array.isArray(contents.contents) ? (
            <div className="about-me-contents">
              {contents.contents[0]}
              <br />
              {contents.contents[1]}
            </div>
          ) : (
            <div className="about-me-contents">{contents.contents}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutContents;
