import React from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const handleResize = () => {
      const isMobileCurrent = window.innerWidth <= 768;
      if (isMobileCurrent !== isMobile) {
        setIsMobile(isMobileCurrent);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);
  return isMobile;
};
