import React from "react";
import SubtitleText from "../../constants/SubtitleText";
import { foodData, menuData } from "../../constants";
import Button from "../../constants/Button";
import { motion } from "framer-motion";


const Menu = () => {
  // console.log(foodData.length)

  const MenuPlan = ({ img, title, logoStyle, style }) => {
    return (
      <a
        className={`flex w-[90%] py-2 px-4 bg-[#f6f0f2] ${style} rounded-xl items-center gap-x-10 shadow-md cursor-pointer hover:opacity-80`}
      >
        <span
          className={`w-16 h-16 rounded-md border-2 flex justify-center items-center bg-[#670127] ${logoStyle} `}
        >
          <img src={img} alt="" className="h-8 w-8" />
        </span>
        <h1 className="text-xl font-semibold ">{title}</h1>
      </a>
    );
  };

  const MenuMap = () => {
    return (
      <div className="lg:w-1/2  flex flex-col overflow-y-scroll h-[450px] gap-y-10 menu-container pe-10">
        {menuData.map((menu, index) => (
          <MenuPlan
            key={index}
            img={menu.img}
            title={menu.title}
            logoStyle={menu.logoStyle}
            style={menu.style}
          />
        ))}
      </div>
    );
  };

  const Food = ({ img, description, btnText, btnStyle }) => {
    return (
      <div className="rounded-t-full border-8 border-[#fff] flex flex-col items-center overflow-hidden w-[45%] h-[400px] py-5 px-7 bg-[#F9F2F5] justify-between shadow space-y-5 ">
        <div className="rounded-t-full h-full bg-[#F185AE] w-full flex items-center justify-center ">
          <img src={img} alt="" className="object-contain w-[80%] lg:w-[90%]" />
        </div>
        <p>{description}</p>
        <Button text={btnText} style={`${btnStyle}`} />
      </div>
    );
  };

  const FoodMap = () => {
    return (
      <div className="lg:w-1/2 h-[450px] flex justify-center items-center">
        <div className="flex justify-around items-center">
          {foodData.map((food, index) => (
            <Food
              key={index}
              description={food.description}
              btnText={food.btnText}
              img={food.img}
              btnStyle={food.btnStyle}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <motion.div className="w-full px-24 py-10 lg:h-screen ">
      <div className=" lg:space-y- space-y-8 ">
        <div className="lg:w-1/2">
          <SubtitleText
            title={"Try Our Healthy Menu"}
            description={
              "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con"
            }
          />
        </div>
        <div className="flex lg:flex-row flex-col-reverse gap-16 ">
          <MenuMap />
          <FoodMap />
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
