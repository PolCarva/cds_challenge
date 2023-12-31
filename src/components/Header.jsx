import React from "react";
import DarkModeSwitch from "./DarkModeSwitch";

const Header = ({ children }) => {
  return (
    <header className="flex justify-between items-center gap-5 h-[10svh] w-full lg:w-5/6 mx-auto mt-2 py-3 px-5">
      {children}
      <DarkModeSwitch />
    </header>
  );
};

export default Header;
