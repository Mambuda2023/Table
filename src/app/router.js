import { createBrowserRouter } from "react-router-dom";
import App from "./App";
// import { App } from "../app/App";
import Home from "../pages/Home/Home";
import Layout from "../Widgets/Layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ element: <Home />, path: "/home" }],
  },
]);
