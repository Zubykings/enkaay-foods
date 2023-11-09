import React from "react";
import Navbar from "../../constants/Navbar";
import { heroimage, play } from "../../../assets";
import Button from "../../constants/Button";
import { styles } from "../../styles";
import ImageCard from "../../constants/ImageCard";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.div className="hero ">
      <Navbar />
      <div className="max-w-screen-xl h-[90vh] m-auto ">
        <div className="flex lg:flex-row justify-center items-center  flex-col h-full">
          <div className="lg:w-[45%] text-center lg:text-start w-[80%] flex flex-col justify-center">
            <div className="px-10 space-y-6 h-[70%]">
              <h1 className="md:text-7xl font-bold text-white">
                Changing your <span className="text-[#FAA307]">dietary</span>{" "}
                choices.
              </h1>
              <p className="text-white text-xl font-semibold">
                Discover how making subtle shifts in your dietary habits can
                yield significant and long-lasting results.
              </p>
              <div className="flex justify-between items-center">
                <Button text="Explore more" style={"bg-[#FAA307] py-2 "} />

                <button className="inline-flex items-center border-2 border-[#FAA307] py-1 px-5 rounded-md font-semibold shrink-0 text-white gap-3">
                  <img src={play} className="w-[30px] h-[30px] " alt="" />
                  Watch video
                </button>
              </div>
            </div>
          </div>

          <div className="lg:w-[55%] w-full h-[110%] relative">
            <ImageCard img={heroimage} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
