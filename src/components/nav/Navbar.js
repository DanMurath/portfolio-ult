import LanguageToggle from "./LanguageToggle";
import { useContext, useState } from "react";
import Context from "../../context";
import { Link } from "react-router-dom";
import { Reveal, Tween } from "react-gsap";

const Navbar = () => {
  const [state, setState] = useState(false);
  const { textContent } = useContext(Context);

  const handleClick = () => {
    state === false ? setState(true) : setState(false);
  };

  return (
    <Reveal>
      <Tween from={{ opacity: 0 }} duration={2} delay={3}>
        <div className="nav">
          <LanguageToggle />
          <div className="menu-icon" onClick={handleClick}>
            <i className={state ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={state ? "nav-menu active" : "nav-menu"}>
            <li className="nav-margin-top">
              <Link className="nav-links" to="/projects" onClick={handleClick}>
                {textContent.nav.projects}
              </Link>
            </li>
            <li>
              <Link className="nav-links" to="/skills" onClick={handleClick}>
                {textContent.nav.skills}
              </Link>
            </li>
            <li className="nav-margin-bottom">
              <Link className="nav-links" to="/contact" onClick={handleClick}>
                {textContent.nav.contact}
              </Link>
            </li>
          </ul>
        </div>
      </Tween>
    </Reveal>
  );
};

export default Navbar;
