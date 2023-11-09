import React from "react";
import { crown } from "../../../assets";
import Button from "../../constants/Button";
import { motion } from "framer-motion";


const GetStarted = () => {
  return (
    <motion.div className="p-24 ">
      <div className="lg:h-screen get-started rounded-[40px] flex justify-center items-center py-20">
        <div className="flex flex-col text-center justify-center items-center text-white gap-6">
          <span
            className={`w-16 h-16 rounded-md border-2 flex justify-center items-center bg-[#670127]`}
          >
            <img src={crown} alt="" className="h-8 w-8" />
          </span>
          <div className="flex flex-col items-center space-y-2 lg:space-y-5">
            <h1 className="lg:text-5xl text-4xl font-bold ">
              Get started with <span className="text-[#FAA307]">Enkqaay</span>{" "}
            </h1>
            <p className="font-semibold text-center w-[70%] text-base">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo con
            </p>
          </div>
          <Button
            text={"Get started"}
            style={"bg-[#FAA307] text-black w-[40%] font-bold text-center"}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default GetStarted;
