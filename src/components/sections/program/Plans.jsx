import React, { useContext } from "react";
import { planData } from "../../constants";
import ImageCard from "../../constants/ImageCard";
import { programimage } from "../../../assets";
import SubtitleText from "../../constants/SubtitleText";
import { styles } from "../../styles";
import { motion } from "framer-motion";
import { textVariant } from "../../motion/motion";
import { AppContext } from "../../../App";

const Plans = () => {
  const { componentRef, isvisible } = useContext(AppContext);

  const PlanCards = (props) => {
    const { img, title, description, style, logoStyle } = props;

    return (
      <div
        className={` border rounded-lg w-[45%] shadow-md bg-[#f6f0f2] ${style} `}
      >
        <div className="px-5 py-6 space-y-2 relative ">
          <span
            className={`w-16 h-16 rounded-md border-2 flex justify-center items-center absolute -top-9 bg-[#670127] ${logoStyle} `}
          >
            <img src={img} alt="" className="h-8 w-8" />
          </span>
          <h1 className="font-semibold text-xl">{title}</h1>
          <p className="text-base">{description}</p>
        </div>
      </div>
    );
  };

  return (
    <motion.div
      // variants={}
      className="w-full flex"
    >
      <div className="w-1/2 hidden lg:block ">
        <div className="relative h-full w-full">
          <div
            className={`border-8 border-white lg:w-[61%] w-[55%] h-[60%] rounded-t-full bg-[#f2c0fb] absolute bottom-0 left-1/2 transform translate-x-[-50%] z-1 image-container shadow-lg shadow-black`}
          >
            <div className="absolute top-[-40%] left-[-6%] h-full w-[140%]">
              <img
                src={programimage}
                className="h-[140%] top-[-20%] w-full image"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <motion.div className="lg:w-1/2 w-full ">
        <motion.div className="" variants={textVariant()}>
          <SubtitleText
            title={"Our Plans To Get You Started"}
            description={
              "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con"
            }
          />
        </motion.div>
        <div className="flex flex-wrap justify-around gap-y-20 mt-20 ">
          {planData.map((plan, index) => (
            <PlanCards key={index} {...plan} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Plans;
