import React from "react";
import { getPageName } from "../helpers/getPageName";
import Footer from "./Footer";

const Layout = ({ children, location }) => {
  let path = location.pathname;
  return (
    <div className={`fc-container fc-container-${getPageName(path)}`}>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
