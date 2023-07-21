import React from "react";
import { servicesData } from "./data";
function Services() {
  return (
    <section id="Services" className="pt-[90px] pb-[60px] bg-[#f9f9f9]">
      <div className="px-[5%] max-w-full mx-auto lg:max-w-[1020px]">
        <h3 className="font-[Eczar] mb-[30px] text-[1.75rem] font-normal text-[#292929] leading-[2.75rem]">
          What I Do
        </h3>
        <div className="grid gap-5 md:grid-cols-2">
          {servicesData.map((data) => (
            <div key={data.title} className="mb-[30px]">
              <data.icon size={48} />
              <h3 className="my-[10px] text-[0.875rem] font-medium tracking-[0.03em] leading-[1.25rem]">
                {data.title}
              </h3>
              <p className="text-[0.875rem] text-[#999999] leading-[1.5rem]">
                {data.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
