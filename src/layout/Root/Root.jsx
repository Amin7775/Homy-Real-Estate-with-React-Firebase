import { Outlet, ScrollRestoration } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// ..
AOS.init();

const Root = () => {
  return (
    <div className="font-sofia">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ScrollRestoration />
      <ToastContainer />
    </div>
  );
};

export default Root;
