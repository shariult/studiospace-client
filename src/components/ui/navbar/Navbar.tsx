import React from "react";
import CompanyLogo from "../CompanyLogo";
import NavMobile from "./NavMobile";
import NavCenter from "./NavCenter";
import NavEnd from "./NavEnd";

function Navbar() {
  return (
    <nav className=" bg-base-100 shadow-sm">
      <div className="navbar max-w-330 mx-auto px-6">
        <div className="navbar-start">
          <NavMobile />
          <CompanyLogo href="/" />
        </div>
        <NavCenter />
        <NavEnd />
      </div>
    </nav>
  );
}

export default Navbar;
