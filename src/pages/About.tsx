import AboutHeroSection from "../components/About/AboutHeroSection";
// import Aboutus from "../components/About/Aboutus";
import AboutServicesSection from "../components/About/AboutOurServices";
import { AboutWhyChooseUs } from "../components/About/AboutWhyChooseUs";
import AboutWatchOurVideo from "../components/About/AboutWatchOurVideo";
import AboutFeatureSection from "../components/About/AboutFeatureSection";
import AboutTestimonialsSection from "../components/About/AboutTestimonialsSection";
import AboutFAQSection from "../components/About/AboutFAQSection";
import AboutProtectionSection from "../components/About/AboutProtectionSection";
import AboutCompany from "../components/About/AboutCompany";

const About = () => {
  return (
  <div>
    <AboutHeroSection />
    {/* <Aboutus /> */}
    <AboutCompany />
    <AboutServicesSection />
    <AboutWhyChooseUs />
    <AboutWatchOurVideo />
    <AboutTestimonialsSection />
    <AboutFeatureSection />
    <AboutFAQSection />
    <AboutProtectionSection />
  </div>

)};

export default About;

