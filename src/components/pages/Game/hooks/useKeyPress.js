import { useEffect } from "react";

const useKeyPress = (fn) => {
  useEffect(() => {
    window.addEventListener("keydown", fn);
    //prevents memory leak
    return () => window.removeEventListener("keydown", fn);
  }, [fn]);
};

export default useKeyPress;
