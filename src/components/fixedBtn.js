import React from "react";
import { GoLightBulb } from "react-icons/go";

function FixedBtn() {
  return (
    <div className="fixed top-[50%] z-[999] bg-[#efeff1] right-0 translate-x-[70%] hover:translate-x-[0%] duration-[0.7s]">
      <div className="flex items-center p-2">
        <GoLightBulb size={18} className=" mr-5" />
        <h1 className="pr-2">Cr8V Media</h1>
      </div>
    </div>
  );
}

export default FixedBtn;
