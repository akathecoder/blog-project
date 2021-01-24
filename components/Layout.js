import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div>
      <Navbar />

      <div className="px-52">
        {children}
      </div>

      <Footer />
    </div>
  );
}
export default Layout;
