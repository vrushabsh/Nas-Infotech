import AboutHeroSection from "../components/About/AboutHeroSection";
import { AboutWhyChooseUs } from "../components/About/AboutWhyChooseUs";
import AboutWatchOurVideo from "../components/About/AboutWatchOurVideo";
import AboutFeatureSection from "../components/About/AboutFeatureSection";
import AboutTestimonialsSection from "../components/About/AboutTestimonialsSection";
import AboutProtectionSection from "../components/About/AboutProtectionSection";
import AboutCompany from "../components/About/AboutCompany";
import HomeFAQ from "../components/Home/HomeFAQ";

const About = () => {
  return (
    <div>
      <AboutHeroSection />
      <AboutCompany />
      <AboutProtectionSection />
      <AboutWhyChooseUs />
      <AboutWatchOurVideo />
      <AboutFeatureSection />
      <AboutTestimonialsSection />
      <HomeFAQ />
    </div>

  )
};

export default About;

