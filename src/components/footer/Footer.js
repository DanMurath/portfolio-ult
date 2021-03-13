import { useContext, useState } from "react";
import Context from "../../context";
import { Reveal, Tween } from "react-gsap";

const Footer = () => {
  const [open, setOpen] = useState(false);

  const hover = () => {
    open === false ? setOpen(true) : setOpen(false);
  };

  const { textContent } = useContext(Context);

  return (
    <Reveal>
      <Tween from={{ opacity: 0 }} duration={2} delay={3}>
        <div className="footer">
          <a href="#" className="footer-resume">
            {textContent.footer.resume}
          </a>
          <div className="socials">
            <a
              href="mailto:danielmurathodzic@hotmail.com"
              onMouseEnter={hover}
              onMouseLeave={hover}
            >
              <i
                className={open ? "fas fa-envelope-open" : "fas fa-envelope"}
              ></i>
            </a>
            <a href="https://github.com/DanMurath">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://uk.linkedin.com/in/daniel-murathodzic-8812301b1">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </Tween>
    </Reveal>
  );
};

export default Footer;
