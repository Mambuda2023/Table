import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <div className="layout-wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
