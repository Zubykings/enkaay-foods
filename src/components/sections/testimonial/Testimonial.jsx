import React, { useState } from "react";
import { crown, testimonialImage } from "../../../assets";
import SubtitleText from "../../constants/SubtitleText";
// import testimonailData from '../../constants'
import { testimonialData } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";
import { slideVariants } from "../../motion/motion";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("left");
  // console.log(currentIndex)

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === testimonialData.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? testimonialData.length - 1 : prevIndex - 1
    );
  };

  const TestimonialCard = ({ description }) => {
    return (
      <motion.p
        variants={slideVariants}
        initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
        animate={"visible"}
        exit={"exit"}
        className="text-base"
      >
        {description}
      </motion.p>
    );
  };

  return (
    <div className="bg-[#FCFCFC] shrink-0 lg:py-20 lg:mt-10 ">
      <div className="w-full flex lg:h-[80vh] h-[60vh]  px-20">
        <div className="w-1/2 hidden lg:block">
          <div className="relative h-full w-full">
            <div
              className={`border-8 border-white lg:w-[61%] w-[55%] h-[70%] rounded-t-full bg-[#f2c0fb] absolute bottom-0 left-1/2 transform translate-x-[-50%] z-1 image-container shadow-lg shadow-black`}
            >
              <div className="absolute top-[-30%] h-full w-[120%] right-0">
                <img
                  src={testimonialImage}
                  className="h-[130%] top-[-20%] w-full image"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full flex flex-col justify-around ">
          {/* <div className=""> */}
          <SubtitleText
            title={"Testimonials About Us"}
            description={
              "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con"
            }
          />

          <div
            className={` border rounded-lg w-full shadow-md bg-[#f6f0f2] relative `}
          >
            <div className="  relative  ">
              <div className="overflow-x-hidden px-5 py-6 space-y-6">
                <span
                  className={`w-16 h-16 rounded-md border-2 flex justify-center items-center absolute -top-9 bg-[#670127]`}
                >
                  <img src={crown} alt="" className="h-8 w-8" />
                </span>

                <AnimatePresence>
                  <TestimonialCard {...testimonialData[currentIndex]} />
                </AnimatePresence>

                <div className="flex justify-end gap-5">
                  <div className="left" onClick={handlePrevious}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 96 960 960"
                      width="20"
                    >
                      <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
                    </svg>
                  </div>
                  <div className="right" onClick={handleNext}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 96 960 960"
                      width="20"
                    >
                      <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
