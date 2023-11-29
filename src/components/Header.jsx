import React from "react";

const Header = ({ children }) => {
  return (
    <header className="flex md:justify-center justify-between gap-5 h-16 bg-white py-3 px-5">
      <img src="/img/logo.png" alt="" className="w-10" />
      {children}
    </header>
  );
};

export default Header;
