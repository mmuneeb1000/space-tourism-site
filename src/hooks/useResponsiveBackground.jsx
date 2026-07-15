import { useEffect, useState } from "react";

export default function useResponsiveBackground(desktop, tablet, mobile) {
  const [background, setBackground] = useState(desktop);

  useEffect(() => {
    const updateBackground = () => {
      if (window.innerWidth < 768) {
        setBackground(mobile);
      } else if (window.innerWidth < 1024) {
        setBackground(tablet);
      } else {
        setBackground(desktop);
      }
    };

    updateBackground();
    window.addEventListener("resize", updateBackground);

    return () => window.removeEventListener("resize", updateBackground);
  }, [desktop, tablet, mobile]);

  return background;
}
