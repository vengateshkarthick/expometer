import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import ViewLayout from "./layout";
import "./App.css";
import Home from "./views/Home";

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
        element: <Home />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
