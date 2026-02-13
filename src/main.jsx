import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import AppLayout from "./AppLayout";
import Home from "./pages/Home"
import FeaturesPage from "./pages/FeaturesPage"
import Memberships from "./pages/Memberships"
import Cards from "./pages/Cards"


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/features", element: <FeaturesPage /> },
      { path: "/memberships", element: <Memberships /> },
      { path: "/cards", element: <Cards /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);