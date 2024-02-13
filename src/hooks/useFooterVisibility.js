import { useEffect, useState } from "react";

function useFooterVisibility(refTop, refBottom) {
  const [isVisibleTop, setIsVisibleTop] = useState(false);
  const [isVisibleBottom, setIsVisibleBottom] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === refTop.current) {
          setIsVisibleTop(entry.isIntersecting);
        } else if (entry.target === refBottom.current) {
          setIsVisibleBottom(entry.isIntersecting);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (refTop.current) {
      observer.observe(refTop.current);
    }

    if (refBottom.current) {
      observer.observe(refBottom.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [refTop, refBottom]);

  return { isVisibleTop, isVisibleBottom };
}

export default useFooterVisibility;
