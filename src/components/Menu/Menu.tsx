"use client";

import React from "react";
import "./Menu.scss";
import MenuList from "./MenuList";
import Model from "../Model/Model";
import { useGlobal } from "@/context/GlobalContext";

const Menu = () => {
  const { openMenu, setOpenMenu } = useGlobal();
  const mainMenuData = [
    {
      label: "home",
      to: "",
    },
    {
      label: "about",
      to: "",
    },
    {
      label: "contact",
      to: "",
    },
  ];
  const modelMenuData = [
    {
      label: "home",
      to: "",
    },
    {
      label: "about",
      to: "",
    },
    {
      label: "contact",
      to: "",
    },
  ];
  return (
    <div className="menu-container">
      <div className="menu-container__menu-icon">
        <button type="button" onClick={() => setOpenMenu(true)}>
          <i className="icon fa-solid fa-bars"></i>
        </button>
      </div>
      <MenuList data={mainMenuData} />
      {openMenu && (
        <Model>
          <MenuList
            data={modelMenuData}
            isModel={true}
            onClose={() => setOpenMenu(false)}
          />
        </Model>
      )}
    </div>
  );
};

export default Menu;
