"use client";
import Image from "next/image";
import { IntroData, paragraphs } from "./data";
import { useRouter } from "next/router";
import { LatestWorksData } from "../LatestFolder/data";

function IntroSection() {
  const route = useRouter();
  const otherBlogPostsImg = LatestWorksData.filter(
    (item) => item.name !== route.query?.blogPost
  );
  console.log("look at this", otherBlogPostsImg);
  return (
    <section>
      <div className="px-[25px]">
        {IntroData.map((item, key) => (
          <div key={key}>
            <h1>{item.heading}</h1>
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
