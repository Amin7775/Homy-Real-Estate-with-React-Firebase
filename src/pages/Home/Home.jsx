import Advantages from "./HomeComponents/Advantages/Advantages";
import ContactUs from "./HomeComponents/ContactUs/ContactUs";
import ExploreLocation from "./HomeComponents/ExploreLocation/ExploreLocation";
import Header from "./HomeComponents/Header";
import HomeEstates from "./HomeComponents/HomeEstates/HomeEstates";
import IdealHome from "./HomeComponents/IdealHome/IdealHome";
import Reviews from "./HomeComponents/Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <IdealHome></IdealHome>
      <div className="max-w-[95%] mx-auto">
        <Reviews></Reviews>
      </div>
      <Advantages></Advantages>
      <div className="max-w-[95%] mx-auto">
        <ExploreLocation></ExploreLocation>
      </div>
    <HomeEstates></HomeEstates>
    <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
