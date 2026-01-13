import Header from "../Components/Header";
import Lenis from "../Components/Lenis";
import NavbarStatic from "../Components/NavbarStatic";
import PageIntro from "../Components/PageIntro";
import HomeWSection from "../Components/HomeWSection";
import AproachSection from "../Components/AproachSection";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Lenis />
      <NavbarStatic />
      <Header />
      <PageIntro
        title="the new photo world."
        subtitle="A better photo experience"
      />
      <HomeWSection />
      <AproachSection />
      <Footer />
    </>
  );
};

export default Home;
