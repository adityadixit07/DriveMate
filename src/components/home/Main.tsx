import CTA from "./CTA";
import Features from "./Features";
import Footer from "./Footer";
import Header from "./Header";
import HowItWorks from "./HowItWorks ";
import Navbar from "./Navbar";
import Testimonials from "./Testimonials ";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Main;
