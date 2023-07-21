import React from "react";
import { commentsData } from "./data";
import Image from "next/image";

function Comments() {
  return (
    <div className="font-hind px-[25px]">
      {commentsData.map((item) => (
        <div
          key={item.name}
          className="flex py-[15px] border-b-[#efefef] border-b-[1px] border-b-solid"
        >
          {/* <div className=""> */}
          <Image
            src={item.img}
            width={100}
            height={100}
            className="w-[100px] h-[100px] mr-[20px]"
            alt="Visitor"
          />
          {/* </div> */}
          <div className="font-light">
            <div className="flex justify-between items-center">
              <h3 className="activeitem">{item.name}</h3>
              <h4 className="text-[0.6875rem] font-hind cursor-pointer font-bold text-[#000]">
                Reply
              </h4>
            </div>
            <h3 className="text-[#c5c5c5]  leading-[1.25rem] text-[0.75rem]">
              {item.date}
            </h3>
            <p className="text-[0.875rem]  text-[#999999] leading-[1.375rem]">
              {item.comment}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Comments;
