import { useState } from "react";

const useBurgerMenu = () => {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuOpen((prevOpen) => !prevOpen);
  };

  return { burgerMenuOpen, toggleBurgerMenu };
};

export default useBurgerMenu;
