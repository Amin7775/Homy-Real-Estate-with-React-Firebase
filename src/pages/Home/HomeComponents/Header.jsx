import Navbar from "../../../components/Navbar/Navbar";
import Topbar from "./Topbar/Topbar";
import HomeSlider from "./slider/HomeSlider";

const Header = () => {
  return (
    <div >
      <Topbar></Topbar>
          {/* <Navbar transparent={false}></Navbar> */}
      <div className="relative" >
        <div className="absolute z-10 w-full">
        </div>
        <div className="z-0">
          <HomeSlider></HomeSlider>
        </div>
      </div>
    </div>
  );
};

export default Header;
