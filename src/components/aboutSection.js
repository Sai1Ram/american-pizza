import React from "react";
import { imgArray } from "../assets/data";
const AboutSection = () => {
  const screenWidth = window.innerWidth;
  let radius, imageSize;

  if (screenWidth >= 1240) {
    // Large screens (lg and above)
    radius = 380;
    imageSize = "lg:w-56 lg:h-56";
  } 
  else if (screenWidth >= 1024) {
    // Medium screens (md)
    radius = 280;
    imageSize = "md:w-32 md:h-32";
  }
  else if (screenWidth >= 768) {
    // Medium screens (md)
    radius = 200;
    imageSize = "md:w-32 md:h-32";
  } else {
    // Small screens (sm and below)
    radius = 180;
    imageSize = "w-24 h-24";
  }
  return (
    <div className="flex justify-start w-full bg-no-repeat bg-cover overflow-hidden h-screen z-10 relative">
      <div className="w-full flex h-screen absolute top-0 left-0">
        <div className="left bg-secondary h-full md:w-1/2 w-0">
          <h1
            className="lg:text-8xl md:text-6xl text-tertiary font-['Pacifico',cursive] m-10"
            style={{
              textShadow: "3px 3px 3px red",
            }}
          >
            American Pizza Brahmapur
          </h1>
        </div>
        <div className="right bg-primary h-full md:w-1/2 w-full p-3 md:p-8 text-tertiary lg:text-lg text-base ">
        <h1
            className="md:hidden text-3xl text-tertiary font-['Pacifico',cursive] my-5"
            style={{
              textShadow: "3px 3px 3px blue",
            }}
          >
            American Pizza, Brahmapur
          </h1>
          <p className="font-sans">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            reiciendis doloremque blanditiis dolor ducimus iste aliquam id,
            quaerat nihil voluptatum, sed eveniet, tempore inventore voluptatem.
            Ipsa facere repellendus, officiis, suscipit omnis architecto dolorem
            aut praesentium magnam maxime minima quidem adipisci voluptatibus
            possimus debitis error dignissimos corrupti cumque. Dolorum
            voluptates recusandae esse, velit molestias minus expedita
            repellendus repellat, nostrum excepturi iusto praesentium
            reprehenderit atque consequatur accusamus illo vitae? Reiciendis
            blanditiis quam repellendus doloremque iure. Sed excepturi quidem
            earum maxime?
          </p>
        </div>
      </div>
      <div
        style={{
          left: "50%",
          bottom: screenWidth >= 1240 ? "-50%" : "-30%",
          transform: "translate(-50%, 0%) rotate(0deg)", // Initial position
        }}
        className="animate-[rotate_10s_linear_infinite] origin-center absolute xl:h-[100vh] outline-dashed outline-[#fff5] z-2 xl:w-[100vh] w-[50vh] h-[50vh] md:w-[60vh] md:h-[60vh] lg:w-[80vh] lg:h-[80vh] rounded-full"
      >
        {imgArray.map((image, index) => {
          // Define radii and image sizes based on screen size

          const angle = index * 60 * (Math.PI / 180); // Convert degree to radian
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className={`absolute object-cover rounded-full ${imageSize}`}
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% - ${y}px)`,
                transform: "translate(-50%, -50%)",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AboutSection;
