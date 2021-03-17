import { useContext } from "react";
import Context from "../../context";

const LanguageToggle = () => {
  const { handleSwitch } = useContext(Context);
  let coin = new Audio("/coin.mp3");

  const playCoin = () => {
    coin.play();
  };

  return (
    <div className="language-toggle">
      EN
      <label className="switch">
        <input type="checkbox" onChange={handleSwitch} onClick={playCoin} />
        <span className="slider round"></span>
      </label>
      ITA
    </div>
  );
};

export default LanguageToggle;
