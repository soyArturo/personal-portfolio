import { useState, useEffect } from "react";

export default function useWindowsSize() {
  const isSSR = typeof window !== "undefined";
  const [windowsSize, setWindowsSize] = useState({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
  });

  function changeWindowSize() {
    setWindowsSize({ width: window.innerWidth, height: window.innerHeight });
  }
  useEffect(() => {
    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return windowsSize;
}
