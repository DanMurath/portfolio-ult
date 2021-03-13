import { useContext } from "react";
import Context from "../../context";

const LanguageToggle = () => {
  const { handleSwitch } = useContext(Context);

  return (
    <div className="language-toggle">
      EN
      <label className="switch">
        <input type="checkbox" onChange={handleSwitch} />
        <span className="slider round"></span>
      </label>
      ITA
    </div>
  );
};

export default LanguageToggle;
