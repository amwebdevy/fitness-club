import { useState, useEffect } from "react";

const useWindowSize = (window) => {
  const [windowSize, setWindowSize] = useState();

  useEffect(() => {
    /* set window height/width */
    const handleWindowResize = () => {
      setWindowSize(getWindowSize());
    };
    window.addEventListener("resize", handleWindowResize);
    /* cleanup */
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  };

  return { windowSize };
};

export default useWindowSize;
