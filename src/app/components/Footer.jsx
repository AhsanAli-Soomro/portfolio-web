import React from "react";

function Footer() {
  return (
    <footer className="fixed py-4 bottom-0 w-full z-50">
      <div className="container text-white mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Left Section: Branding and Copyright */}
        <span className="text-sm text-center md:text-left">
          © 2024{" "}
          <a href="/" className="hover:underline font-semibold">
            Ahsan Ali
          </a>
          . All Rights Reserved.
        </span>

        {/* Right Section: Navigation Links */}
        <ul className="flex flex-wrap items-center space-x-6 text-sm font-medium">
          <li>
            <a
              href="/About"
              className="hover:text-yellow-300 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/Hire"
              className="hover:text-yellow-300 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
