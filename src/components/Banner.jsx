import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import mountain from "../Images/mountain.jpg";
import Banner1 from "../Images/Banner1.png";

function Banner() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="relative z-0">
      <div className="flex flex-wrap items-center lg:mb-28">
        <div
          className="w-full lg:w-[73%] mb-4 lg:mb-0"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <img src={Banner1} alt="banner" className="w-full" />
        </div>
        <div className="lg:w-[17%] lg:mr-[8%] lg:ml-[2%] lg:text-[36px] sm:text-[32px] text-[24px] w-[60%] my-0 mx-auto mt-8">
          <img
            data-aos="fade-left"
            data-aos-duration="2000"
            src={mountain}
            alt="mountain"
          />
          <h1>
            <span className="opacity-30 text-3lg text-lg">Traveler</span>
          </h1>
          <h2 data-aos="fade-down" data-aos-duration="2000">
            <span className="border-b-[1px] border-black">讓我們成為</span>
          </h2>
          <h2 data-aos="fade-up" data-aos-duration="2000">
            <span className="border-b-[1px] border-black">
              您旅途中堅實的後盾
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Banner;
