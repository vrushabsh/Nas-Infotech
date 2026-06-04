import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import { ServiceDetailsPage } from "./components/ServicesDetails/ServiceDetailsPage";

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
        <Route path="/careers" element={<Careers />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/services/:serviceId" element={<ServiceDetailsPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
