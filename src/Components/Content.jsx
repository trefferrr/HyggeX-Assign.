// components/MainContent.js
import React from "react";

const Content = () => {
  return (
<>
<div className="flex justify-center w-full px-2 md:w-1/2 mt-3">
      <h3 className="text-3xl font-bold text-blue-800">Relations and Functions (Mathematics)</h3>
    </div>
    <div className="flex justify-center   mt-5 gap-4">
      <p className="cursor-pointer text-blue-800 text-lg font-semibold">Study</p>
      <p className="cursor-pointer text-gray-600 text-lg font-semibold">Quiz</p>
      <p className="cursor-pointer text-gray-600 text-lg font-semibold">Test</p>
      <p className="cursor-pointer text-gray-600 text-lg font-semibold">Game</p>
      <p className="cursor-pointer text-gray-600 text-lg font-semibold">Others</p>
    </div></>
  );
};

export default Content;
