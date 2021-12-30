import "./index.scss";

function Nav() {
  const moveScroll = (key) => {
    if (key === "main") {
      console.log("main");
    } else if (key === "about") {
      console.log("about");
    } else if (key === "skills") {
      console.log("skills");
    } else if (key === "project") {
      console.log("project");
    } else if (key === "link") {
      console.log("link");
    }
  };

  return (
    <header>
      <div id="navigation-bar">
        <h1 className="logo navigation" onClick={(e) => moveScroll("main")}>
          JM`s Portfolio
        </h1>
        <nav className="menu-section">
          <span
            className="navigation menu"
            onClick={(e) => moveScroll("about")}
          >
            About me
          </span>
          <span
            className="navigation menu"
            onClick={(e) => moveScroll("skills")}
          >
            Skills
          </span>
          <span
            className="navigation menu"
            onClick={(e) => moveScroll("project")}
          >
            Project
          </span>
          <span className="navigation menu" onClick={(e) => moveScroll("link")}>
            Link
          </span>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
