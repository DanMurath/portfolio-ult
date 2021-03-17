import { useEffect } from "react";
import Menu from "./Menu";

const Game = () => {
  let menuMusic = new Audio("/game/gamemenu.mp3");

  useEffect(() => {
    menuMusic.play();
  });

  return (
    <div className="home">
      <Menu />
    </div>
  );
};

export default Game;
