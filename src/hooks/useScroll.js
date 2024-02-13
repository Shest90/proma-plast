import { useState, useEffect } from "react";

const useScroll = () => {
  const [scrolled, setScrolled] = useState(false);
  const SCROLL_THRESHOLD = 200;

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      if (offset > SCROLL_THRESHOLD) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrolled;
};

export default useScroll;
