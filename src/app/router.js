import { createBrowserRouter } from "react-router-dom";
import App from "./App";
// import { App } from "../app/App";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ element: <Home />, path: "/home" }],
  },
]);
