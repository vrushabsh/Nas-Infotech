import AboutHeroSection from "../components/About/AboutHeroSection";
// import Aboutus from "../components/About/Aboutus";
// import AboutServicesSection from "../components/About/AboutOurServices";
import { AboutWhyChooseUs } from "../components/About/AboutWhyChooseUs";
import AboutWatchOurVideo from "../components/About/AboutWatchOurVideo";
import AboutFeatureSection from "../components/About/AboutFeatureSection";
import AboutTestimonialsSection from "../components/About/AboutTestimonialsSection";
// import AboutFAQSection from "../components/About/AboutFAQSection";
import AboutProtectionSection from "../components/About/AboutProtectionSection";
import AboutCompany from "../components/About/AboutCompany";
import HomeFAQ from "../components/Home/HomeFAQ";

const About = () => {
  return (
    <div>
      <AboutHeroSection />
      {/* <Aboutus /> */}
      <AboutCompany />
      {/* <AboutServicesSection /> */}
      <AboutProtectionSection />
      <AboutWhyChooseUs />
      <AboutWatchOurVideo />
      <AboutFeatureSection />
      <AboutTestimonialsSection />
      {/* <AboutFAQSection /> */}
      <HomeFAQ />
    </div>

  )
};

export default About;

