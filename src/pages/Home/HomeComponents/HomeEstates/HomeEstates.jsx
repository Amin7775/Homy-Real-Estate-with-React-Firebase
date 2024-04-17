import { useEffect, useState } from "react";
import EstatesCard from "../../../../components/EstatesCard/EstatesCard";
import { Link } from "react-router-dom";

const HomeEstates = () => {

    const [estates, setEstates] = useState([])

    useEffect(()=>{
        fetch('/estate.json')
        .then(res => res.json())
        .then(data => setEstates(data))
    },[])
  return (
    <div className="bg-[#F4EDE8] pt-24 lg:pt-32 pb-16 md:pb-28 mt-32" data-aos="fade-zoom-in"
    data-aos-easing="linear"
    data-aos-delay="100">
      {/* container */}
      <div className="w-[90%] md:w-[95%] mx-auto" data-aos="fade-zoom-in"
    data-aos-easing="linear"
    data-aos-delay="200">
        {/* text content */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-start">New Listings</h1>
        <p className="mt-1 md:mt-2 lg:mt-4 text-lg md:text-2xl  text-center lg:text-start text-slate-500">
          Explore new & featured properties for sale
        </p>
        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  lg:gap-14 mt-10 lg:mt-20" data-aos="fade-zoom-in"
    data-aos-easing="linear"
    data-aos-delay="500">
            {
                estates?.slice(0,8).map(estate => <EstatesCard key={estate.id} estate={estate}></EstatesCard>)
            }
        </div>
        {/* view all btn */}
        <div className="flex justify-center mt-8 md:mt-14">
            <Link to={'/estates'}>
            <button className="bg-custom-text-1 text-white hover:bg-custom-text-2 tra px-8 py-3 h-full rounded-xl text-xl ease-linear duration-200">
                View All Estates
            </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeEstates;
