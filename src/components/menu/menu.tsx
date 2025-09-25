import React from "react";
import "./Menu.scss";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="menu-container__menu-icon">
        <button type="button">
          <i className="icon fa-solid fa-bars"></i>
        </button>
      </div>
      <div className="menu-container__main-list">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
