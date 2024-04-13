import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swipper.css";


import slider3 from "./../../../../assets/img/slider/slider 8.jpg";
import slider4 from "./../../../../assets/img/slider/ornello-Cover.jpg";
import slider5 from "./../../../../assets/img/slider/avana-cover.jpg";

const HomeSlider = () => {
  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        effect={"fade"}
        lazy={true}
        rewind={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="parallax-bg relative"
            style={{
              "background-image": `url(${slider3})`,
              height: "100vh",
              display: "block",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute h-full w-full bg-black opacity-20"></div>
            <div className="flex flex-col items-center justify-center h-full ">
              <p className="max-w-[50%] mx-auto text-slate-200 font-sofia text-xl lg:text-2xl font-semibold drop-shadow-lg mb-3 lg:mb-5">
                DISCOVER THE
              </p>
              <h1 className="text-white text-4xl lg:text-7xl font-bold drop-shadow-md font-sofia stroke-black text-center">
                BENCHMARK OF EXCELLENCE
              </h1>
              
              <h1 className="text-white text-2xl lg:text-5xl font-bold drop-shadow-xl font-sofia stroke-black mt-3 lg:mt-5 border-b-4 border-white cursor-pointer">
                HOMY PRISTINE VILLA
              </h1>

              <p className="max-w-[80%] lg:max-w-[50%] mx-auto text-slate-200 font-sofia text-lg lg:text-xl drop-shadow-lg mt-5 lg:mt-10 text-center">
                A great platform to buy, sell and rent your properties without
                any agent or commissions.
              </p>
            </div>
          </div>
          {/* <img src={slider3} /> */}
        </SwiperSlide>
        {/* slide 2 */}
        <SwiperSlide>
          <div
            className="parallax-bg relative"
            style={{
              "background-image": `url(${slider4})`,
              height: "100vh",
              display: "block",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute h-full w-full bg-black opacity-30"></div>
            <div className="flex flex-col items-center justify-center h-full ">
            <p className="max-w-[50%] mx-auto text-slate-200 font-sofia text-xl lg:text-2xl font-semibold drop-shadow-lg mb-3 lg:mb-5 text-center">
                THE PERFECT PORTRAYAL OF 
              </p>
              <h1 className="text-white text-4xl lg:text-7xl font-bold drop-shadow-md font-sofia stroke-black text-center">
                ARCHITECTURAL SUPREMACY
              </h1>
              <h1 className="text-white text-2xl lg:text-5xl font-bold drop-shadow-xl font-sofia stroke-black mt-3 lg:mt-5 border-b-4 border-white cursor-pointer">
                HOMY ORENELLO
              </h1>

              <p className="max-w-[80%] lg:max-w-[50%] mx-auto text-slate-200 font-sofia text-lg lg:text-xl drop-shadow-lg mt-5 lg:mt-10 text-center">
              Experience the future of real estates.
              </p>
            </div>
          </div>
          {/* <img src={slider3} /> */}
        </SwiperSlide>
        {/* slider 3 */}
        <SwiperSlide>
          <div
            className="parallax-bg relative"
            style={{
              "background-image": `url(${slider5})`,
              height: "100vh",
              display: "block",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute h-full w-full bg-black opacity-35"></div>
            <div className="flex flex-col items-center justify-center h-full ">
            <p className="max-w-[50%] mx-auto text-slate-200 font-sofia text-xl lg:text-2xl font-semibold drop-shadow-lg mb-3 lg:mb-5">
                EXPLORE
              </p>
              <h1 className="text-white text-4xl lg:text-7xl font-bold drop-shadow-md font-sofia stroke-black text-center">
                EXCLUSIVITY WITH HOMY
              </h1>
              <h1 className="text-white text-2xl lg:text-5xl font-bold drop-shadow-xl font-sofia stroke-black mt-3 lg:mt-5 border-b-4 border-white cursor-pointer">
                HOMY AVANA
              </h1>

              <p className="max-w-[80%] lg:max-w-[50%] mx-auto text-slate-200 font-sofia text-lg lg:text-xl drop-shadow-lg mt-5 lg:mt-10 text-center">
              Say goodbye to traditional real estate hurdles! With our platform, you can easily buy, sell, or rent properties at your own pace.
              </p>
            </div>
          </div>
          {/* <img src={slider3} /> */}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;
