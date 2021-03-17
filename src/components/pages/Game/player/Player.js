import Action from "../Action";
import useKeyPress from "../hooks/useKeyPress";
import useWalk from "../hooks/useWalk";

const Player = ({ skin }) => {
  const { dir, step, walk, position } = useWalk(3);
  const data = {
    h: 32,
    w: 32,
  };

  useKeyPress((e) => {
    walk(e.key.replace("Arrow", "").toLowerCase());
    e.preventDefault(); //stops keyboard from interacting with the browser
  });

  return (
    <Action
      sprite={`/game/${skin}.png`}
      data={data}
      step={step}
      dir={dir}
      position={position}
    />
  );
};

export default Player;
