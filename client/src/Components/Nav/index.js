import { useState, useEffect } from "react";

import "./index.scss";

function Nav() {
  const [scrollY, setScrollY] = useState(0);

  const updateScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    console.log(scrollY);
    window.addEventListener("scroll", updateScroll);
  }, [scrollY]);

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
    <header id={scrollY < 100 ? "nav-color-nonactive" : "nav-color-active"}>
      <div id="navigation-bar">
        <h1 className="logo navigation" onClick={(e) => moveScroll("main")}>
          JM`s Portfolio
        </h1>
        <nav className="menu-section">
          <span className="navigation menu" onClick={() => moveScroll("about")}>
            About me
          </span>
          <span
            className="navigation menu"
            onClick={() => moveScroll("skills")}
          >
            Skills
          </span>
          <span
            className="navigation menu"
            onClick={() => moveScroll("project")}
          >
            Project
          </span>
          <span className="navigation menu" onClick={() => moveScroll("link")}>
            Link
          </span>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
