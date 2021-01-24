import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div>
      <div className="px-52">
        <Navbar />
      </div>

      <div className="px-52">
        {children}
      </div>
      <div className="px-52 bg-background-footer">
        <Footer />
      </div>
    </div>
  );
}
export default Layout;
