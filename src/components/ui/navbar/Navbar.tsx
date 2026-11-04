import React from "react";
import CompanyLogo from "@/components/ui/common/CompanyLogo";
import NavMobile from "./NavMobile";
import NavCenter from "./NavCenter";
import NavEnd from "./NavEnd";

function Navbar() {
  return (
    <nav className="bg-gray-100 dark:bg-gray-900 dark:text-gray-50 shadow-sm sticky top-0 left-0 z-40 opacity-95">
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
