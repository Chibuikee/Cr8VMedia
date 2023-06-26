import Navbar from "../components/Navbar/Navbar";
import Intro from "../components/intro";
import Services from "../components/servicesfolder/services";
import RecentWorks from "../components/RecentWorksFolder/RecentWorks";
import Latest from "../components/LatestFolder/latest";
import Footer from "../components/Footer";
import ContactUs from "../components/contactUs";
export default function Home() {
  return (
    <main className="min-h-screen ">
      <Navbar />
      <Intro />
      <Services />
      <RecentWorks />
      <Latest />
      <ContactUs />
      <Footer />
    </main>
  );
}
