"use client";
import React, { useRef } from "react";
import useOnScreen from "./hooks";
import { HiChevronDown } from "react-icons/hi";

function Hero({ setIntersecting }) {
  const ref = useRef();
  useOnScreen(ref, setIntersecting);
  //   console.log(isvisible, "from intro page");

  const servivesProvided = [
    "Video documentaries",
    "Photo documentaries",
    "Prints",
    "Corporate videos",
    "Event Coverage",
    "Media Consultancy",
  ];
  return (
    <section ref={ref} className="hero  bg-[#070303] relative">
      {/* <span  className="absolute top-0">
        .
      </span> */}
      <div className=" text-[#ffffff] wrapper">
        {/* <div className="static-txt">I`m a</div> */}
        <ul className="dynamic-txts">
          {servivesProvided.map((item, key) => (
            <li
              key={item + key}
              className="text-[1.4rem] m:text-[2rem] md:text-[2.5rem] mmmd:text-[3.5rem] lg:text-[4rem] "
            >
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute left-[50%] btn-anime ml-[-15px]">
        <a href="#Intro">
          <HiChevronDown className="text-[green] cursor-pointer" size={30} />
        </a>
      </div>
    </section>
  );
}

export default Hero;
