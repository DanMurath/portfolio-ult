import { useContext } from "react";
import { Pause, WindupChildren } from "windups";
import Context from "../../context";

const Thanks = () => {
  const { textContent } = useContext(Context);

  return (
    <div className="thanks">
      <WindupChildren>
        {textContent.thanks.one}
        <Pause ms={200} />
        {textContent.thanks.two}
        <br />
        <Pause ms={700} />
        {textContent.thanks.three}
        <br /> <br />
        <Pause ms={800} />
        {textContent.thanks.four}
      </WindupChildren>
    </div>
  );
};

export default Thanks;
