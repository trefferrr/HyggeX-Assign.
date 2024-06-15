
import React from "react";
import BulbIcon from "../assets/bulb.png";
import VolumeIcon from "../assets/vol.png";
import ReloadIcon from "../assets/reload.png";
import PrevIcon from "../assets/prev.png";
import NextIcon from "../assets/next.png";
import FullIcon from "../assets/full.png";

const Card = () => {
  return (
    <div className="flex flex-col items-center p-2 mt-5">
      <div className="bg-blue-800 rounded-3xl w-full md:w-1/3 h-72 p-6 text-white">
        <div className="flex justify-between">
          <img src={BulbIcon} alt="Bulb" />
          <img src={VolumeIcon} alt="Volume" />
        </div>
        <div className="flex justify-center h-4/5 items-center">
          <h1 className="text-2xl font-semibold">9+6+7x-2x-3</h1>
        </div>
      </div>
      <div className="flex items-center gap-10 mt-5">
        <div>
          <img className="w-7 cursor-pointer" src={ReloadIcon} alt="Reload" />
        </div>
        <div>
          <div className="flex gap-3 items-center">
            <img className="w-12 cursor-pointer" src={PrevIcon} alt="Prev" />
            <p className="text-lg font-bold">01/10</p>
            <img className="w-12 cursor-pointer" src={NextIcon} alt="Next" />
          </div>
        </div>
        <div>
          <img className="w-7 cursor-pointer" src={FullIcon} alt="Full" />
        </div>
      </div>
    </div>
  );
};

export default Card;
