import React from "react";

const Header = ({ children }) => {
  return (
    <header className="flex justify-between items-center gap-5 h-[10svh] w-full lg:w-5/6 mx-auto py-3 px-5">
      {children}
    </header>
  );
};

export default Header;
