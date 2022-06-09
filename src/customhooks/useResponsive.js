import { useEffect, useState } from "react";

const useResponsive = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.onresize = () => {
      setWidth(window.innerWidth);
    };
  }, []);

  return width;
};

export default useResponsive;
