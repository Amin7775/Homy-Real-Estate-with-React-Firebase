import { Outlet } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
// ..
AOS.init();

const Root = () => {
  return (
    <div className="font-sofia">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
