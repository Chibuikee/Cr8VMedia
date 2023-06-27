"use client";
import React, { useRef } from "react";
import useOnScreen from "./hooks";

function Hero({ setIntersecting }) {
  const ref = useRef();
  useOnScreen(ref, setIntersecting);
  //   console.log(isvisible, "from intro page");
  return (
    <section>
      <div
        ref={ref}
        className="bg-[#070303] text-[#ffffff] text-[5rem] mx-[15px]"
      >
        Hero
      </div>
    </section>
  );
}

export default Hero;
