import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import ViewLayout from "./views";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <ViewLayout />,
    children: [
      {
        path: "/form/:type",
        element: <>yet to be implemented</>,
      },
      {
        path: "/home",
        element: <>yet to be implemented</>,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
