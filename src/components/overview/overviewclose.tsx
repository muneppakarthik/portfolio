"use client";

import { useGlobal } from "@/context/GlobalContext";
import React from "react";

const Overviewclose = () => {
  const { setOpenOverView } = useGlobal();
  return (
    <button
      onClick={() => setOpenOverView(false)}
      className="profile-card__close"
    >
      <i className="fa-solid fa-ellipsis-vertical"></i>
    </button>
  );
};

export default Overviewclose;
