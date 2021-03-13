const NavOptions = () => {
  return (
    <div className="nav-options">
      <div className="mobile-nav">
        <img src={"img/nav.png"} alt="" />
        <ul className="mobile-links">
          <li className="mbl-links">HOME</li>
          <li className="mbl-links">PORTFOLIO</li>
          <li className="mbl-links">RESUME</li>
        </ul>
      </div>
      <div className="desktop-nav">
        <h5>Home</h5>
        <h5>Portfolio</h5>
        <h5>Resume</h5>
      </div>
    </div>
  );
};

export default NavOptions;
