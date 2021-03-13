import { useContext } from "react";
import Context from "../../context";
import { Reveal, Tween } from "react-gsap";

const SkillsContent = () => {
  const { textContent } = useContext(Context);

  const core = {
    js: "JavaScript",
    jsI: "fab fa-js-square",
    react: "React",
    reactI: "fab fa-react",
    html: "HTML5",
    htmlI: "fab fa-html5",
    css: "CSS3",
    cssI: "fab fa-css3-alt",
  };

  const tools = {
    npm: "Npm",
    lint: "EsLint",
    sass: "Sass",
    git: "Git",
    vim: "Vim",
    system: "Unix/Linux",
  };

  const libs = {
    gsap: "GSAP",
    axios: "Axios",
    jq: "jQuery",
    mat: "MaterializeCSS",
  };

  return (
    <div className="content">
      <div className="skills">
        <Reveal>
          <Tween from={{ opacity: 0 }} duration={3} delay={0.5}>
            <div className="core shadow">
              <div className="title">
                <h3>{textContent.skills.core}</h3>
              </div>
              <div className="js">
                <i className={core.jsI}></i>
                <p>{core.js}</p>
              </div>
              <div className="react">
                <i className={core.reactI}></i>
                <p>{core.react}</p>
              </div>
              <div className="html">
                <i className={core.htmlI}></i>
                <p>{core.html}</p>
              </div>
              <div className="css">
                <i className={core.cssI}></i>
                <p>{core.css}</p>
              </div>
            </div>
          </Tween>
        </Reveal>

        <Reveal>
          <Tween from={{ opacity: 0 }} duration={3} delay={0.4}>
            <div className="tools shadow">
              <div className="title">
                <h3>{textContent.skills.tools}</h3>
              </div>
              <p>{tools.npm}</p>
              <p>{tools.lint}</p>
              <p>{tools.sass}</p>
              <p>{tools.git}</p>
              <p>{tools.vim}</p>
              <p>{tools.system}</p>
            </div>
          </Tween>
        </Reveal>

        <Reveal>
          <Tween from={{ opacity: 0 }} duration={3} delay={0.3}>
            <div className="libraries shadow">
              <div className="title">
                <h3>{textContent.skills.lib}</h3>
              </div>
              <p>{libs.gsap}</p>
              <p>{libs.axios}</p>
              <p>{libs.jq}</p>
              <p>{libs.mat}</p>
            </div>
          </Tween>
        </Reveal>

        <Reveal>
          <Tween from={{ opacity: 0 }} duration={3} delay={0.2}>
            <div className="about shadow">
              <div className="title">
                <h3>{textContent.about.title}</h3>
              </div>
              <p>{textContent.about.description}</p>
            </div>
          </Tween>
        </Reveal>
      </div>
    </div>
  );
};

export default SkillsContent;
