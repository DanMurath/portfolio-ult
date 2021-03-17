import Sprite from "./Sprite";

const Action = ({
  sprite,
  data,
  position = { x: 0, y: 0 },
  step = 0,
  dir = 0,
}) => {
  const { h, w } = data;

  return (
    <Sprite
      position={position}
      image={sprite}
      data={{
        x: step * w, //from 0 > 32 > 64, sprite will look like it's walking
        y: dir * h, //selects direction sprite faces
        w, //for empty keys, js auto looks for a variable that has same name
        h, //so no need to assign values here
      }}
    />
  );
};

export default Action;
