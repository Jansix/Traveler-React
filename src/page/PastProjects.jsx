import React from "react";
import ProjectCard from "../components/ProjectCard.jsx";

function PastProjects() {
  return (
    <div>
      <div>
        <h5 className="text-3xl font-semibold text-center text-TT-color ">
          <span className="border-b-2 border-TT-color">過往案例</span>
        </h5>
        <div className="w-full flex justify-center items-center mt-8 gap-4">
          <a href="#">
            <button className="text-xl  px-8  py-4 bg-white border-2 border-gray-300 rounded-full hover:border-black hover:bg-gray-200 transition duration-300">
              專案類型一
            </button>
          </a>
          <a href="#">
            <button className="text-xl  px-8  py-4 bg-white border-2 border-gray-300 rounded-full hover:border-black hover:bg-gray-200 transition duration-300">
              專案類型一
            </button>
          </a>
          <a href="#">
            <button className="text-xl  px-8  py-4 bg-white border-2 border-gray-300 rounded-full hover:border-black hover:bg-gray-200 transition duration-300">
              專案類型一
            </button>
          </a>
        </div>
      </div>
      <div>
        <ProjectCard />
      </div>
    </div>
  );
}

export default PastProjects;
