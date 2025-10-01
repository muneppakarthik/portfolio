// src/context/GlobalContext.tsx
"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type GlobalContextType = {
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
  openMenu: boolean;
  setOpenOverView: Dispatch<SetStateAction<boolean>>;
  openOverView: boolean;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openOverView, setOpenOverView] = useState(false);

  return (
    <GlobalContext.Provider
      value={{ setOpenMenu, openMenu, openOverView, setOpenOverView }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobal must be used within a GlobalProvider");
  }
  return context;
};
