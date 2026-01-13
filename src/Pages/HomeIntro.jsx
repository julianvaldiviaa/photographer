import { useRef } from "react";
import Lenis from "../Components/Lenis";
import Navbar from "../Components/Navbar";
import Intro from "../Components/Intro";
import PageIntro from "../Components/PageIntro";
import HomeWSection from "../Components/HomeWSection";
import AproachSection from "../Components/AproachSection";
import Footer from "../Components/Footer";

const HomeIntro = () => {

  const navbarRef = useRef(null); 

  return (
    <>
      <Lenis />
      <Navbar ref={navbarRef} />
      <Intro />
      <PageIntro title="the new photo world." subtitle="A better photo experience" />
      <HomeWSection />
      <AproachSection />
      <Footer />
    </>
  );
};

export default HomeIntro;
