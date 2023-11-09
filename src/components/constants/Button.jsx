import React from "react";
import { styles } from "../styles";

const Button = ({ text, style }) => {
  

  return <div className={`${style} ${styles.ButtonStyle} `}>{text} </div>;
};

export default Button;
