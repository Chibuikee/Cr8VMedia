import React from "react";
import { links } from "./Navbar/Navbardata";

function Footer() {
  return (
    <footer className="text-center py-[90px] m:py-[120px]">
      <div>
        <p className="text-[0.875rem] text-[#898989] tracking-[0.03em] leading-[1.25rem]">
          &copy; 2023 Cr8v. ALL RIGHTS RESERVED.
        </p>
        <ul className="mt-[10px] md:w-[70%]">
          {links.map((item) => (
            <li
              key={item.title}
              className="inline-block w-[36px] mx-[6px] h-[36px] "
            >
              <a
                href="https://www.linkedin.com/in/chibuike-ewenike-960599172/"
                className=""
              >
                <item.title size={18} className="text-[#898989]" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
