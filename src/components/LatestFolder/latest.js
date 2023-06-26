import React from "react";
import Image from "next/image";
import { LatestWorksData } from "./data";

function Latest() {
  return (
    <section>
      <div className="flex">
        {LatestWorksData.map((data) => (
          <div key={data.name}>
            <Image
              src={data.url}
              loading="lazy"
              width={400}
              height={400}
              alt={data.name}
            />
            <h3>{data.title}</h3>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <p>{data.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Latest;
