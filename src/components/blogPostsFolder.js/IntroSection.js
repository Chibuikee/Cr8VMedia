"use client";
import Image from "next/image";
import { IntroData, paragraphs } from "./data";
import { LatestWorksData } from "../LatestFolder/data";
import useOnScreen from "../hooks";
import { useRef } from "react";
import { useParams } from "next/navigation";

function IntroSection({ setIntersecting }) {
  const ref = useRef();
  useOnScreen(ref, setIntersecting);
  const route = useParams();
  const params11 = decodeURIComponent(route?.blog);
  const otherBlogPostsImg = LatestWorksData.filter(
    (item) => item.name !== params11
  );
  const BlogPoster = LatestWorksData.find((item) => item.name == params11);
  // console.log("look at this", params);
  return (
    <section>
      <div className="relative ">
        {/* <div className="absolute top-0 left-0  right-0 h-full w-full">
        </div> */}
        <Image
          ref={ref}
          src={BlogPoster?.url}
          width={1000}
          height={1000}
          alt="blog post"
          className="blur-[1px]"
        />
        <h1 className="text-center text-[7.91666667vw] tracking-[0.1em] leading-[7.91666667vw] font-montserrat font-bold absolute top-[50%] left-0 right-0 mx-auto text-[#ffffff]">
          BLOG POST
        </h1>
      </div>
      <div className="px-[25px] pt-[100px] max-w-[1020px]">
        {IntroData.map((item, key) => (
          <div key={key}>
            <h1 className="mb-[5px] font-normal font-eczar text-[#292929] text-[2.375rem] leading-[2.875rem] ">
              {item.heading}
            </h1>
            <time className="text-[#b9b9b9] text-[0.8125rem] ">
              Posted {item.date}
            </time>
            <Image
              src={item.img}
              //   placeholder="blur"
              width={1000}
              height={1000}
              alt="background"
              className="my-[30px]"
            />
          </div>
        ))}
      </div>
      <article className="text-[1.0625rem] font-light text-[#999999] leading-[1.875rem] px-[5%] font-hind mb-[60px]">
        <p className="my-[25px]">{paragraphs.para1}</p>
        <p className="my-[25px]">{paragraphs.para2} </p>
        <p
          before=" "
          className="my-[25px] relative pl-[20px] before:absolute  before:bg-[black] before:w-[4px] before:left-[-5px] before:top-0 before:h-[100%] before:content-[attr(before)]"
        >
          {paragraphs.para3}
        </p>
        <p className="text-[red] my-[25px]">{paragraphs.para4} </p>
        <ul className="my-[25px] p-[30px] list-disc text-[1.0625rem]">
          {paragraphs.para5.map((item, key) => (
            <li key={key}>{item}</li>
          ))}
        </ul>
        <p className="my-[25px]">{paragraphs.para6}</p>
      </article>
      <div className="pt-[30px] md:flex">
        {otherBlogPostsImg.map((item, key) => (
          <div key={key} className="relative px-[25px] pb-[30px]">
            <Image src={item.url} width={500} height={500} alt="blog post" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default IntroSection;
