import { useState, useEffect } from "react";

export default function useWindowDimensions() {
  const hasWindow = typeof window !== "undefined";

  function getWindowDimensions() {
    const width: number = hasWindow ? window.innerWidth : 0;
    const height = hasWindow ? window.innerHeight : null;
    const scroollY = hasWindow ? window.scrollY : null;
    const scroollX = hasWindow ? window.scrollX : null;
    return {
      width,
      height,
      scroollY,
      scroollX,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    if (hasWindow) {
      const handleResize = () => {
        setWindowDimensions(getWindowDimensions());
      };
      window.addEventListener("scroll", handleResize);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);
  return windowDimensions;
}
