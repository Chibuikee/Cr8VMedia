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
  const params = decodeURIComponent(route?.blog);
  const otherBlogPostsImg = LatestWorksData.filter(
    (item) => item.name !== params
  );
  const BlogPoster = LatestWorksData.find((item) => item.name == params);
  console.log("look at this");
  return (
    <section>
      <div className="relative ">
        {/* <div className="absolute top-0 left-0  right-0 h-full w-full">
        </div> */}
        <Image
          ref={ref}
          src={BlogPoster?.url}
          width={500}
          height={500}
          alt="blog post"
          className="blur-[1px]"
        />
        <h1 className="text-center absolute top-[50%] left-0 right-0 mx-auto text-[red]">
          BLOG POST
        </h1>
      </div>
      <div className="px-[25px]">
        {IntroData.map((item, key) => (
          <div key={key}>
            <h1 className="my-10">{item.heading}</h1>
            <time>{item.date} </time>
            <Image
              src={item.img}
              //   placeholder="blur"
              width={500}
              height={500}
              alt="background"
            />
          </div>
        ))}
      </div>
      <article className="px-[25px]">
        <p>{paragraphs.para1}</p>
        <p>{paragraphs.para2} </p>
        <p
          before=" "
          className="relative pl-[20px] before:absolute  before:bg-[black] before:w-[4px] before:left-[-5px] before:top-0 before:h-[100%] before:content-[attr(before)] my-10"
        >
          {paragraphs.para3}
        </p>
        <p className="text-[red]">{paragraphs.para4} </p>
        <ul className="p-[30px] list-disc text-[1.0625rem]">
          {paragraphs.para5.map((item, key) => (
            <li key={key}>{item}</li>
          ))}
        </ul>
        <p className="mt-[25px]">{paragraphs.para6}</p>
      </article>
      <div>
        {otherBlogPostsImg.map((item, key) => (
          <div key={key} className="relative">
            <Image src={item.url} width={500} height={500} alt="blog post" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default IntroSection;
