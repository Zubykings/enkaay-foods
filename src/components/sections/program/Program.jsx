import React, { useContext, useEffect, useRef, useState } from "react";
import { crown } from "../../../assets";
import ProgramCard from "./ProgramCard";
import Plans from "./Plans";
import SubtitleText from "../../constants/SubtitleText";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../motion/motion";
import { AppContext } from "../../../App";

const Program = () => {
const { componentRef, isVisible } = useContext(AppContext);


  return (
    <div ref={componentRef}>
      <motion.div
        className="max-w-screen-xl p-24 bg-[#FCFCFC] m-auto space-y-24 "
        initial="hidden"
        animate={isVisible ? "show" : "hidden"}
        variants={fadeIn("up", "tween", 0.1, 1)}
      >
        <motion.div variants={textVariant()}>
          <SubtitleText title={"Our Best Programs"} />
        </motion.div>
        <motion.div variants={fadeIn("up", "tween", 0.1, 1)}>
          <ProgramCard />
        </motion.div>
        <motion.div variants={fadeIn("up", "tween", 0.1, 1)}>
          <Plans />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Program;
