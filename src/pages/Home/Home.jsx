import { Helmet } from "react-helmet-async";
import Advantages from "./HomeComponents/Advantages/Advantages";
import ContactUs from "./HomeComponents/ContactUs/ContactUs";
import ExploreLocation from "./HomeComponents/ExploreLocation/ExploreLocation";
import Header from "./HomeComponents/Header";
import HomeEstates from "./HomeComponents/HomeEstates/HomeEstates";
import IdealHome from "./HomeComponents/IdealHome/IdealHome";
import Reviews from "./HomeComponents/Reviews/Reviews";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Home = () => {
  return (
    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
      <Helmet>
        <title>Homy</title>
      </Helmet>
      <Header></Header>
      <IdealHome></IdealHome>
      <div
        className="max-w-[95%] mx-auto"
        data-aos="fade-zoom-in"
        data-aos-easing="linear"
        data-aos-delay="100"
      >
        <Reviews></Reviews>
      </div>
      <Advantages></Advantages>
      <div
        className="max-w-[95%] mx-auto"
        data-aos="fade-zoom-in"
        data-aos-easing="linear"
        data-aos-delay="100"
      >
        <ExploreLocation></ExploreLocation>
      </div>
      <HomeEstates></HomeEstates>
      <div className="" data-aos="fade-zoom-in">
        <ContactUs></ContactUs>
      </div>
    </div>
  );
};

export default Home;
