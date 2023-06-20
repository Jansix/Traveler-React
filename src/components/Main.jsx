import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img2 from "../Images/image2.png";
import img3 from "../Images/image3.png";
import img4 from "../Images/image 4.png";
import img5 from "../Images/image 5.png";
import img6 from "../Images/image 6.png";
import img7 from "../Images/image7.png";

function Main() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();

    // 增加滾動監聽
    window.addEventListener("scroll", handleScroll);

    // 移除滾動監聽
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 滾動事件處理
  const handleScroll = () => {
    AOS.refreshHard(); // 刷新AOS

    // 檢查AOS動畫是否在區域內
    const aosElements = document.querySelectorAll(".aos-init");
    aosElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isVisible) {
        element.classList.add("aos-animate"); // 添加aos-animate类，以触发淡入效果
      } else {
        element.classList.remove("aos-animate"); // 移除aos-animate类，以触发淡出效果
      }
    });
  };

  return (
    <div className="lg:mx-10">
      <section className="flex  items-center max-w-[1530px] lg:mx-auto 2xl:gap-20 gap-10 mb-[100px] flex-wrap lg:flex-nowrap mt-8 xl:mx-12 px-4">
        <img className="w-full lg:w-[50%] " src={img2} alt="img2" />

        <div
          className="lg:max-w-[612px] aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1500"
        >
          <p className="mb-6 text-lg text-gray-500 ">CONCEPT</p>
          <div className="mb-6 text-4xl ">
            <h3 className="mb-4 font-bold text-TT-color">
              {" "}
              <span className="border-b-[1px] border-black">致。</span>
            </h3>

            <h3 className="font-bold text-TT-color mb-12">
              <span className="border-b-[1px] border-black">愛旅行的你</span>
            </h3>
          </div>
          <p className="sm:text-lg text-base  leading-loose">
            你是否曾想出國不受約束的自由行， 卻因沒做足功課而敗興而歸? <br />
            你是否曾跟團旅遊卻因團體行程而留下旅途的遺憾? <br />
            Traveler便是為此而生，我們將為你量身打造專屬行程，且在旅遊期間提供線上即時諮詢服務，Traveler就是你旅行中的專屬管家。
          </p>
        </div>
      </section>
      <section className="flex items-center max-w-[1530px] lg:mx-auto 2xl:gap-20 gap-10 mb-[75px] flex-wrap lg:flex-nowrap mt-8 xl:mx-12 px-4">
        <div
          className="lg:w-1/2 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1500"
        >
          <p className="mb-6 text-lg text-gray-500">ABOUT TRAVELER</p>
          <div className="mb-6 lg:text-4xl text-2xl">
            <h3 className="mb-4 font-bold text-TT-color">
              <span className="border-b-[1px] border-black ">
                你夢想中的行程。
              </span>
            </h3>
            <h3 className="font-bold text-TT-color mb-12">
              <span className="border-b-[1px] border-black">
                Traveler陪你一同打造
              </span>
            </h3>
          </div>
          <p className="sm:text-lg text-base leading-loose">
            Traveler翻譯為旅行者，我們希望能透過客製化旅程設計的服務，讓出遊不僅僅只有旅行社與自由行兩種選項，Traveler跳脫舊有思維，除了事前的討論與詳細規劃外，還導入線上管家系統，讓旅行者成為你的最佳旅伴，而出遊的你僅需心無旁鶩專注享樂。{" "}
          </p>
        </div>
        <img
          src={img3}
          alt="img3"
          className="lg:w-1/2 w-full order-first lg:order-last"
        />
      </section>
      <section className=" flex flex-col items-center lg:py-8 mb-8 ">
        <div>
          <p>CASE</p>
        </div>
        <div>
          <h5 className="text-4xl md:text-5xl mb-6 font-semibold border-b-2 border-gray-600">
            過往案例
          </h5>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          <div className="shadow-lg rounded-md ring-gray-300 border-[1px] border-amber-800 hover:border-2 ">
            <a href="#">
              <div className="relative overflow-hidden">
                <img
                  src={img4}
                  alt="img4"
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                />
              </div>
            </a>
            <p className="text-center p-8 text-2xl font-semibold">
              巴黎鐵塔浪漫蜜月遊
            </p>
          </div>

          <div className="shadow-lg rounded-md ring-gray-300 border-[1px] border-amber-800  hover:border-2">
            <a href="#">
              <div className="relative overflow-hidden">
                <img
                  src={img5}
                  alt="img5"
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                />
              </div>
            </a>
            <p className="text-center p-8 text-2xl font-semibold">
              非洲原野生態之旅
            </p>
          </div>
          <div className="shadow-lg rounded-md ring-gray-300 border-[1px] border-amber-800  hover:border-2">
            <a href="#">
              <div className="relative overflow-hidden">
                <img
                  src={img6}
                  alt="img6"
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                />
              </div>
            </a>
            <p className="text-center p-8 text-2xl font-semibold">
              雪梨歌劇院文藝行
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center mt-8">
          <a href="#">
            <button className="text-2xl md:text-3xl px-8 md:px-12 py-4 bg-white border-2 border-gray-300 rounded-full hover:border-black hover:bg-gray-200 transition duration-300">
              其他專案 →
            </button>
          </a>
        </div>
      </section>
      <section className="mb-8">
        <div className="relative">
          <div className="top-0 left-0 absolute w-full h-full bg-pink-300 opacity-10"></div>
          <img className="w-full" src={img7} alt="img7" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <div className="bg-black bg-opacity-60 w-[300px] h-[100px] md:w-[620px] md:h-[120px] flex items-center justify-center">
              <h2 className="text-white text-3xl font-bold">精選行程介紹</h2>
              <div className="bg-white h-8 absolute bottom-0 w-full opacity-80 text-xl text-center">
                熱門景點x清幽秘境
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
