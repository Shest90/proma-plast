import { useState, useEffect } from "react";

function useIntersectionObserver(refs, options = {}) {
  const [isVisible, setIsVisible] = useState(
    Array(refs.current.length).fill(false)
  );

  const handleIntersection = (entries) => {
    entries.forEach((entry, index) => {
      setIsVisible((prev) => {
        const updatedArray = [...prev];
        updatedArray[index] =
          entry.isIntersecting && entry.intersectionRatio > 0;
        return updatedArray;
      });
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, options);

    refs.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [options, refs]);

  return isVisible;
}

export default useIntersectionObserver;
