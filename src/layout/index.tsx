import React from "react";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import "./views.scss";
function ViewLayout() {
  return (
    <div className="view-layout">
      <Header />
      <div className="main-content">
         <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default ViewLayout;
