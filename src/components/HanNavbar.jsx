import React, { useState } from "react";
import Logo from "../Images/LOGO.png";

function HanNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky z-50">
      <div className="max-w-[1530px] mx-auto py-6 relative">
        <nav className="flex justify-between lg:px-4 px-8">
          <a href="/">
            <img
              src={Logo}
              alt="LOGO"
              className="flex justify-center w-[40vmin]"
            />
          </a>
          <button
            onClick={toggleMenu}
            className="lg:hidden text-3xl text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <span className="block w-6 h-1 bg-gray-600 mb-1"></span>
            <span className="block w-6 h-1 bg-gray-600 mb-1"></span>
            <span className="block w-6 h-1 bg-gray-600"></span>
          </button>
          {isMenuOpen && (
            <ul className="absolute top-full left-0 z-50 bg-white w-full   text-xl font-semibold py-4">
              <li className="text-center">
                <a href="/pastProjects">過往案例</a>
              </li>
              <li className="text-center">
                <a href="/services">服務內容</a>
              </li>
              <li className="text-center">
                <a href="/connectUs">聯絡我們</a>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
}

export default HanNavbar;
