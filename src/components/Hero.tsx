import { Avatar } from "@mantine/core";
import React from "react";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4"
      style={{
        backgroundImage: `url('https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3dnaDhyM2J6YzQ3d2pkNnlreGV5aW5mdjUzcDMwdjhqbHB3ZW5oMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CIjXMxobcEnkI/giphy.gif')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay to make text readable */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
        
          <img className="w-25 h-30 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg"

    
           src="./public/Anshu_Passport_Photo.jpeg" alt="" />
        </div>
        <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold text-white">
          Anshu Kumar
        </h1>
        <h2 className="mt-2 text-xl sm:text-2xl font-semibold text-blue-300">
           AI/ML Engineer
        </h2>
        <p className="mt-4 max-w-2xl text-gray-200">
          Turning data into intelligent solutions
        </p>
        <p className="mt-2 max-w-2xl text-gray-300">
          Passionate about artificial intelligence and machine learning,
          dedicated to building innovative solutions that make a meaningful
          impact on the world.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4 justify-center">
          <a
            href="https://drive.google.com/file/d/1tNZ1sd43nE7v5LLpVzDHW0WqU6mao7yK/view?usp=drive_link"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium shadow-lg hover:scale-105 transition-transform"
          >
            See Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400 hover:text-white transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
