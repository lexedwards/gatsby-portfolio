import React from "react";

const MenuButton = () => {
  return (
    <>
      <input
        className="menu-button--box"
        id="menuButton"
        type="checkbox"
        aria-label="Main Menu"
      />
      <label className="menu-button" htmlFor="menuButton">
        <div className="top bar" />
        <div className="middle bar" />
        <div className="bottom bar" />
      </label>
    </>
  );
};

export default MenuButton;