import React from "react";
import { Outlet } from "react-router";
function ViewLayout() {
  console.log("Main view");
  return (
    <div className="viewlayout">
      <Outlet />
    </div>
  );
}

export default ViewLayout;
