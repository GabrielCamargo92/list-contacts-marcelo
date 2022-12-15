import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "../config/layout/Default";
import Counter from "../pages/Counter";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Products from "../pages/Products";
import { Pokemon } from "../pages/Pokemon";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout page={<Home />} />,
  },
  {
    path: "/counter",
    element: <DefaultLayout page={<Counter />} />,
  },
  {
    path: "/products",
    element: <DefaultLayout page={<Products />} />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/pokemon",
    element: <Pokemon />,
  },
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
