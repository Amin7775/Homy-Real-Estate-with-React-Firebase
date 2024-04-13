import Navbar from "../../../components/Navbar/Navbar";
import Topbar from "./Topbar/Topbar";
import HomeSlider from "./slider/HomeSlider";

const Header = () => {
  return (
    <div>
      <Topbar></Topbar>
      <div className="relative">
        <div className="absolute z-10 w-full">
          <Navbar transparent={true}></Navbar>
        </div>
        <div className="z-0">
          <HomeSlider></HomeSlider>
        </div>
      </div>
    </div>
  );
};

export default Header;
