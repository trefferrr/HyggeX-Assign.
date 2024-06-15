import React from "react";
import DownIcon from "../assets/down.png";

const Faq = () => {
  return (
    <div className="my-20 ml-3 md:ml-20">
      <h3 className="text-3xl font-bold text-blue-800">FAQ</h3>
      <div className="flex items-center justify-between rounded-lg border-2 w-11/12 md:w-1/2 py-3 px-5 mt-6">
        <p>Can education flashcards be used for all age groups?</p>
        <div>
          <img src={DownIcon} alt="Down" />
        </div>
      </div>
      <div className="flex items-center justify-between rounded-lg border-2 w-11/12 md:w-1/2 py-3 px-5 mt-3">
        <p>How do education flashcards work?</p>
        <div>
          <img src={DownIcon} alt="Down" />
        </div>
      </div>
      <div className="flex items-center justify-between rounded-lg border-2 w-11/12 md:w-1/2 py-3 px-5 mt-3">
        <p>Can education flashcards be used for test preparation?</p>
        <div>
          <img src={DownIcon} alt="Down" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
