import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import footerShape from "./../../assets/img/footer/footerWrapper.svg";
import logoimg from "./../../assets/img/footer/Logo.svg";
import { CiFacebook, CiTwitter, CiLinkedin } from "react-icons/ci";
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#FEF8F4] py-5 h-auto  overflow-hidden ">
      <div className=" max-w-[95%] lg:max-w-[85%] mx-auto h-full flex gap-2 flex-wrap">
        {/* 1 */}
        <div
          className="md:w-full h-[500px] lg:flex-1  p-5 w-full "
          style={{ background: `url(${footerShape})` }}
        >
          <div className="bg-white h-full w-full px-5 py-10">
            <img className="mt-1" src={logoimg} alt="" />
            {/* text */}
            <div className=" h-full  flex flex-col justify-around">
              <div>
                <p className="mb-1 text-slate-500">ADDRESS</p>
                <p className="w-full text-wrap text-xl text-slate-500 ">
                  Ka/199, Bagbari, Karmichel Road, Gabtoli, Dhaka, Bangladesh
                </p>
              </div>
              <div>
                <p className="mb-1 text-slate-500">CONTACT</p>
                <p className="underline text-xl text-slate-500 cursor-pointer">
                  Amin777589@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-2 text-3xl mb-10">
                <FaFacebookSquare></FaFacebookSquare>
                <FaGithubSquare></FaGithubSquare>
                <FaTwitterSquare></FaTwitterSquare>
                <FaInstagramSquare></FaInstagramSquare>
                <FaLinkedin></FaLinkedin>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="w-full md:w-[30%] mx-auto lg:w-[23%]  h-[80%] mt-10 lg:mt-20 pl-5 lg:pl-10">
            <h1 className="text-3xl font-semibold">Links</h1>
            {/* list */}
            <div className="mt-5 flex flex-col gap-2 pr-2">
            <p className="text-xl md:text-2xl text-slate-500 font-light cursor-pointer">Home</p>
            <p className="text-xl md:text-2xl text-slate-500 font-light cursor-pointer">Membership</p>
            <p className="text-xl md:text-2xl text-slate-500 font-light cursor-pointer">About Company</p>
            <p className="text-xl md:text-2xl text-slate-500 font-light cursor-pointer">Blog</p>
            <p className="text-xl md:text-2xl text-slate-500 font-light cursor-pointer">Explore Careers</p>
            <p className="text-xl md:text-2xl text-slate-500 font-light cursor-pointer">Pricing</p>
            <p className="text-xl md:text-2xl text-slate-500 font-light cursor-pointer">Dashboard</p>
            </div>
        </div>
        {/* 3 */}
        <div className="w-full md:w-[30%] mx-auto lg:w-[23%]  h-[80%] mt-10 lg:mt-20 pl-5 lg:pl-10">
            <h1 className="text-3xl font-semibold">Legal</h1>
            {/* list */}
            <div className="mt-5 flex flex-col gap-2">
            <p className="text-xl md:text-2xl text-slate-500 font-light cursor-pointer">Terms & conditions</p>
            <p className="text-xl md:text-2xl text-slate-500 font-light cursor-pointer">Cookie</p>
            <p className="text-xl md:text-2xl text-slate-500 font-light cursor-pointer">Privacy policy</p>
            <p className="text-xl md:text-2xl text-slate-500 font-light cursor-pointer">Faq's</p>
            
            </div>
        </div>
        <div className="w-full md:w-[30%]  lg:w-[23%]  h-[80%] mt-10 lg:mt-20 pl-5 md:pl-10 lg:pl-10">
            <h1 className="text-3xl font-semibold">Estate listings</h1>
            {/* list */}
            <div className="mt-5 flex flex-col gap-2">
            <p className="text-xl md:text-2xl text-slate-500 font-light cursor-pointer">Buy</p>
            <p className="text-xl md:text-2xl text-slate-500 font-light cursor-pointer">Sell </p>
            <p className="text-xl md:text-2xl text-slate-500 font-light cursor-pointer">Rent</p>
            
            </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default Footer;
