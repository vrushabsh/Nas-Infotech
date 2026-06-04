import AboutTestimonialsSection from "../components/About/AboutTestimonialsSection";
import HomeAboutUs from "../components/Home/HomeAboutUs";
import HomeContactUs from "../components/Home/HomeContactUs";
import HomeCoreFeatures from "../components/Home/HomeCoreFeatures";
import HomeFAQ from "../components/Home/HomeFAQ";
import HomeHeroSection from "../components/Home/HomeHeroSection";
import HomeKeyStrengths from "../components/Home/HomeKeyStrengths";
import HomeServices from "../components/Home/HomeServices";
import HomeWhatWeDo from "../components/Home/HomeWhatWeDo";
import HomeWhyChooseUs from "../components/Home/HomeWhyChooseUs";

const Home = () => {
  return (
    <div>
      <div>
        <HomeHeroSection />
        <HomeAboutUs />
        <HomeServices />
        <HomeKeyStrengths />
        <HomeWhyChooseUs />
        <HomeWhatWeDo />
        <HomeCoreFeatures />
        <AboutTestimonialsSection />
        <HomeContactUs />
        <HomeFAQ />
      </div>
    </div>
  );
};

export default Home;
