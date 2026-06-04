import ServicesDetailsHeroSection from "../ServicesDetailsHeroSection";
import ServicesInProcess from "./ServicesInProcess";

const SoftwareDevelopment = () => {
  return (
    <div>
      <div>
        <ServicesDetailsHeroSection
          title="Software Development"
          description="We transform your ideas into reality. Our team of expert developers, designers and 
          project managers is dedicated to delivering cutting-edge software solutions tailored to your unique 
          business needs."
        />
        <ServicesInProcess />
      </div>
    </div>
  );
};

export default SoftwareDevelopment;
