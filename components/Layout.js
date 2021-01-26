import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="font-display">
      <Navbar />

      <div className="lg:px-64">
        {children}
      </div>

      <Footer />
    </div>
  );
}
export default Layout;
