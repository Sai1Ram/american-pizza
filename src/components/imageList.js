import React, { useState } from "react";
import hall_1 from "../assets/images/hall_1.jpg";
import hall_2 from "../assets/images/hall_2.jpg";
import hall_3 from "../assets/images/hall_3.jpg";
import hall_4 from "../assets/images/hall_4.webp";
import hall_5 from "../assets/images/hall_5.avif";

const imgArray = [hall_1, hall_2, hall_3, hall_4, hall_5];
const ImageList = () => {
  const [currentImage, setCurrentImage] = useState(imgArray[0]);
  const handleSetImage = (index) => {
    setCurrentImage(imgArray[index]);
  };
  return (
    <div className="w-screen px-4 flex justify-center">
      <div className="grid gap-4 lg:w-[1080px] w-full">
        <div>
          <img
            className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
            src={currentImage}
            alt=""
          />
        </div>
        <div className="grid grid-cols-5 lg:gap-4 gap-2">
          {imgArray.map((img, index) => (
            <div key={index} onClick={()=>handleSetImage(index)} >
              <img
                src={img}
                className="object-cover w-full object-center h-20 max-w-full rounded-lg cursor-pointer"
                alt="gallery-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageList;
