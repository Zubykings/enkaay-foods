import React from "react";
import { crown } from "../../assets";

const SubtitleText = ({ title, description }) => {
  return (
    <div className="space-y-5">
      <div className="inline-flex justify-center items-center gap-4">
        <span className="w-16 h-16 bg-[#670127] rounded-md flex justify-center items-center">
          <img src={crown} alt="" className=" h-8 w-8" />
        </span>
        <h1 className="text-3xl font-bold ">{title}</h1>
      </div>
      <p className="text-xl font-semibold text-center lg:text-start pe-8 lg:pe-0">
        {description}
      </p>
    </div>
  );
};

export default SubtitleText;
