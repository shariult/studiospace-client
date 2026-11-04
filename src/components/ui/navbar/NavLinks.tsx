import React from "react";
import Link from "next/link";

function NavLinks() {
  return (
    <>
      <li>
        <Link className="text-gray-700 dark:text-gray-200 text-sm" href="/">
          Home
        </Link>
      </li>
      <li>
        <Link
          className="text-gray-700 dark:text-gray-200 text-sm"
          href="/studios"
        >
          Explore Studios
        </Link>
      </li>
      <li>
        <Link
          className="text-gray-700 dark:text-gray-200 text-sm"
          href="/#steps"
        >
          How It Works
        </Link>
      </li>
      <li>
        <Link
          className="text-gray-700 dark:text-gray-200 text-sm"
          href="/#about"
        >
          About Us
        </Link>
      </li>
    </>
  );
}

export default NavLinks;
