"use client";

// import Navbar from "../Components/commons/Navbar/Navbar";
import HeroSection from "../Components/Homepage/Hero/Hero";
import WhyChooseUs from "../Components/Homepage/WhyChooseUs/WhyChooseUs";
import PartnerProgram from "../Components/Homepage/PartnerProgram/PartnerProgram";
import ViewOurProcess from "../Components/Homepage/ViewOurProcess/ViewOurProcess";
import GetInTouch from "../Components/Homepage/GetInTouch/GetInTouch";
import Footer from "../Components/commons/Footer/Footer";

export default function Home() {
  return (
    <>
      <main style={{ minHeight: "100vh", background: "#000", color: "#fff", width: "100%" }}>
        {/* <Navbar /> */}
        <HeroSection />
      </main>
      <WhyChooseUs />
      <PartnerProgram />
      <ViewOurProcess />
      <GetInTouch />
      <Footer />
    </>
  );
}
