"use client";
import React, { useRef } from "react";
import useOnScreen from "./hooks";

function Hero({ setIntersecting }) {
  const ref = useRef();
  useOnScreen(ref, setIntersecting);
  //   console.log(isvisible, "from intro page");
  return (
    <section className="hero bg-[#070303]">
      <div ref={ref} className=" text-[#ffffff] wrapper">
        <div className="static-txt">I'm a</div>
        <ul className="dynamic-txts">
          <li>
            <span>YouTuber</span>
          </li>
          <li>
            <span>Designer</span>
          </li>
          <li>
            <span>Developer</span>
          </li>
          <li>
            <span>Freelancer</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Hero;
