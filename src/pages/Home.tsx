import HomeAboutUs from "../components/Home/HomeAboutUs";
import HomeContactUs from "../components/Home/HomeContactUs";
import HomeCoreFeatures from "../components/Home/HomeCoreFeatures";
import HomeFAQ from "../components/Home/HomeFAQ";
import HomeHeroSection from "../components/Home/Homeherosection";
import HomeKeyStrengths from "../components/Home/HomeKeyStrengths";
import HomeWhatWeDo from "../components/Home/HomeWhatWeDo";
import HomeWhyChooseUs from "../components/Home/HomeWhyChooseUs";

const Home = () => {
  return (
    <div>
      <div>
        <HomeHeroSection />
        <HomeAboutUs />
        <HomeKeyStrengths />
        <HomeWhyChooseUs />
        <HomeWhatWeDo />
        <HomeCoreFeatures />
        <HomeContactUs />
        <HomeFAQ />
      </div>
    </div>
  );
};

export default Home;
