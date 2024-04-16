import { Link } from "react-router-dom";
import bgImg from "./../../assets/img/HomePage/idealhome.svg";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const ErrorPage = () => {
  return (
    <div className="bg-[#FEF8F4] h-full w-full">
      <Navbar></Navbar>
      <div
        className="h-screen"
        style={{
          background: `url(${bgImg})`,
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <div className="flex flex-col items-center justify-center gap-5 h-full md:h-[95%] lg:h-[90%]">
          {/* title */}
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-semibold text-center max-w-[80%] lg:max-w-[60%] mx-auto  leading-10">
            Oops! It looks like you're lost.
          </h1>
          <p className="text-lg md:text-xl px-8 text-center lg:text-2xl font-light  mt-2 md:mt-5 lg:mt-3">
            The page you're looking for isn't available. Go back to home.
          </p>
          {/* btn */}
          <div className="mt-3 md:mt-5">
            <Link to={"/"}>
              <button className="btn bg-black rounded-2xl px-8 md:px-12 py-3 md:py-4 h-full text-base md:text-lg font-normal text-slate-100 hover:bg-custom-text-1">
                BACK TO HOME
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
