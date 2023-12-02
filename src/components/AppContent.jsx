import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import DetailPage from "../pages/DetailPage";
import PageNotFound from "../pages/PageNotFound";
import { useSelector } from "react-redux";

const AppContent = () => {
  const isDarkMode = useSelector((state) => state.isDarkMode.value);

  return (
    <div className={isDarkMode}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default AppContent;
