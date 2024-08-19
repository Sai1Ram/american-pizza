import React from "react";
import { topProducts, foodImagesArray } from "../assets/data";
import Card from "./card";
import { useNavigate } from "react-router-dom";
import CardItem from "./card";

const OurMenu = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full lg:px-24 lg:py-16 p-4 md:p-8 bg-secondary">
      <h1 className="text-tertiary md:text-4xl text-2xl uppercase text-center">Top Products</h1>
      <ul className="flex lg:gap-4 md:gap-3 gap-1 list-none w-full flex-wrap  justify-center lg:my-10 my-5">
        {
          topProducts.map((product, index) => (
            <li key={index} className=" flex justify-center flex-col items-center ">
              <img src={product.url} alt={product.name} className="lg:w-32 lg:h-32 md:w-20 md:h-20 w-16 h-16  rounded-full object-cover" />
              <h2 className="text-slate-400 text-base hidden lg:block">{product.name}</h2>
            </li>
          ))
        }
      </ul>
      <div className="flex flex-wrap gap-4 justify-center">
        {
          foodImagesArray.slice(0,8).map((foodItem, index) => (
            <CardItem key={index} foodItem={foodItem} />
          ))
        }
      </div>
      <button className="bg-primary text-white py-2 px-4 rounded-full mx-auto mt-4 block" onClick={()=>navigate('/menu')}>View More</button>
    </div>
  );
};

export default OurMenu;
