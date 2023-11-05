"use client";
import React, { useState } from "react";
import { RecentWroksData } from "./data";
import Image from "next/image";
import PopUp from "./popUp";

function RecentWorks() {
  const [pickedItems, setPickedItems] = useState(null);
  const [active, setActive] = useState("All");
  const [activePopUp, setPopUp] = useState(false);
  const RecentItems = [
    { title: "All", url: "" },
    { title: "Branding", url: "" },
    { title: "Events", url: "" },
    { title: "Photos", url: "" },
    { title: "Photography", url: "" },
    { title: "Videos", url: "" },
  ];

  function moveItemToFirst(recentWorks, ClickedItem) {
    // console.log(recentWorks, ClickedItem);
    const filteredItems =
      ClickedItem === "All"
        ? recentWorks
        : recentWorks.filter((item) => item.title === ClickedItem);
    if (filteredItems.length !== -1) {
      setPickedItems(filteredItems);
      setActive(ClickedItem);
    }
  }
  return (
    <section id="Works" className="pt-[90px] pb-[60px]">
      {activePopUp && <PopUp setPopUp={{ setPopUp, activePopUp }} />}
      <div className="px-[5%] max-w-[100%]">
        <h1 className="text-[1.75rem] mb-[30px] leading-[44px] font-normal tracking-[0]">
          Recent Works
        </h1>
        <div className="md:flex gap-2 mb-[30px]">
          {RecentItems.map((data, key) => (
            <div
              onClick={() => moveItemToFirst(RecentWroksData, data.title)}
              key={data.title + key}
              className="pr-[30px] llg:pr-[60px] xxs:pb-[0px] pb-[15px] inline-block"
            >
              <h4
                className={`text-[#898989] ${
                  active == data.title && "activeitem"
                } text-[0.9375rem] leading-[8px] font-light cursor-pointer`}
              >
                {data.title}
              </h4>
            </div>
          ))}
        </div>
        <div className="m:grid grid-cols-2 gap-[50px] pb-[50px]">
          {(pickedItems || RecentWroksData).map((data, key) => (
            <div
              key={data.title + key}
              className="mb-[30px] llg:mb-[70px] transition ease-in-out hover:translate-y-[-10px] duration-1000"
            >
              <div className="relative">
                <a href="#popUp">
                  <Image
                    src={data.Img}
                    width={700}
                    height={500}
                    alt={data.title}
                    onClick={() => setPopUp(data)}
                    className="cursor-pointer"
                  />
                </a>
              </div>

              <h3 className="activeitem inline-block leading-[12px] cursor-pointer text-[#898989] llg:text-[0.875rem] text-[0.75rem] mt-[20px] mb-[10px]">
                {data.title}
              </h3>

              <a href="#popUp">
                <h1
                  onClick={() => setPopUp(data)}
                  className="cursor-pointer text-[1.375rem] font-light leading-[1.875rem] llg:text-[1.75rem]"
                >
                  {data.description}
                </h1>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentWorks;
