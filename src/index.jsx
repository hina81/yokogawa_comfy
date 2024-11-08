import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./styles/App.css";
import Layout from "./Layout.jsx";
import Home from "./components/Home.jsx";
import Menu from "./components/Menu.jsx";
import Access from "./components/Access.jsx";
import Concept from "./components/Concept.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/access",
        element: <Access/>,
      },
      {
        path: "/concept",
        element: <Concept/>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
