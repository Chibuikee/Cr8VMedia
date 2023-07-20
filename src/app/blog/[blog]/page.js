"use client";
import Footer from "@/components/Footer";
import IntroSection from "@/components/blogPostsFolder.js/IntroSection";
import ContactUs from "@/components/contactUs";
import React, { useState } from "react";
// import "../../app/globals.css";
import BlogNavbar from "@/components/Navbar/BlogNavbar";
function BlogPost() {
  const [isIntersecting, setIntersecting] = useState(false);

  return (
    <main className="">
      <BlogNavbar isvisible={isIntersecting} />
      <IntroSection setIntersecting={setIntersecting} />
      <ContactUs />
      <Footer />
    </main>
  );
}
export default BlogPost;
