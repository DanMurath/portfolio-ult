import { useContext } from "react";
import Context from "../../context";
import { Reveal, Tween } from "react-gsap";
import { Pause, WindupChildren } from "windups";
import { Link } from "react-router-dom";

const HomeBody = () => {
  const { textContent } = useContext(Context);
  //const [wind] = useWindupString(textContent.home.intro);

  return (
    <div className="home-body">
      <div className="home-intro">
        <Reveal>
          <Tween from={{ opacity: 0 }} duration={3} delay={4.3}>
            <i className="fas fa-laptop"></i>
          </Tween>
        </Reveal>
        <WindupChildren>
          <h3>{textContent.home.one}</h3>
          <Pause ms={1100} />
          <h3>{textContent.home.two}</h3>
          <Pause ms={900} />
          <h3>{textContent.home.three}</h3>
        </WindupChildren>
      </div>
      <Reveal>
        <Tween from={{ opacity: 0 }} duration={3} delay={3}>
          <Link to="/projects" style={{ textDecoration: "none" }}>
            <div className="container">
              <div className="sub-container">
                <Reveal>
                  <Tween from={{ opacity: 0 }} duration={3} delay={4}>
                    <h3>{textContent.home.work}</h3>
                  </Tween>
                </Reveal>
              </div>
            </div>
          </Link>
        </Tween>
      </Reveal>
    </div>
  );
};

export default HomeBody;
