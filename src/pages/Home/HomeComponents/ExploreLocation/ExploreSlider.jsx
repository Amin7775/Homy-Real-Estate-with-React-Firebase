import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./exploreSlider.css";
// import { Link } from "react-router-dom";

const ExploreSlider = ({ savedLocation }) => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container container mx-auto max-w-[90%]">
      <Slider {...settings}>
        {savedLocation?.map((singleLocation, index) => (
          <div
            key={index}
            className=" rounded-3xl overflow-hidden relative px-4 "
          >
            
            <img
              className="h-[400px] mx-auto  w-full rounded-3xl"
              src={singleLocation.image}
              alt=""
              />
            <div className="absolute bg-black opacity-50 inset-y-0 inset-x-4 rounded-3xl cursor-pointer"></div>
            <div className="absolute z-10 bottom-10 drop-shadow-2xl w-[90%] px-1 text-center ">
                <div className="h-full w-full flex flex-col items-center justify-center">

              <h3 className="text-white text-2xl ">
                {singleLocation.location_name}
              </h3>
              <p className="text-slate-300 text-xl font-light">{singleLocation.listing}</p>
                </div>
            </div>
             
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ExploreSlider;
