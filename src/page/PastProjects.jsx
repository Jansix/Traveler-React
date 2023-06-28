import React from "react";
import ProjectCard from "../components/ProjectCard.jsx";

function PastProjects() {
  return (
    <div>
      <div>
        <h5 className="text-3xl font-semibold text-center text-TT-color ">
          <span className="border-b-2 border-TT-color">過往案例</span>
        </h5>
        <div className="w-full flex justify-center items-center mt-8 gap-4 mb-8 flex-wrap">
          <a href="#">
            <button className="text-xl  px-8  py-4 bg-white border-2 border-gray-300 rounded-full hover:border-black hover:bg-gray-200 transition duration-300 font-semibold">
              知名地標
            </button>
          </a>
          <a href="#">
            <button className="text-xl  px-8  py-4 bg-white border-2 border-gray-300 rounded-full hover:border-black hover:bg-gray-200 transition duration-300 font-semibold">
              世外仙境
            </button>
          </a>
          <a href="#">
            <button className="text-xl  px-8  py-4 bg-white border-2 border-gray-300 rounded-full hover:border-black hover:bg-gray-200 transition duration-300 font-semibold">
              此生必遊
            </button>
          </a>
        </div>
      </div>
      <div>
        <ProjectCard />
      </div>
      <ul className="flex justify-center items-center gap-4 mb-12 xl:gap-8 xl:text-xl xl:font-semibold">
        <li>
          <a href="#" className=" text-red-400">
            1
          </a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">4</a>
        </li>
        <li>
          <a href="#">5</a>
        </li>
        <li>
          <a href="#">6</a>
        </li>
      </ul>
    </div>
  );
}

export default PastProjects;
