"use client";
import React from "react";

function Intro() {
  return (
    <section className="py-[90px]" id="Intro">
      <div className="px-[5%]">
        <h3 className="text-[1.75rem] lg:text-[3.25rem] font-[eczar] leading-10 lg:leading-[4rem] font-normal mb-[28px]">
          Cr8V Media is a leading multimedia company based in Lagos, Nigeria.
        </h3>
        <p className="text-[1rem] my-[25px] font-[300]  leading-[30px] lg:text-[1.25rem] lg:leading-[2.125rem] text-[#999999]">
          specializing in the art of storytelling through various mediums. We
          are dedicated to capturing and sharing unique stories that matter,
          utilizing a wide range of formats such as video and photo
          documentaries, prints, as well as corporate videos tailored to suit
          businesses and government agencies.
        </p>
        <h5 className="newset inline-block shadow-inner pt-[2px] text-[0.75rem] leading-[12px] cursor-pointer tracking-[0.2em] font-medium">
          DOWNLOAD RESUME
        </h5>
      </div>
    </section>
  );
}

export default Intro;
