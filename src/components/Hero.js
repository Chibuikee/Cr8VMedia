"use client";
import React, { useRef } from "react";
import useOnScreen from "./hooks";

function Hero({ setIntersecting }) {
  const ref = useRef();
  useOnScreen(ref, setIntersecting);
  //   console.log(isvisible, "from intro page");
  return (
    <section ref={ref} className="hero  bg-[#070303]">
      {/* <span  className="absolute top-0">
        .
      </span> */}
      <div className=" text-[#ffffff] wrapper">
        {/* <div className="static-txt">I`m a</div> */}
        <ul className="dynamic-txts">
          <li>
            <span>Lawyer</span>
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
