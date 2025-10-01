"use client";

import React from "react";
import "./Header.scss";
import { useGlobal } from "@/context/GlobalContext";
import Model from "../Model/Model";
import MenuList from "../Menu/MenuList";
import Overview from "../overview/overview";

const Header = () => {
  const { openMenu, setOpenMenu, openOverView, setOpenOverView } = useGlobal();
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
    <header>
      <div className="header-wrapper">
        <div className="header-wrapper__icon-block">
          <button onClick={() => setOpenOverView(true)}>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </button>
          <button onClick={() => setOpenMenu(true)}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
      {openMenu && (
        <Model>
          <MenuList
            data={modelMenuData}
            isModel={true}
            onClose={() => setOpenMenu(false)}
          />
        </Model>
      )}
      {openOverView && (
        <Model variant="from-left">
          <Overview />
        </Model>
      )}
    </header>
  );
};

export default Header;
