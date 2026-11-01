import React from "react";
import Link from "next/link";
import { PiTwitterLogo, PiInstagramLogo, PiYoutubeLogo } from "react-icons/pi";
import CompanyLogo from "./CompanyLogo";

function Footer() {
  return (
    <footer className="bg-base-200 border-t border-base-300">
      <div className="max-w-330 mx-auto px-6 py-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <CompanyLogo href={"/"} />
          <p className="text-sm opacity-70">
            StudioSpace connects creators with verified studios, stages and
            suites, so great work never waits on a great space.
          </p>
        </div>

        <div>
          <h6 className="footer-title">Quick Links</h6>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <Link className="link link-hover" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link link-hover" href="/studios">
                Explore Studios
              </Link>
            </li>
            <li>
              <Link className="link link-hover" href="/#how">
                How It Works
              </Link>
            </li>
            <li>
              <Link className="link link-hover" href="/#about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="link link-hover" href="/add-studio">
                Host Your Space
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="footer-title">Popular Categories</h6>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <Link
                className="link link-hover"
                href="/studios?category=photo-studio"
              >
                Photo Studios
              </Link>
            </li>
            <li>
              <Link
                className="link link-hover"
                href="/studios?category=sound-stages"
              >
                Sound Stages
              </Link>
            </li>
            <li>
              <Link
                className="link link-hover"
                href="/studios?category=podcast-rooms"
              >
                Podcast Rooms
              </Link>
            </li>
            <li>
              <Link
                className="link link-hover"
                href="/studios?category=music-suites"
              >
                Music Suites
              </Link>
            </li>
            <li>
              <Link
                className="link link-hover"
                href="/studios?category=art-workshops"
              >
                Art Workshops
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <h6 className="footer-title">Social Links</h6>
            <div className="flex gap-2">
              <Link
                href="#"
                className="btn btn-circle btn-ghost p-2 border border-gray-300"
                aria-label="X"
              >
                <PiTwitterLogo className="text-lg" />
              </Link>
              <Link
                href="#"
                className="btn btn-circle btn-ghost p-2 border border-gray-300"
                aria-label="Instagram"
              >
                <PiInstagramLogo className="text-lg" />
              </Link>
              <Link
                href="#"
                className="btn btn-circle btn-ghost p-2 border border-gray-300"
                aria-label="YouTube"
              >
                <PiYoutubeLogo className="text-lg" />
              </Link>
            </div>
          </div>

          <div>
            <h6 className="footer-title">Newsletter</h6>
            <form
              data-toast="Subscribed! Watch your inbox for studio drops."
              className="join w-full"
            >
              <input
                type="email"
                required
                className="input input-bordered join-item w-full"
                placeholder="you@email.com"
              />
              <button className="btn btn-primary join-item">Join</button>
            </form>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="border-t border-base-300 py-4 text-center text-xs opacity-70">
        &copy; 2026 StudioSpace. All rights reserved. · Terms of Service ·
        Privacy Policy
      </div>
    </footer>
  );
}

export default Footer;
