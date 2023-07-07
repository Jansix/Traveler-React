import React from 'react';

import Logo from '../Images/LOGO.png';

function Navbar() {
  return (
    <header className=" sticky">
      <div className="max-w-[1530px] mx-auto  py-6 ">
        <nav className="flex justify-between lg:px-4 px-8">
          <a href="/">
            <img src={Logo} alt="LOGO" className="flex justify-center w-[40vmin] " />
          </a>
          <ul className="flex justify-between items-center space-x-12 text-xl font-semibold">
            <li className="hover:text-amber-700 hover:border-b-4">
              <a href="/pastProjects">過往案例</a>
            </li>
            <li className="hover:text-amber-700 hover:border-b-4">
              <a href="/#CONCEPT">服務內容</a>
            </li>
            <li className="hover:text-amber-700 hover:border-b-4">
              <a href="/connectUs">聯絡我們</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
