import React from "react";
import data from "../data.json";

function ProjectCard() {
  return (
    <>
      <div>
        {data.map((item) => {
          return (
            <div key={item.id}>
              {" "}
              <div className=" rounded-lg w-4/5  md:h-[200px] xl:h-[300px] h-[170px]  mx-auto  my-8 relative image-container ">
                <a href={item.url}>
                  <img
                    src={require("../Images/" + item.imagePath)}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />

                  <p className="inset-0 w-full h-full absolute z-10 text-3xl sm:block hidden left-8 top-8  font-semibold ">
                    {item.title.slice(0, 4)} <br />
                    {item.title.slice(4)}
                  </p>
                  <div className="bg-bg-color/80 inset-0 w-full h-full absolute sm:hidden  text-2xl  font-semibold text-TT-color text-center top-[50%]">
                    {item.title}
                  </div>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProjectCard;
