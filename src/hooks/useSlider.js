import { useState, useEffect, useCallback } from "react";

const useSlider = (images) => {
  const [showSlider, setShowSlider] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openSlider = useCallback((index) => {
    console.log("Opening slider with index:", index);
    setSelectedImageIndex(index);
    setShowSlider(true);
  }, []);

  const closeSlider = useCallback(() => {
    console.log("Closing slider");
    setShowSlider(false);
  }, []);

  const navigate = useCallback(
    (direction) => {
      const lastIndex = images.length - 1;
      let newIndex;

      if (direction === "next") {
        newIndex =
          selectedImageIndex === lastIndex ? 0 : selectedImageIndex + 1;
      } else {
        newIndex =
          selectedImageIndex === 0 ? lastIndex : selectedImageIndex - 1;
      }

      setSelectedImageIndex(newIndex);
    },
    [selectedImageIndex, images]
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      navigate("next");
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [navigate]);

  return {
    showSlider,
    selectedImageIndex,
    openSlider,
    closeSlider,
    navigate,
  };
};

export default useSlider;
