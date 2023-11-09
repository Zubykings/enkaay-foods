import React, { useState } from "react";
import Button from "./Button";
import { logo, logoname } from "../../assets";
import { styles } from "../styles";

const Navbar = () => {
  const { isOpen, setIsOpen } = useState(false);

  const navLinks = [
    {
      label: "Home",
    },
    {
      label: "Abous us",
    },
    {
      label: "Contact us",
    },
    {
      label: "Our Services",
    },
    {
      label: "FAQ",
    },
  ];

  return (
    <nav className="bg-transparent">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between px-10 lg:px-0 mx-auto p-4">
        <a href="#" className="flex lg:ps-10 items-center text-white">
          <img src={logo} className={` ${styles.headerLogo}`} alt="" />
          <div className="flex flex-col items-center justify-center px-1">
            <h1 className="uppercase font-extrabold text-2xl">enkqaay</h1>
            <img src={logoname} alt="" className="" />
          </div>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg lg:hidden hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-200 dark:hover:bg-yellow-700 dark:focus:ring-yellow-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full lg:pe-5 lg:flex lg:w-[70%] justify-between " id="navbar-default">
          <ul className={`${styles.ulList}`}>
            {navLinks.map((link, index) => (
              <li key={index} className={`${styles.listStyle}`}>
                <a href="#">{link.label} </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-5">
            <Button text="Sign up" style={"bg-[#FAA307] "} />
            <Button
              text="Log in"
              style={"border-2 border-[#FAA307] text-[#FAA307] "}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
