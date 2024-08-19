import React, { useState } from "react";
import testimonial_1 from "../assets/videos/testimonial_1.mp4";
import testimonial_2 from "../assets/videos/testimonial_2.mp4";
// import testimonial_3 from "../assets/videos/testimonial_3.mp4";
const Testimonial = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoArray = [testimonial_1, testimonial_2];
  const handlePrev = () => {
    if (currentVideo === 0) {
      setCurrentVideo(videoArray.length - 1);
    } else {
      setCurrentVideo(currentVideo - 1);
    }
  };
  const handleNext = () => {
    if (currentVideo === videoArray.length - 1) {
      setCurrentVideo(0);
    } else {
      setCurrentVideo(currentVideo + 1);
    }
  };
  return (
    <div>
      <div
        className="w-full bg-primary md:h-screen h-auto flex  flex-col items-center justify-center md:gap-5 gap-2"
      >
        <h1 className="text-tertiary md:text-4xl text-xl uppercase ">What people are saying</h1>
        <div className="lg:w-[680px] lg:h-[400px] md:w-[480px]  w-[300px] h-[200px] md:h-[280px] relative">
          <div className="relative  overflow-hidden rounded-lg h-full">
            <div className=" duration-700 ease-in-out" data-carousel-item>
              <video
                src={videoArray[currentVideo]}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-lg"
                alt="..."
                muted
                autoPlay
              />
            </div>
          </div>

          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={handlePrev}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30  group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={handleNext}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30  group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
