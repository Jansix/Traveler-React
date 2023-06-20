import React from "react";
import data from "../data.json";

function ProjectCard(props) {
  return (
    <>
      <div className="bg-gray-500 w-full h-[200px]  ">
        {data.map((item, index) => {
          return (
            <>
              <h1>{item.id}</h1>
              <p>{item.description}</p>
              <img
                src={require("../Images/" + item.imagePath)}
                alt={item.title}
              />
            </>
          );
        })}
      </div>
    </>
  );
}

export default ProjectCard;
