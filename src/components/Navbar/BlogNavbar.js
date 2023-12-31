"use client";
import React, { useState } from "react";
import { links, NavMenuList } from "./Navbardata";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";

function BlogNavbar({ isvisible }) {
  const [navBarToggle, setNavBarToggle] = useState(null);

  const bg = {
    backgroundColor: `${!isvisible ? "white" : "transparent"}`,
    pointerEvents: "auto",
  };

  return (
    <nav
      className={`py-[30px] lg:py-[50px] ${
        isvisible ? "bg-[transparent]" : "bg-white"
      }  lg:py-[50px] left-0 right-0 fixed top-0 z-[9]`}
    >
      <div
        className={`w-[90%] mx-auto sm:max-w-[600px] md:max-w-[760px] lg:max-w-[1010px] xl:max-w-[1280px]`}
      >
        <Link href="/">
          <h1
            className={`logo ${isvisible ? "text-white" : "text-black"}`}
            translate="no"
          >
            Cr8VibeMedia
          </h1>
        </Link>
        <div
          // pointerEvents is used to disable events on this elements so that elements below it can be clickable
          style={{ pointerEvents: "none" }}
          className="md:w-[500px] bg-[transparent] overflow-hidden absolute  right-0 md:right-[15px] top-0 md:top-[30px]"
        >
          <div
            onClick={() => setNavBarToggle(!navBarToggle)}
            className="w-[30px] menuToggle ml-auto md:hidden absolute top-[25px] right-[20px]"
            style={bg}
          >
            {!navBarToggle && (
              <HiMenu
                size={30}
                className={`  ${
                  isvisible ? "text-white" : "text-black"
                } menuToggle-icon cursor-pointer`}
              />
            )}
          </div>
          <div
            style={{ pointerEvents: "auto" }}
            className={`Nav-main pl-[30px] ${
              navBarToggle ? "" : "translate-x-[300%]"
            } md:translate-x-0 flex  ease-in-out duration-1000  relative`}
          >
            {navBarToggle && (
              <HiX
                size={30}
                onClick={() => setNavBarToggle(!navBarToggle)}
                className={` menuToggle-icon cursor-pointer absolute top-[25px] left-0 md:hidden ${
                  isvisible ? "text-white" : "text-black"
                } menuToggle-icon`}
              />
            )}
            <ul
              className={`Nav-menu  pt-[25px] md:pt-0 ${
                isvisible ? "md:bg-[black] bg-white" : "bg-[#ffffff]"
              } px-[30px] md:flex md:justify-between h-[100vh] md:h-[initial] md:w-[500px] w-[200px]`}
            >
              {NavMenuList.childList.map((item, key) => (
                <li
                  className={`nav-link py-2 md:py-0 ${
                    isvisible ? "text-black md:text-[white]" : "text-black"
                  }`}
                  key={key}
                >
                  <a href={item.url} className="cursor-pointer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default BlogNavbar;
