"use client";
import Navbar from "../components/Navbar/Navbar";
import Intro from "../components/intro";
import Services from "../components/servicesfolder/services";
import RecentWorks from "../components/RecentWorksFolder/RecentWorks";
import Latest from "../components/LatestFolder/latest";
import Footer from "../components/Footer";
import ContactUs from "../components/contactUs";
import { useState } from "react";
import Hero from "../components/Hero";
export default function Home() {
  const [isIntersecting, setIntersecting] = useState(false);
  return (
    <main className="relative ">
      <Navbar isvisible={isIntersecting} />
      <Hero setIntersecting={setIntersecting} />
      <Intro />
      <Services />
      <RecentWorks />
      <Latest />
      <ContactUs />
      <Footer />
    </main>
  );
}
