import React from "react";
import Link from "next/link";

function NavLinks() {
  return (
    <>
      <li>
        <Link className="text-gray-700 text-sm" href="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="text-gray-700 text-sm" href="/studios">
          Explore Studios
        </Link>
      </li>
      <li>
        <Link className="text-gray-700 text-sm" href="/#how">
          How It Works
        </Link>
      </li>
      <li>
        <Link className="text-gray-700 text-sm" href="/#about">
          About Us
        </Link>
      </li>
    </>
  );
}

export default NavLinks;
