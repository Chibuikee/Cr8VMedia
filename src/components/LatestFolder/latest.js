import React from "react";
import Image from "next/image";
import { LatestWorksData } from "./data";
import Link from "next/link";

function Latest() {
  return (
    <section
      id="Clients"
      className="pt-[90px] pb-[60px] m:pt-[180px] m:pb-[110px] bg-[#f9f9f9]"
    >
      <div className="px-[5%] llg:max-w-[1020px] mx-auto">
        <h2 className="text-[1.75rem] mb-[30px] llg:text-[2.125rem] llg:leading-[2.75rem] font-normal">
          Latest Blogs
        </h2>
        <div className="md:flex gap-5">
          {LatestWorksData.map((data) => (
            <div key={data.name}>
              <Link href={`blog/${data.name}`}>
                {" "}
                <Image
                  src={data.url}
                  loading="lazy"
                  width={400}
                  height={400}
                  alt={data.name}
                  className="mb-[25px]"
                />
              </Link>
              <Link href={`blog/${data.name}`}>
                <h3 className="text-[1.1875rem] leading-[1.5rem] font-medium text-[#292929] cursor-pointer mb-[13px]">
                  {data.title}
                </h3>
              </Link>
              <p className="text-[0.875rem] leading-[1.5rem] font-light text-[#999999] cursor-pointer mb-[13px]">
                {data.description}
              </p>
              <h1 className="text-[0.75rem] font-normal text-[#b9b9b9]">
                {data.name}
                <span> - {data.date}</span>
              </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Latest;
