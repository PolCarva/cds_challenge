import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="px-5 min-h-[100svh] flex flex-col bg-white dark:bg-gray-800">
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
      <div className="flex flex-col items-center justify-center flex-1">
        <span className="text-9xl font-bold text-gray-800 dark:text-gray-600">404</span>
        <h1 className="text-4xl font-semibold text-gray-700 dark:text-white mb-4">
          Page not found
        </h1>
        <Link
          to="/"
          className="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Go back to home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
