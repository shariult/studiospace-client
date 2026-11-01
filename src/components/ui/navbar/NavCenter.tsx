import React from "react";
import NavLinks from "./NavLinks";

function NavCenter() {
  return (
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <NavLinks />
      </ul>
    </div>
  );
}

export default NavCenter;
