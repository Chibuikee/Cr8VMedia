"use client";
import React, { useState } from "react";
import { links, NavMenuList } from "./Navbardata";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar({ isvisible }) {
  const [navBarToggle, setNavBarToggle] = useState(null);

  const bg = { backgroundColor: `${!isvisible ? "white" : "red"}` };

  return (
    <nav className="py-[30px] lg:py-[50px] sticky top-0  w-[90%] mx-auto sm:max-w-[600px] md:max-w-[760px] lg:max-w-[1010px] xl:max-w-[1280px]">
      <h1 className="logo" translate="no">
        BUZO
      </h1>
      <div className="md:w-[500px] absolute right-[0] top-[30px]">
        <div
          onClick={() => setNavBarToggle(!navBarToggle)}
          className="w-[30px] menuToggle ml-auto md:hidden absolute top-0 right-0"
          style={bg}
        >
          {!navBarToggle && <HiMenu size={30} className="menuToggle-icon " />}
        </div>
        <div
          // style={navtogglerStyle}
          className={`Nav-main pl-[30px] ${
            navBarToggle ? "" : "translate-x-[200%]"
          } md:translate-x-0 flex transition ease-in-out duration-1000 relative`}
        >
          {navBarToggle && (
            <HiX
              size={30}
              onClick={() => setNavBarToggle(!navBarToggle)}
              className="menuToggle-icon md:hidden"
            />
          )}
          <ul className="Nav-menu bg-[#ffffff]  px-[30px] md:flex md:justify-between w-[200px] md:w-[500px]">
            {NavMenuList.childList.map((item, key) => (
              <li className="text-[red]" key={key}>
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
      </div>
    </nav>
  );
}

export default Navbar;
