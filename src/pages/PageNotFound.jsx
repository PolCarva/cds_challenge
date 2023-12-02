import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="px-5 min-h-[100svh] flex flex-col justify-between">
      <Header>
        <Link
          to="/"
          className="hover:scale-110 hover:rotate-12 transition-all ease-in-out"
        >
          <img
            src="/img/logo.png"
            alt="Código del Sur Logo"
            className="w-12 h-12 object-contain select-none"
          />
        </Link>
      </Header>
      <div className="flex flex-1 flex-col items-center justify-center w-full h-full">Not found</div>
    </div>
  );
};

export default PageNotFound;
