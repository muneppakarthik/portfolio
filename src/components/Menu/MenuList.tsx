import React from "react";

type menuItem = {
  label: string;
  to?: string;
};
type menuListPropType = {
  data: menuItem[];
  isModel?: boolean;
  onClose?: () => void;
};

const MenuList = ({
  data,
  isModel = false,
  onClose = () => {},
}: menuListPropType) => {
  return (
    <div className="menu-container__main-list">
      {isModel && (
        <div className="menu-container__main-list__close-icon">
          <button type="button" onClick={onClose}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      )}
      <ul>
        {data?.map((item: menuItem, ind: number) => (
          <li key={ind}>
            <a href={item.to}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
