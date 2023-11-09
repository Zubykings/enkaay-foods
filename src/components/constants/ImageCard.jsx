import React from "react";
import { styles } from "../styles";

const ImageCard = ({ img }) => {
  return (
    <div className="w-full h-full">
      <div className="relative h-full w-full mt-[7%]">
        <div className={`${styles.imageContainer} image-container`}>
          <img
            src={img}
            className="h-[120%]  absolute top-[-20%] object-cover image"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
