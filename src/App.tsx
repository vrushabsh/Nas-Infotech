import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
// import IndustriesDetails from "./components/Industries/IndustriesDetails";
// import ServiceDetailPage from "./components/ServicesDetails/ServiceDetailsPage";
import ServiceDetails from "./pages/ServiceDetails/[slug]";
import IndustryDetails from "./pages/IndustryDetails/[slug]";
import ScrollToUp from "./components/Home/ScrollToTop";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/industries" element={<Industries />}></Route>
        <Route  path="/industries/:id" element={<IndustryDetails />}
  />
        <Route path="/careers" element={<Careers />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/services/:slug" element={<ServiceDetails />} />
        
      </Routes>
      <Footer />
      <ScrollToUp />
    </>
  );
};

export default App;
