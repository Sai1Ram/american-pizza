import React from 'react'
import image1 from "../assets/images/dish_1.png";
import image2 from "../assets/images/dish_2.png";
import image3 from "../assets/images/dish_3.png";
import image4 from "../assets/images/pizza_2.jpg";
import image5 from "../assets/images/food_2.jpg";
import image6 from "../assets/images/pizza_1.png";
const AboutSection = () => {
    const imgArray = [image1, image2, image3, image4, image5, image6];
  return (
    <div className="flex justify-start w-full bg-no-repeat bg-cover overflow-hidden h-screen z-10 relative">
          <div className="w-full flex h-screen absolute top-0 left-0">
            <div className="left bg-secondary h-full w-full">
              <h1
                className="text-8xl text-tertiary font-['Pacifico',cursive] m-10"
                style={{
                  textShadow: "3px 3px 3px red",
                }}
              >
                American Pizza Brahmapur
              </h1>
            </div>
            <div className="right bg-primary h-full w-full p-8 text-tertiary text-lg ">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
                reiciendis doloremque blanditiis dolor ducimus iste aliquam id,
                quaerat nihil voluptatum, sed eveniet, tempore inventore
                voluptatem. Ipsa facere repellendus, officiis, suscipit omnis
                architecto dolorem aut praesentium magnam maxime minima quidem
                adipisci voluptatibus possimus debitis error dignissimos
                corrupti cumque. Dolorum voluptates recusandae esse, velit
                molestias minus expedita repellendus repellat, nostrum excepturi
                iusto praesentium reprehenderit atque consequatur accusamus illo
                vitae? Reiciendis blanditiis quam repellendus doloremque iure.
                Sed excepturi quidem earum maxime? 
              </p>
            </div>
          </div>
          <div
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, 0%) rotate(0deg)", // Initial position
            }}
            className="animate-[rotate_10s_linear_infinite] origin-center absolute h-[100vh] outline-dashed outline-[#fff5] z-2 w-[100vh] rounded-full"
          >
            {imgArray.map((image, index) => {
              const angle = index * 60 * (Math.PI / 180); // Convert degree to radian
              const x = 380 * Math.cos(angle);
              const y = 380 * Math.sin(angle);

              return (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="absolute w-64 h-64 object-cover rounded-full"
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
  )
}

export default AboutSection