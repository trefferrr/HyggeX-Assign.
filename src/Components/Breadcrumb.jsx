
import React from "react";
import HomeIcon from "../assets/home.png";
import RightIcon from "../assets/right.png";

const Breadcrumb = () => {
  return (
    <div className="flex text-xs md:text-lg items-center ml-1 md:ml-24 mt-10 gap-2">
      <img className="text-gray-600  w-5" src={HomeIcon} alt="Home" />
      <img src={RightIcon} alt="Right" />
      <p className="text-gray-600">Flashcard</p>
      <img src={RightIcon} alt="Right" className="right" />
      <p className="text-gray-600">Mathematics</p>
      <img src={RightIcon} alt="Right" className="right" />
      <p className="text-blue-800">Relation and Function</p>
    </div>
  );
};

export default Breadcrumb;
