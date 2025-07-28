import React from "react";
import { Link } from "react-router-dom";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

const Hero = () => {
  const pageInfo = {
    name: "Miguel Perez",
    heroImage: "./profile.jpg",
    role: "Telematics Engineer",
  };
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Miguel Pérez",
      "GuyWhoLovesCofee.jsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div
      id="hero"
      className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden"
    >
      <BackgroundCircles />
      <img
        src={pageInfo.heroImage}
        alt="profile"
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo.role}
        </h2>
        <h1 className="md:text-5xl text-2xl lg:text-6xl font-semibold scroll-px-10">
          <span className="mr-3 ">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link reloadDocument to="/#about">
            <button className="heroButton">About</button>
          </Link>
          <Link reloadDocument to="/#work">
            <button className="heroButton">Experience</button>
          </Link>
          <Link reloadDocument to="/#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link reloadDocument to="/#feedbacks">
            <button className="heroButton">Testimonials</button>
          </Link>
          <Link reloadDocument to="/#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
