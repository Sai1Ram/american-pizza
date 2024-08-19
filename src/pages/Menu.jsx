import React from "react";
import NavBar from "../components/NavBar";
import { foodImagesArray } from "../assets/data";
import CardItem from "../components/card";
import Footer from "../components/footer";
import { Divider } from "@mui/material";
import ImageList from "../components/imageList";

const Menu = () => {
  return (
    <>
    <div className="bg-secondary relative py-24 flex flex-col items-center overflow-x-hidden">
      <div className="w-full absolute top-0 left-0 z-[2]">
        <NavBar />
      </div>
      <h1 className="text-4xl font-bold text-white mx-auto my-10 text-center">Menu</h1>

      <div className="flex justify-center flex-wrap gap-4">
        {foodImagesArray.map((foodItem, index) => (
          <CardItem key={index} foodItem={foodItem} />
        ))}
      </div>
    <h1 className="text-4xl font-bold text-white mx-auto my-10 text-center">Party Area</h1>
    <ImageList />
    </div>
    <Divider />
      <Footer />
      </>
  );
};

export default Menu;
