"use client";
import React, { useState } from "react";
import { links, NavMenuList } from "./Navbardata";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar({ isvisible }) {
  const [navBarToggle, setNavBarToggle] = useState(null);

  const bg = { backgroundColor: `${!isvisible ? "white" : "black"}` };

  return (
    <nav
      className={`py-[30px] lg:py-[50px] ${
        isvisible ? "bg-black" : "bg-white"
      }  lg:py-[50px] sticky top-0 z-[99]`}
    >
      <div
        className={`w-[90%] mx-auto sm:max-w-[600px] md:max-w-[760px] lg:max-w-[1010px] xl:max-w-[1280px]`}
      >
        <h1
          className={`logo ${isvisible ? "text-white" : "text-black"}`}
          translate="no"
        >
          Cr8vMedia
        </h1>
        <div className="md:w-[500px] overflow-hidden absolute  right-0 md:right-[15px] top-0 md:top-[30px]">
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
                } menuToggle-icon`}
              />
            )}
          </div>
          <div
            // style={navtogglerStyle}
            className={`Nav-main pl-[30px] ${
              navBarToggle ? "" : "translate-x-[200%]"
            } md:translate-x-0 flex transition ease-in-out duration-1000  relative`}
          >
            {navBarToggle && (
              <HiX
                size={30}
                onClick={() => setNavBarToggle(!navBarToggle)}
                className={` menuToggle-icon absolute top-[25px] left-0 md:hidden ${
                  isvisible ? "text-white" : "text-black"
                } menuToggle-icon`}
              />
            )}
            <ul
              className={`Nav-menu pt-[25px] md:pt-0 ${
                isvisible ? "md:bg-[black] bg-white" : "bg-[#ffffff]"
              }   px-[30px] md:flex md:justify-between h-[100vh] md:h-[initial] w-[200px] md:w-[500px]`}
            >
              {NavMenuList.childList.map((item, key) => (
                <li
                  className={`nav-link py-2 md:py-0 ${
                    isvisible ? "text-black md:text-[white]" : "text-black"
                  }`}
                  key={key}
                >
                  <a href={item.url}>{item.name}</a>
                </li>
              ))}
            </ul>
            {/* <p className="text-sm md:hidden w-[50px]">
            Perspiciatis hic praesentium nesciunt. Et neque a dolorum voluptatem
            porro.
          </p>
          <ul className="Nav-social flex justify-between md:w-[70%] md:hidden">
            {links.map((item, key) => (
              <li key={key} className="">
                <a
                  href="https://www.linkedin.com/in/chibuike-ewenike-960599172/"
                  className=""
                >
                  <item.title className="nav-svg" />
                </a>
              </li>
            ))}
          </ul> */}
          </div>
        </div>{" "}
      </div>
    </nav>
  );
}

export default Navbar;
