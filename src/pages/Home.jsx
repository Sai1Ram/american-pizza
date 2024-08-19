import React from "react";
import video from "../assets/videos/background_video.mp4";
import logo from "../assets/images/logo.jpg";
import Navbar from "../components/NavBar";
import { motion, useScroll, useTransform } from "framer-motion";
import AboutSection from "../components/aboutSection";
import OurMenu from "../components/OurMenu";
import Footer from "../components/footer";
import { Divider } from "@mui/material";
import  Testimonial from "../components/testimonial";


const Home = () => {

  // Use the useScroll hook to track the scroll progress
  const { scrollYProgress } = useScroll();

  // Map the scroll progress to a y translation value
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);


  return (
    <>
      <div className="h-[130vh] font-desc relative">
        <div className="w-full absolute top-0 left-0 z-[2]">
          <Navbar color={"white"} />
        </div>
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{ y }}
        >
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
            style={{ width: "100vw" }}
            autoPlay
            loop
            muted
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-0 left-0 w-full h-full bg-gray-800/70 z-[-1]"></div>
        </motion.div>
        <motion.div
          style={{ y }}
          className="z-[3] text-white text-center flex justify-center items-center flex-col bg-violet-100/20 h-full w-full py-4"
        >
          <div className="flex flex-col justify-center items-center mt-52">
            <h1 className="lg:text-6xl  text-3xl font-bold mb-4 capitalize font-['Kalnia',_serif]">
              ALL FAST FOOD ARE AVAILABLE HERE
            </h1>
            <div className="my-4">
              <div
                className=""
                onClick={() => {
                  window.scrollBy(0, 800);
                }}
              >
                <button className="py-2 px-2 w-20 md:w-32 flex justify-center items-center lg:w-40 rounded-2xl text-sm lg:text-lg">
                  <img src={logo} alt="" />
                </button>
              </div>
            </div>
            <p className="lg:text-xl text-sm">
              Tip to toe under your fingertips!
            </p>
          </div>
        </motion.div>
      </div>
      <section>
        <AboutSection/>
      </section>
      <section>
        <OurMenu />
      </section>
      <section>
        <Testimonial />
      </section>
      <Divider />
      <Footer/>
    </>
  );
};

export default Home;
