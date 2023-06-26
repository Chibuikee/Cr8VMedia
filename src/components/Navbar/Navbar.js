"use client";
import React, { useRef, useState } from "react";
import { links, NavMenuList } from "./Navbardata";
import { HiMenu, HiX } from "react-icons/hi";
import useOnScreen from "../hooks";
function Navbar() {
  const [navBarToggle, setNavBarToggle] = useState(null);
  //   useEffect(() => {
  //     const w = () => {
  //       window.innerWidth === 800 && setNavBarToggle(true);
  //     };
  //     window.addEventListener("resize", w);
  //     return () => {
  //       window.removeEventListener("resize", w);
  //     };
  //   }, []);
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const bg = { backgroundColor: `${!isVisible ? "black" : ""}` };
  // return <div ref={ref}>{isVisible && `Yep, I'm on screen`}</div>

  // const navtogglerStyle = {
  //   // transform: `translate(${navBarToggle ? "0" : "1000%"})`,
  // };
  return (
    <nav className="py-[30px] lg:py-[50px] sticky top-0  w-[90%] mx-auto sm:max-w-[600px] md:max-w-[760px] lg:max-w-[1010px] xl:max-w-[1280px]">
      <h1 ref={ref} className="logo" translate="no">
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
