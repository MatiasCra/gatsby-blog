import React from "react";
import * as menuStyles from "./menu-button.module.css";

const MenuButton = props => {
  const toggleOpen = () => {
    document.getElementById(menuStyles.navIcon3).classList.toggle(menuStyles.open);
    document.getElementById(props.menuId).classList.toggle(props.toggleMenuClass)
  };

  return (
    <button id={menuStyles.navIcon3} onClick={toggleOpen}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default MenuButton;
