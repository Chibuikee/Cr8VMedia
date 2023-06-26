import React from "react";
import { links } from "./Navbar/Navbardata";

function Footer() {
  return (
    <footer>
      <ul className="Nav-social flex justify-between md:w-[70%]">
        {links.map((item) => (
          <li key={item.title} className="">
            <a
              href="https://www.linkedin.com/in/chibuike-ewenike-960599172/"
              className=""
            >
              <item.title className="nav-svg" />
            </a>
          </li>
        ))}
      </ul>
      <p>&copy; 2023 Cre8tive. ALL RIGHTS RESERVED.</p>
    </footer>
  );
}

export default Footer;
