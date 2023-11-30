import React from "react";

const Header = ({ children }) => {
  return (
    <header className="flex lg:justify-center justify-between gap-5 h-[10svh] bg-white py-3 px-5">
      {children}
    </header>
  );
};

export default Header;
