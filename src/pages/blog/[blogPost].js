import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import IntroSection from "@/components/blogPostsFolder.js/IntroSection";
import ContactUs from "@/components/contactUs";
import React from "react";
import "../../app/globals.css";
function BlogPost() {
  return (
    <section>
      <Navbar />
      <IntroSection />
      <ContactUs />
      <Footer />
    </section>
  );
}
export default BlogPost;
