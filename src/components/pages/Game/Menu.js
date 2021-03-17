import Player from "./player/Player";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div
      className="menu"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <div
        className="center"
        style={{
          height: "32px",
          width: "32px",
          position: "relative",
        }}
      >
        <Player skin="m1" />
      </div>
      <Link to="/level" style={{ textDecoration: "none" }}>
        <h3 className="play">Play</h3>
      </Link>
    </div>
  );
};

export default Menu;
