import { useState, useEffect } from "react";

export function useWindowDimensions() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function onResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return { width };
}
