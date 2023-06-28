import React, { useState, useEffect } from 'react';
import Logo from '../Images/LOGO.png';
import { FaArrowUp } from 'react-icons/fa';

function Footer() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setShowButton(scrollTop > 0);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-image h-[350px] w-full bg-cover relative ">
      <div className="w-full flex justify-between items-center px-12 absolute bottom-4  flex-wrap">
        <div className="">
          <p>© Traveler All Rights Reserved.</p>
        </div>
        <img src={Logo} alt="Logo" className="w-[35vmin]" />
        <div>
          <ul className="">
            <li>Traveler有限公司</li>
            <li>
              <a href="#">連絡電話：TEL .03-9543659</a>
            </li>
            <li>
              <a href="#">Email : Traveler@gmail.com.tw</a>
            </li>
            <li>
              <a href="#">公司地址: 宜蘭縣羅東鎮愛國路118號</a>
            </li>
          </ul>
        </div>
      </div>
      {showButton && (
        <button
          className="fixed right-4 bottom-4 z-50 p-2 bg-gray-800 text-white rounded-full shadow-lg transition-opacity duration-300 hover:opacity-75"
          onClick={scrollToTop}
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

export default Footer;
