import blackLink from "../../assets/black-link.png";

const Links = () => {
  return (
    <div id="link-section">
      <div className="section-title-container">
        <div className="section-title-imgBox">
          <img src={blackLink} alt="blackLink" width="32px" height="32px" />
        </div>
        <h2 className="section-title sk-color">SKILLS</h2>
      </div>
    </div>
  );
};

export default Links;
