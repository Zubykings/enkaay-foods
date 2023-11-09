import React from "react";
import { programData } from "../../constants";
import { fadeIn } from "../../motion/motion";
import { motion } from "framer-motion";

const ProgramCard = () => {
  const Card = (props) => {
    const { img, title, description, button, icon, style, logoStyle, index } =
      props;

    return (
      <motion.div
        className={` bg-[#670127] ${index === 0 ? "p-card-start" : ""} ${
          index === 3 ? "p-card-end" : ""
        } ${
          index === 2 ? "p-card-mid" : ""
        } ${style} h-[300px] w-[80%] lg:w-[25%] `}
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="flex flex-col justify-center h-full w-full gap-5 items-center text-center text-white px-10 lg:px-6"
        >
          <span
            className={`w-16 h-16 rounded-md  flex justify-center items-center ${
              logoStyle ? "border-0 bg-[#14213D] " : "border-2"
            } `}
          >
            <img src={img} alt="" className=" h-8 w-8" />
          </span>
          <h1 className="text-xl font-semibold">{title}</h1>
          <p className="text-base px-10 lg:px-2">{description}</p>
          <button className="inline-flex items-center justify-center gap-2 hover:text-[#7F0130]">
            {button} <img src={icon} alt="" />
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <div className=" w-full ">
      <div className="flex flex-wrap lg:justify-end items-end ">
        {programData.map((program, index) => (
          <Card key={program.title} index={index} {...program} />
        ))}
      </div>
    </div>
  );
};

export default ProgramCard;
